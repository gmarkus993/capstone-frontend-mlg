import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Button } from 'react-bootstrap';

export default class SignUp extends Component {
    constructor(){
        super()
        
        this.state = {
            username:"",
            password: "",
            passwordConfirm: "",
            error: false,
            passwordError: false,
            usernameError: false

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()

        if (this.state.password === this.state.passwordConfirm)
        fetch("http://backend-mlg.herokuapp.com/user/add", {
            method: "POST",
            headers: { "content-type" : "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "User added good job") {
                this.props.history.push("/login")
            }
            else if (data === "User already exists") {
                this.setState({ usernameError: true})
            }

            else {
                this.setState({ error: true })
            }

        })
        .catch(error => {
            console.log("error created user", error)
            this.setState({ error: true})
        })
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }




    render() {
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
        
                <Form onSubmit={this.handleSubmit} style={{
                    width: '20rem'
                }} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="username" placeholder="Enter email" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formGroupRetypePassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="passwordConfirm" value={this.state.passwordConfirm} onChange={this.handleChange} placeholder="Retype Password" />
                    </Form.Group>
                    
                    <div className='signup-button' style={{
                        display:'flex',
                        justifyContent: 'flex-end'
                    }} >
                        <Button type="submit">SIGNUP</Button>
                    </div>
                </Form>
            </div>
        </div>
    )}
}