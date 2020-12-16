import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import TrialEditor from '../trial-editor'




export default class TrialOne extends Component {
    constructor(){
        super();
        this.state = {
            id: '',
            js: '',
            codeSubmission: ''
        }
    }



    render(){
     return (
        
        <div className="form-container">
           <div className="form-wrapper" style={{
                height: '10rem',
                color: 'lightblue',
                display: 'flex',
                justifyContent: 'center'
            }} >
                <TrialEditor/>
                
            </div>  
                <Container>
                    <Col style={{
                        width: '8rem'
                    }} >
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

        </div>
    )
}
}





                        
                            

            
         



