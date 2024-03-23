import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { Context } from '../..';
import toast from 'react-hot-toast';
// import BookATest from '../BookATest/BookATest';
import { Link } from 'react-router-dom';
function BasicExample(props) {
  const {isAuthorized,setIsAuthorized,user,setUser}=useContext(Context);
  const navigateTo=useNavigate();


  const BookATestfxn =(price)=>{
    if(!isAuthorized){
      toast.error("User not Authorized!");
      navigateTo('/login');
      return;
    }
    
}
  return (
    <Card className="custom-card"> 
      <Card.Img className="custom-card-img" variant="top" src={props.imglink} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
        <div className="custom-card-text-price">Price: <strong>{props.price}</strong></div>
          <br />
          {props.description}
        </Card.Text>
        <Link to={'https://www.lalpathlabs.com/book-a-test/delhi'} target='_blank'><Button className="custom-button" onClick={()=>BookATestfxn(`${props.price}`)}>Book the Test</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
