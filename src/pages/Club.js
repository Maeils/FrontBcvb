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
                    <h1>Le BCVB</h1>
                </div>
                <Container>
                    <Row>
                        <Col style={{display: "flex", alignItems: "center"}}>

                            <div>
                                <p>Le club a pour vocation de permettre au plus grand nombre de venir faire du
                                    volley-ball, en mettant à disposition, grâce au soutien de la mairie de
                                    Bois-Colombes et aux infrastructures
                                    de l’agglomération.<br/> Le matériel et les bénévoles permettent la pratique de ce
                                    sport pour tout le monde, à tout âge, quel que soit le niveau.
                                    <br/><br/>
                                    L’accent est mis depuis plusieurs années sur l’accueil et la formation des jeunes,
                                    afin de leur permettre d’acquérir les bases et
                                    les principes du jeu.
                                    <br/><br/>
                                    Ces dernières années beaucoup d’efforts ont été faits pour améliorer la convivialité
                                    et
                                    l’échange entre les différentes équipes ainsi qu’avec les parents des nombreux
                                    jeunes
                                    évoluant dans les diverses équipes de notre club (tournoi interne, soirée
                                    annuelle…).</p>
                            </div>
                        </Col>
                        <Col style={{display: "flex", alignItems: "center"}}>
                            <Carousel style={{minWidth: "250px"}}>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://photobcvb.s3.eu-west-3.amazonaws.com/image1.jpeg"
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://photobcvb.s3.eu-west-3.amazonaws.com/image2.jpeg"
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src="https://photobcvb.s3.eu-west-3.amazonaws.com/image3.jpeg"
                                        alt="Third slide"
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
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={arnault}/>
                                <Card.Body>
                                    <Card.Title>Arnault</Card.Title>
                                    <Card.Text>
                                        Président
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={matthieu}/>
                                <Card.Body>
                                    <Card.Title>Matthieu</Card.Title>
                                    <Card.Text>
                                        Trésorier
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={frederic}/>
                                <Card.Body>
                                    <Card.Title>Frédérique</Card.Title>
                                    <Card.Text>
                                        Secrétaire<br/>Loisir
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={olivier}/>
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
                                <Card.Img variant="top" src={estelle}/>
                                <Card.Body>
                                    <Card.Title>Estelle</Card.Title>
                                    <Card.Text>
                                        Merch<br/>Loisir
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={sloanne}/>
                                <Card.Body>
                                    <Card.Title>Sloanne</Card.Title>
                                    <Card.Text>
                                        Événements<br/>Comm
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={silvio}/>
                                <Card.Body>
                                    <Card.Title>Silvio</Card.Title>
                                    <Card.Text>
                                        Compétition
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{width: '132px'}}> <Card.Img variant="top" src={yann}/>
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
