import React from "react";
import {Button, Col, Row} from "react-bootstrap";


function Contact() {

    return (
        <div>
            <Row>
                <Col>
                    <h3>Contactez-nous</h3>
                    <p>Pour nous contacter n'hésitez pas à nous envoyer un mail à l'adresse suivante :<br/>
                        <b>bcvb@gmail.com</b>
                    </p>
                </Col>
                <Col>
                    <h3>Vous pouvez aussi nous retrouver sur nos réseaux : </h3>
                    <Button size="sm" style={{margin: "10px"}}
                            onClick={() => window.open("https://www.facebook.com/BoisColombesVolleyBall", "_blank")}>Facebook</Button>
                    <br/>
                    <Button size="sm" style={{margin: "10px"}}
                            onClick={() => window.open("https://www.instagram.com/bc_volley", "_blank")}>Instagram</Button>
                </Col>
            </Row>
        </div>
    );

}

export default Contact;
