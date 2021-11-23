import React from "react";
import {Col, Row} from "react-bootstrap";


function Junior() {

    return (
        <div>
            <h2>Session Jeune</h2>
            <Row>
                <Col>
                    <p>Section créée pour les jeunes de 8 à 17 ans, afin de leurs permettre de découvrir, avec l'aide de
                        Jérémy, les bases du volley-ball.
                        <br/>
                        <br/>
                        N'oubliez pas de vous équiper de chaussures adaptées à mettre sur place et d'une bouteille
                        d'eau.
                    </p>
                </Col>
                <Col>
                    <h3>Adresse</h3>
                    <p>Gymnase Max Boy, 92270 Bois-Colombes</p>
                    <h3>Horaires</h3>
                    <p>Mercredi de 18h00 à 20h00</p>
                </Col>
            </Row>
        </div>
    );

}

export default Junior;
