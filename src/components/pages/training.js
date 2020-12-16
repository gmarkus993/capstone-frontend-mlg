import React from 'react'
import { NavLink } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormGroup } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';




export default function training() {
    return (
        


                <Container>
                    <Col style={{
                        marginTop: '10rem'
                    }}>
                        <Row>

                            <h2 style={{
                                color:'lightblue',
                                width: '20rem'

                            }}>TRAINING</h2>
                        </Row>
                        <Row>
                            <NavLink to="/trial-one">Trial One</NavLink>
                        </Row>
                        <Row>
                            <NavLink to="/trial-two">Trial Two</NavLink>
                        </Row>
                        <Row>
                            <NavLink to="/trial-three">Trial Three</NavLink>
                        </Row>
                    </Col>
                </Container>
        
                
            
    )
}