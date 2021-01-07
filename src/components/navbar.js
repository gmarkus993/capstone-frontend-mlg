import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faOldRepublic } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

export default class Navbar extends Component {
    constructor(){
        super();
    }
    render() {
        return (
            <div>
                <Container style={{
            height: '40vh',
            color: 'lightblue' 
            }} >
            <Row style={{
              height: '7rem'
            }} >
              <Col>
                <FontAwesomeIcon icon ={faOldRepublic} style={{
                  fontSize: '5rem',
                  marginTop: '1rem'
                }} />

            <h3>CodeKnights</h3>

            <NavLink to="/login"style= {{
              paddingRight: '.42rem'
            }} href="">
              Login</NavLink>
            
            <NavLink to="/signup">Sign Up</NavLink>
            
            </Col>
            <Col style= {{
            display:'flex',
            justifyContent: 'space-around'
           }}>
                <NavLink exact to="/" style={{
                    fontSize:'1.4rem',
                    color: '#007bff'
                }} >
                    Home
                </NavLink>
                <NavLink to="/about" style={{
                    fontSize:'1.4rem',
                    color: '#007bff'
                }} >
                    Credits
                </NavLink>
                <NavLink to="/training" style={{
                    fontSize:'1.4rem',
                    color: '#007bff'
                }} >
                    Training
                </NavLink>
              
              </Col>
            </Row>
        
          </Container>

            
                
            </div>
        )
    }
}
