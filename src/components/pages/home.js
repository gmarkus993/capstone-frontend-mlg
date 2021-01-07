import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Col } from 'react-bootstrap';
import StarWars from '../../../static/images/starwars.gif'

export default function home() {
    return (
        <div className="form-container" style={{
            display: 'flex',
            justifyContent: 'center',
            height: '300px'
        }} >
            <Container>



            <div className="form-wrapper">

                <h1 style={{
                    color: 'lightblue',
                    display:'flex',
                    justifyContent: 'center',
                    marginTop: '15vh',
                    marginBottom: '1rem'
                }}>WELCOME</h1>

                <h2 style={{
                    color:'lightblue',
                    display:'flex',
                    justifyContent:'center'
                }}>Code Knights is a place to hone your coding skills</h2>

                
        
                
            </div>
            </Container>
        </div>
    )
}