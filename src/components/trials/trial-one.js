import React, { Component } from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import { Container, Col, Row, Button } from 'react-bootstrap';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import TrialEditor from '../trial-editor'




export default class TrialOne extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            js: '',
            codeSubmission: ''
        }
    }



    render(){
        const {codeSubmission} = this.state.codeSubmission
     return (
        
        <div className="form-container">
           <div className="form-wrapper" style={{
                height: '10rem',
                color: 'lightblue',
                display: 'flex',
                justifyContent: 'center'
            }} >
            <div>
                <h2>HOW STRONG IS THE FORCE WITHIN YOU?</h2>
                <h2></h2>
                <h4 style={{
                    color: '#007bff'
                }}>Write a fuction named greeting that returns a string of hello</h4>
                <TrialEditor codeSubmission={codeSubmission}/>
                {/* <Button>TEST THE FORCE</Button> */}
            </div>    

                
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





                        
                            

            
         



