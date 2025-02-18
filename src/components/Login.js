import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';



const Login = () => {

  const [logname, setlogname] = useState('')
  const navlog = useNavigate()
  const loginn = async (e) => {
    e.preventDefault()
    const res = await axios.post('http://localhost:7000/user/login', { logname, logpassword })
    console.log(res.data.uid);
    if (res.data.status === 'ok') {
      sessionStorage.setItem('uid', res.data.uid)
      navlog('/userhome')
    }else if(res.data.status==='admin'){
      sessionStorage.setItem('uid', res.data.uid)
      navlog('/adminhome')
    } else {
      alert('incorrect username or password')
      navlog('/')
    }
  }
  const [logpassword, setlogpassword] = useState('')


  //   google authetication

  const responseMessage = (response) => {
    console.log(response);
  };
  const errorMessage = (error) => {
    console.log(error);
  };


  const [user, setUser] = useState([]);
  const [profile, setProfile] = useState([]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log('Login Failed:', error)
  });

  useEffect(
    () => {
      if (user) {
        axios
          .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: 'application/json'
            }
          })
          .then((res) => {
            setProfile(res.data);
          })
          .catch((err) => console.log(err));
      }
    },
    [user]
  );

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <div>
      <Form onSubmit={loginn}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            onChange={(e) => setlogname(e.target.value)}
            value={logname}
            autoFocus
          />
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setlogpassword(e.target.value)}
            value={logpassword}
            autoFocus
          />
          <Button classname='' variant="primary" type='submit'>
            Login
          </Button>

        </Form.Group>
      </Form>

      <div>
        {profile ? (
          <div>
            <img src={profile.picture} alt="user image" />
            <h3>User Logged in</h3>
            <p>Name: {profile.name}</p>
            <p>Email Address: {profile.email}</p>
            <br />
            <br />
            <button onClick={logOut}>Log out</button>
          </div>
        ) : (
          <button onClick={() => login()}>Sign in with Google 🚀 </button>
        )}
      </div>
    </div>
  )
}

export default Login