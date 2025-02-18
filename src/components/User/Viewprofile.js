import axios from 'axios';
import React, {useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Editprofile from './Editprofile';




const Viewprofile = () => {
    const[name,setname]=useState('')

    const profile=async()=>{
        const uid=sessionStorage.getItem('uid')
        const res=await axios.get("http://localhost:7000/user/viewprofile",{params:{uid}})
        console.log(res.data);
        setname(res.data.data.name)
        setemail(res.data.data.email)
        setgender(res.data.data.gender)
        setphone(res.data.data.phone)
        setimage(res.data.data.image)
    }
    const[email,setemail]=useState('')
    const[gender,setgender]=useState('')
    const[phone,setphone]=useState('')
    const[image,setimage]=useState('')
    const [showEdit, setShowEdit] = useState(false);


    useEffect(()=>{
        profile();
    },[])


  

    
    
  return (

    
    <div>
        {showEdit ? (
                <Editprofile
                    name={name}
                    email={email}
                    gender={gender}
                    phone={phone}
                    image={image}
                    setname={setname}
                    setemail={setemail}
                    setgender={setgender}
                    setphone={setphone}
                    setimage={setimage}

                    setShowEdit={setShowEdit} // Pass state toggle function
                />
            ) : (
                <Card style={{ width: '18rem' }} className='sprofile'>
                    <Card.Img variant="top" src={`http://localhost:7000/${image}`} />
                    <Card.Body>
                        <Card.Text>Name: {name}</Card.Text>
                        <Card.Text>Email: {email}</Card.Text>
                        <Card.Text>Gender: {gender}</Card.Text>
                        <Card.Text>Phone: {phone}</Card.Text>
                        <Button variant="primary" onClick={() => setShowEdit(true)}>Edit</Button>
                    </Card.Body>
                </Card>
            )}
    </div>
  )
}

export default Viewprofile