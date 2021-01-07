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
            <Container>
              <Col>

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
                        }}>Create a variable called favoriteFood,
                        </h4>
                        <h4 style={{
                            color: '#007bff'
                        }}>assign the value of your food of choice
                        </h4>
                        <TrialEditor codeSubmission={codeSubmission}/>
                    </div>    

                        
                </div>
                </Col>  
                </Container>
               
        </div>
    )
}
}
