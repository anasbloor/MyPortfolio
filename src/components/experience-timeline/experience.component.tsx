import React from 'react';
import './experience.style.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Sanofi from '../../assets/img/experience/sanofi.svg';
import Cheme from '../../assets/img/experience/cheme2.webp';
import York from '../../assets/img/experience/york.webp';
import TorontoBike from '../../assets/img/experience/torontobike.webp';
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline';

const Experience = () => {
    return (
        <div id="experience">
            <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
            <Timeline>
                <Events>

                <ImageEvent
                        date="Start: May 2020"
                        className="text-center"
                        text="Cheme Engineering - 4 Months"
                        src={Cheme}
                        alt="QA Coop"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    Process Engineer
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> Implemented and valiadated a new packaging line firmware 
                                        <hr />
                                        <strong>Skills:</strong>
                                        <ul className="list-styles pt-1">
                                        <li>Engineering TurnOver Package reporting</li>
                                        <li>Communication with technical clients</li>
                                        <li>Configure proprietary packaging line software</li>
                                        </ul>
                                        <hr />
                                        
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </ImageEvent>

                    <ImageEvent
                        date="Start: May 2019"
                        className="text-center"
                        text="Sanofi Pasteur - 12 months"
                        src={Sanofi}
                        alt="Reliability Engineering"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    Reliability Engineering COOP
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> Reduced equipment unexpected downtime
                                        <hr />
                                        <strong>Skills:</strong>
                                        <ul className="list-styles pt-1">
                                        <li>Failure Modes and Effects Analysis</li>
                                        <li>Reliability Centered Maintenance</li>
                                        <li>Preventive Maintenance in GMP environment</li>
                                        </ul>
                                        <hr />
                                        
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </ImageEvent>

                    <ImageEvent
                        date="Start: Jan 2018"
                        className="text-center"
                        text="York University - 12 months"
                        src={York}
                        alt="Academic PASS Instructor"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    Academic PASS Instructor
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> Aided first year student grasp calculus concepts
                                        <hr />
                                        <strong>Skills:</strong>
                                        <ul className="list-styles pt-1">
                                        <li>Methods of breaking down complex concepts</li>
                                        <li>Redundant communiation methods to ensure understanding</li>
                                        <li>Collaboration with professors in preparing material</li>
                                        </ul>
                                        <hr />
                                        
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </ImageEvent>

                    <ImageEvent
                        date="Start: Sep 2014"
                        className="text-center"
                        text="Toronto Bike Repair - 4 years"
                        src={TorontoBike}
                        alt="QA Coop"
                    >
                        <div className="d-flex justify-content-between flex-column mt-1">
                            <Accordion>
                                <Card>
                                    <Accordion.Toggle
                                    as={Card.Header}
                                    eventKey="0"
                                    className="p-2 text-center accordian-main"
                                    >
                                    Bike Mechanic
                                    </Accordion.Toggle>

                                    <Accordion.Collapse eventKey="0" className="text-left">
                                    <Card.Body>
                                        <strong>Description:</strong> Grew from a junior to a senior mechanic while helping the shop triple in revenue over 3 years
                                        <hr />
                                        <strong>Skills:</strong>
                                        <ul className="list-styles pt-1">
                                        <li>Mechanical aptitude</li>
                                        <li>Client facing communication</li>
                                        <li>Coordinated with vendors and specialists</li>
                                        </ul>
                                        <hr />
                                    </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    </ImageEvent>
                </Events>
            </Timeline>

        </div>
    )
}

export default Experience 