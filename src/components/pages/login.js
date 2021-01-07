import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup, Button, Container } from 'react-bootstrap';
import Cookies from "js-cookie"

export default class login extends Component {
    constructor(){
        super()
        this.state = {
            username: "",
            password: "",
            loginFailed: false,
            loginError: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault()

        Cookies.set("username", this.state.username)
        fetch("http://backend-mlg.herokuapp.com/user/authentication",{
            method: "POST",
            headers: { "content-type": "application/json"},
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "SUCCESS") {
                Cookies.set("username", this.state.username)
                this.props.history.push("/training")
            }
            else {
                this.setState({loginFailed: true})
            }
            
        })
        .catch(error => {
            console.log("Error logging in:", error)
            this.setState({ loginError: true})
        })  

        }

    

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }


    render() {
    return (
        <div className="form-container" style={{
            display: 'flex',
            justifyContent: 'center',
            height: '300px'
            }}>

            <div className="form-wrapper">

                <h2 style={{
                    color:'lightblue'
                }}>LOGIN</h2>
        
                <Form onSubmit={this.handleSubmit} style={{
                    width: '20rem'
                }} >
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name="username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>
                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>
                    <div className='login-button' style={{
                        display:'flex',
                        justifyContent: 'flex-end'
                    }} >
                        <Button type="submit">LOGIN</Button>
                    </div>
                    
                </Form>
            </div>
            
        </div>
    )
    }
}