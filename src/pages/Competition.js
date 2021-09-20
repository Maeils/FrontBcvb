import React from "react";
import {Col, Row} from "react-bootstrap";


function Competition() {

    return (
        <div>
            <h2>Session Compétition</h2>

            <Row>
                <Col>
                    <p>Peut-être la future relève de notre équipe olympique, venez rejoindre une de nos équipes
                        masculines
                        participant au championnant FSGT 95 ou l'équipe féminine qui elle participe au championnat FFVB
                        loisir du 92</p>
                    <h5>Les différentes équipes</h5>
                    <p>
                        <br/>
                        Une équipe 6x6 masculine étant poule 1 du championnat FSGT 95 <br/><br/>
                        Une équipe 6x6 masculine étant poule 2 du championnat FSGT 95 <br/><br/>
                        Une équipe 4x4 masculine étant poule 2 du championnat FSGT 95 <br/><br/>
                        Une équipe 4x4 féminine étant poule 1 du championnat FFVB 92 loisir<br/>
                    </p>
                </Col>
                <Col>
                    <h3>Adresse</h3>
                    <p><b>Lundi</b> : Gymnase Max Boy, 92270 Bois-Colombes</p>
                    <p><b>Mercredi</b> : Complexe sportif Albert-Smirlian, 11 Av. Renée, 92270 Bois-Colombes</p>
                    <h3>Horaires</h3>
                    <p><b>Lundi</b> : de 20h15 à 22h15</p>
                    <p><b>Mercredi</b> : de 20h30 à 22h30</p>
                </Col>
            </Row>


        </div>
    );

}

export default Competition;
