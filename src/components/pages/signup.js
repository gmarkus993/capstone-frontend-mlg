import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Button } from 'react-bootstrap';

export default function signup() {
    return (
        <div className="form-container" style={{
            display: 'flex',
            justifyContent: 'center',
            height: '23rem'
        }} >
            <div className="form-wrapper">

                <h2 style={{
                    color:'lightblue'
                }}>SIGNUP</h2>
        
                <Form style={{
                    width: '20rem'
                }} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Retype Password" />
                    </Form.Group>
                    <div className='signup-button' style={{
                        display:'flex',
                        justifyContent: 'flex-end'
                    }} >
                        <Button>SIGNUP</Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}