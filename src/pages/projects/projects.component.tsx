import React from 'react';
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import "./projects.style.css";

const Projects = () => {
    return (
        <div className="pt-3 pb-3" id='projects'>
            <h1 className="text-center font-details-b pb-4">PROJECTS</h1>
            <CardDeck className="deck">
                <Card border="primary" style={{ width: 'inherit' }}>
                    <Card.Header>Automated water dispenser</Card.Header>
                    <Card.Body>
                    <Card.Title>LabVIEW, procurement</Card.Title>
                    <Card.Text>
                        Programmed using LabVIEW and incorporated redundant loops for user safety.
                        (https://www.youtube.com/watch?v=3aziS4YVB7g)
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="secondary" style={{ width: 'inherit' }}>
                    <Card.Header>Formula SAE</Card.Header>
                    <Card.Body>
                    <Card.Title>Machining, Welding, CAD, Compliance</Card.Title>
                    <Card.Text>
                        Converted a broken motorcycle into a formula SAE car. Designed and built the frame in compliance with Formula SAE guidebook.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="success" style={{ width: 'inherit' }}>
                    <Card.Header>Human powered vehicle</Card.Header>
                    <Card.Body>
                    <Card.Title>Machining, Welding, CAD</Card.Title>
                    <Card.Text>
                        Built a recumbent bike with a welded aluminum frame and a carbon fiber cover using molding techniques in a machine shop.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck className="deck">
                <Card border="primary" style={{ width: 'inherit' }}>
                    <Card.Header>Rocket stabilization system</Card.Header>
                    <Card.Body>
                    <Card.Title>Fusion, MATLab</Card.Title>
                    <Card.Text>
                        Built a stabilization system for York University's rocketry club to control the trajectory of the flight, access the height attained, and perform landing maneuvre.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="secondary" style={{ width: 'inherit' }}>
                    <Card.Header>FLUX news</Card.Header>
                    <Card.Body>
                    <Card.Title>Public speaking, Brand growth</Card.Title>
                    <Card.Text>
                        Presented research taking place at Yor University's engineering department. Simplying complex technical concepts into digestible and informative videos.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="success" style={{ width: 'inherit' }}>
                    <Card.Header>Atlas Bike Repair</Card.Header>
                    <Card.Body>
                    <Card.Title>Client facing communication</Card.Title>
                    <Card.Text>
                        Founded a fast-growing mobile bike repair service company with over 300 satisfied customers and established partnerships.
                        (https://www.youtube.com/watch?v=b0fMat7Mqy0)
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br />
        </div>
    )
}

export default Projects
