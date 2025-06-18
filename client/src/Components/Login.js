import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { login } from '../Redux/Actions/authActions';

const Login =()=>{

        
        const [email,setEmail]= useState('')
        const [password,setPassword]= useState('')

        const navigate= useNavigate()
        const dispatch= useDispatch()

        const handleLogin=(e)=>{
            e.preventDefault()
            dispatch(login({email,password},navigate))
        }
    return(
        <div>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
                </Form.Group>
                    <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Enter Password" />
                </Form.Group>
                <Button onClick={(e)=>handleLogin(e)} variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login