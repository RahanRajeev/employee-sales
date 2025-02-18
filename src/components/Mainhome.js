import React from 'react'
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Mainhome = () => {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Login

  // const [show1, setShow1] = useState(false);

  //   const handleClose1 = () => setShow1(false);
  //   const handleShow1 = () => setShow1(true);


//   userreg
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [username,setusername]=useState('')
  const navuser=useNavigate()
  const userreg=async(e)=>{
    e.preventDefault()
    // setIsButtonClicked(true);
    const res=await axios.post("http://localhost:7000/user/userreg",
    {username,useremail,usergender,userphone,userpassword,usercpassword,userfile},
    {headers:{'Content-Type':'multipart/form-data'}})
    if(res.data.status==='user'){    
        alert('ok')
        navuser('/')
    }else{
      alert('username or password is already exist')
      navuser('/')
    }
  }
  const [useremail,setuseremail]=useState('')
  const [usergender,setusergender]=useState('')
  const [userphone,setuserphone]=useState('')
  const [userpassword,setuserpassword]=useState('')
  const [usercpassword,setusercpassword]=useState('')
  const [userfile,setuserfile]=useState('')
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    if (!useremail) {
      setMessage("");
      return;
    }
  
    setLoading(true);
  
    const checkEmail = async () => {
      const response = await axios.get(`http://localhost:7000/user/checkemail/${useremail}`);
      
      if (response.data.exists) {
        setMessage("Email already exists!");
      } else {
        setMessage("Email available!");
      }
  
      setLoading(false);
    };
  
    // Debounce API calls (waits 1000ms after the last keystroke)
    const timeoutId = setTimeout(checkEmail, 1000);
    return () => clearTimeout(timeoutId);
  }, [useremail]);

  
  


  //  Login
  // const[logname,setlogname]=useState('')
  // const navlog=useNavigate()
  // const login=async(e)=>{
  //   e.preventDefault()
  //   const res=await axios.post('http://localhost:7000/user/login',{logname,logpassword})
  //   console.log(res.data.uid);
  //   if(res.data.status==='ok'){
  //     sessionStorage.setItem('uid',res.data.uid)
  //     navlog('/userhome')
  //   }else{
  //     alert('incorrect username or password')
  //     navlog('/')
  //   }
  // }
  // const[logpassword,setlogpassword]=useState('')
 



  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        
        {/* <Image src={logo} className='homelogo' roundedCircle /> */}
        <Navbar.Brand>SwiftCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <NavDropdown title="Register" id="collapsible-nav-dropdown">
              {/* <NavDropdown.Item href="#action/3.1" >seller</NavDropdown.Item> */}
              <NavDropdown.Item href="" onClick={handleShow}>
                user
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link eventKey={2} href="/login" >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    {/* Register */}

    <Modal show={show} onHide={handleClose}>
        
        <Modal.Body>
        <Form className='reg' onSubmit={userreg}>
            <Form.Group className="mb-3" controlId="emailInput">
              <Form.Label>Username</Form.Label><br></br>
              {isButtonClicked && !username && <span style={{ color: "red" }}>Username is required!</span>}
              <br />
              <Form.Control
                type="text"
                onChange={(e)=>setusername(e.target.value)}
                
                autoFocus
              />
              
              <br></br>
             

              <Form.Label>Email</Form.Label><br></br>
              <span style={{ color: message === "Email already exists!" ? "red" : "green" }}>
                {loading ? "Checking..." : message}
              </span>
              <Form.Control
                type="email"
                value={useremail}
                placeholder="name@example.com"
                onChange={(e)=>setuseremail(e.target.value)}
                
                autoFocus
              />
              
              <br></br>
              <Form.Label>Gender:</Form.Label><br></br>
              {isButtonClicked && !usergender && <span style={{ color: "red" }}>Gender is required!</span>}
              <br />
              <input
                type="radio"
                name="gen"
                value="male"
                onChange={(e)=>setusergender(e.target.value)}
                autoFocus
              />male
              <input
                type="radio"
                name="gen"
                value="female"
                onChange={(e)=>setusergender(e.target.value)}
                autoFocus
              />female
              <input
                type="radio"
                name="gen"
                value="other"
                onChange={(e)=>setusergender(e.target.value)}
                autoFocus
              />others<br></br>
              <Form.Label>phone</Form.Label>
              <Form.Control
                type="text"
                value={userphone}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d{0,10}$/.test(value)) {  // Allows only numbers & max 10 digits
                    setuserphone(value);
                  }
                }}
                autoFocus
              />
              {isButtonClicked && userphone.length > 0 && userphone.length !== 10 && (
                <span style={{ color: "red" }}>Phone number must be 10 digits!</span>
              )}<br></br>


              <Form.Label>password</Form.Label><br></br>
              {isButtonClicked && !userpassword && <span style={{ color: "red" }}>Password is required!</span>}
              <br />
              <Form.Control
                type="text"
                onChange={(e)=>setuserpassword(e.target.value)}
                autoFocus
              />
              <Form.Label>Confirm Password</Form.Label><br></br>
              {isButtonClicked && userpassword && usercpassword && userpassword !== usercpassword && (
                <span style={{ color: "red" }}>Passwords do not match!</span>
              )}
              <Form.Control
                type="text"
                onChange={(e)=>setusercpassword(e.target.value)}
                autoFocus
              />
               <Form.Label>Image</Form.Label><br></br>
               {isButtonClicked && !userfile && <span style={{ color: "red" }}>Image is required!</span>}
              <br />
              <Form.Control
                type="file"
                name="file"
                onChange={(e)=>setuserfile(e.target.files[0])}
                autoFocus
              />
               
            </Form.Group>
            <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={
                loading || message === "Email already exists!" ||
                userphone.length !== 10 || 
                !username || !useremail || !usergender || !userphone || 
                !userpassword || !usercpassword || !userfile || 
                userpassword !== usercpassword
              }
            >
              Register
            </Button>


            
          </Form>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>



      {/* Login */}


      {/* <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton className='register'>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className='register'>
          <Form onSubmit={login}>
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
        </Modal.Body>
        
      </Modal> */}


    </div>
  )
}

export default Mainhome