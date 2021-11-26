import React, {Component} from "react";
import {Row, Col, Card, Carousel, Container} from "react-bootstrap";


import estelle from "../img/trombinoscope/estelle.png";
import frederic from "../img/trombinoscope/frederic.png";
import matthieu from "../img/trombinoscope/matthieu.png";
import olivier from "../img/trombinoscope/olivier.png";
import silvio from "../img/trombinoscope/silvio.png";
import sloanne from "../img/trombinoscope/sloanne.png";
import arnault from "../img/trombinoscope/arnault.png";
import yann from "../img/trombinoscope/yann.png";


class Club extends Component {
    render() {
        return (
            <Container>
                <div style={{textAlign: "center"}}>
                    <h1>BCVB - Bois-Colombes Volley-ball</h1>
                </div>
                <Container>
                    <Row>
                        <Col style={{display: "flex", alignItems: "center"}}>
                            <div>
                                <p>Club fondé il y a maintenant plus de 10 ans, nous avons à coeur de permettre au plus
                                    grand nombre de pratiquer le volley-ball.<br/>
                                    <br/><br/>
                                    Club convivial, le but du BCVB est de jouer au volley-ball dans la bonne humeur
                                    afin de permettre aux jeunes et aux moins jeunes d'acquérir les bases et les
                                    principes du jeu, mais aussi aux plus expérimentés de perfectionner leurs pratiques
                                </p>
                            </div>
                        </Col>
                        <Col style={{display: "flex", alignItems: "center"}}>
                            <Carousel style={{minWidth: "250px"}}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://photobcvb.s3.eu-west-3.amazonaws.com/image2.jpeg"
                                        alt="Club du BCVB bois-colombes : Entrainement à Smirlian"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://photobcvb.s3.eu-west-3.amazonaws.com/image3.jpeg"
                                        alt="Club du BCVB bois-colombes : Entrainement à Smirlian"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://photobcvb.s3.eu-west-3.amazonaws.com/image5.jpeg"
                                        alt="Club du BCVB bois-colombes : Beach-volley"
                                    />
                                </Carousel.Item>
                            </Carousel>

                        </Col>
                    </Row>


                    <Row>
                        <div style={{textAlign: "center"}}>
                            <h2>Les membres du bureau</h2>
                        </div>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={arnault}
                                                                      alt="Arnault président du club Bois-Colombes Volley-ball"/>
                                <Card.Body>
                                    <Card.Title>Arnault</Card.Title>
                                    <Card.Text>
                                        Président
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={matthieu}
                                                                      alt="Matthieu trésorier du club Bois-Colombes Volley-ball"/>
                                <Card.Body>
                                    <Card.Title>Matthieu</Card.Title>
                                    <Card.Text>
                                        Trésorier
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={frederic}
                                                                      alt="Frédérique secrétaire du club Bois-Colombes volley-ball et référente loisir"/>
                                <Card.Body>
                                    <Card.Title>Frédérique</Card.Title>
                                    <Card.Text>
                                        Secrétaire<br/>Loisir
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={olivier}
                                                                      alt="Olivier responsable merchandising et référent compétition"/>
                                <Card.Body>
                                    <Card.Title>Olivier</Card.Title>
                                    <Card.Text>
                                        Merch<br/>Compétition
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}>
                                <Card.Img variant="top" src={estelle}
                                          alt="Estelle responsable merchandising et référente loisir"/>
                                <Card.Body>
                                    <Card.Title>Estelle</Card.Title>
                                    <Card.Text>
                                        Merch<br/>Loisir
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={sloanne}
                                                                      alt="Sloanne responsable communication et évènement"/>
                                <Card.Body>
                                    <Card.Title>Sloanne</Card.Title>
                                    <Card.Text>
                                        Événements<br/>Comm
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={silvio}
                                                                      alt="Silvio référent compétition"/>
                                <Card.Body>
                                    <Card.Title>Silvio</Card.Title>
                                    <Card.Text>
                                        Compétition
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={yann}
                                                                      alt="Yann référent compétition"/>
                                <Card.Body>
                                    <Card.Title>Yann</Card.Title>
                                    <Card.Text>
                                        Compétition
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        );
    }
}

export default Club;
