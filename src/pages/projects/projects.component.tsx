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
                    <Card.Title></Card.Title>
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
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="success" style={{ width: 'inherit' }}>
                    <Card.Header>Human powered vehicle</Card.Header>
                    <Card.Body>
                    <Card.Title>Success Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <CardDeck className="deck">
                <Card border="primary" style={{ width: 'inherit' }}>
                    <Card.Header>Rocket stabilization system</Card.Header>
                    <Card.Body>
                    <Card.Title>Primary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="secondary" style={{ width: 'inherit' }}>
                    <Card.Header>FLUX news</Card.Header>
                    <Card.Body>
                    <Card.Title>Secondary Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
                <br />

                <Card border="success" style={{ width: 'inherit' }}>
                    <Card.Header>Mechanical energy storage</Card.Header>
                    <Card.Body>
                    <Card.Title>Success Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk
                        of the card's content.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardDeck>
            <br />
        </div>
    )
}

export default Projects
