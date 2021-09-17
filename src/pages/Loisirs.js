import React from "react";
import {Col, Row} from "react-bootstrap";


function Loisirs() {

    return (
        <div>
            <h2>Session Loisir</h2>

            <Row>
                <Col>
                    <p>
                        Rendez-vous pour les plus grands.<br/>
                        Débutant ou plus expérimenté, si vous chercher à vous défouler, cette section est
                        faite pour vous !<br/>
                    </p>
                    <h4>
                        Le Mercredi
                    </h4>
                    <p>
                        Entrainement animé par Jeremy, cette séance permet aux débutants d'apprendre les bases du
                        volley.
                    </p>
                    <h4>Le Dimanche</h4>
                    <p>
                        Session libre, cette séance est accessible sur inscription via l'application SportMember. Vous y
                        retrouverez peut-être quelques joueurs de la section compétition qui se sont perdus.
                    </p>
                    <p>
                        N'oubliez pas d'apporter une paire de chaussures adaptées à mettre une fois dans le gymnase
                        ainsi que votre bonne humeur.
                    </p>

                    <p><b>⚠︎ Le pass sanitaire est obligatoire pour accéder aux différents gymnases, ne l'oubliez pas !
                        ⚠︎</b></p>
                </Col>
                <Col>
                    <h3>Adresse</h3>
                    <p><b>Mercredi</b> : Gymnase Max Boy, 92270 Bois-Colombes</p>
                    <p><b>Dimanche</b> : Complexe sportif Albert-Smirlian, 11 Av. Renée, 92270 Bois-Colombes</p>
                    <h3>Horaires</h3>
                    <p><b>Mercredi</b> : de 20h15 à 22h15</p>
                    <p><b>Dimanche</b> : de 18h00 à 20h00</p>
                </Col>
            </Row>


        </div>
    );

}

export default Loisirs;
