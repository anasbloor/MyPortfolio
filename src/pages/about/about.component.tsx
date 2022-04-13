import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from "react-bootstrap/Button";
import Profile from '../../assets/img/profile/profile.webp'
import "./about.style.css";
import { FormControl } from 'react-bootstrap';

const About = () => {
    return (
        <div id='about'>
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">
                        {/* profile pic */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2">
                                <Image className="profile justify-content-end" alt="profile" src={Profile} fluid thumbnail/>
                            </Row>
                        </Col>

                        {/* details section */}
                        <Col xs={12} md={6} className="my-deets">
                            <Row className=" align-items-start p-2 my-details rounded flexbox">
                                Hi there! I'm <strong>&nbsp;Anas</strong>
                                <br />
                                I am a fluently bilingual Mechanical Engineer with experience working with project managers and as a part of multidisciplined teams.
                                During my internship terms, I presented my team progress in technical presentations, wrote technical documents to justify maintenance projects, and reviewed shop drawings. 
                                At Sanofi Pasteur, the leading vaccine production company, my role had an emphasis on HVAC maintenance and design, using excel and VBA to analyse collected data and write reports on system failure trends. 
                                During my term with Cheme, an engineering consulting company, I worked hands on in a fast-paced environment to complete demanding projects, allowing me to rapidly grow as a contributor to the team. 
                                As for academics, I hold a 3.4CGPA with a 3.8GPA in modeling classes, and also have project experience working with CFD and FEA software, namely Star CCM+ and ANSYS Fluent.
                                <div id="deets">
                                    <p><strong>EDUCATION</strong></p>
                                    York University Lassonde School of Engineering - Mechanical Engineering
                                    <br /> York University Schulich School of Business - Entrepreneurship Certificate<br />
                                </div> 
                                <div id="deets">
                                    <p><strong>AWARDS</strong></p>
                                    York University Biomechanics Competition - 1st
                                    <br /> York Engineering Competition - 2nd
                                </div>    
                            
                            </Row>
                                {/* buttons section */}
                            <Row className="d-flex justify-content-end flex-wrap buttons" >
                                <div>
                                    <a href="#contact">
                                    <Button className="m-1 butt" variant="outline-primary">
                                        Let's talk
                                    </Button>
                                    </a>
                                </div>
                                <div>
                                    <a href="#contact">
                                    <button><a href='https://google.com' alt='Broken Link'>This is a button</a></button>
                                    </a>
                                </div>
                            </Row> 
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
