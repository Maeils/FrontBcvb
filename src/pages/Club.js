import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import {Figure} from "react-bootstrap";
import imageMembres from "../img/membresDuBureau.png"

class Club extends Component {
    render() {
        return (
            <Container className="clubContainer">
                <div style={{textAlign: "center"}}>
                    <h1>Le BCVB</h1>
                </div>
                <div>
                    <p>Le club a pour vocation de permettre au plus grand nombre de venir faire du
                        volley-ball,
                        en
                        mettant à disposition, grâce au soutien de la mairie de Bois-Colombes et aux infrastructures
                        de
                        l’agglomération. Le matériel et les bénévoles permettent la pratique de ce sport
                        pour
                        tout
                        le monde, à tout âge, quel que soit le niveau.</p>

                    <p>L’accent est mis depuis plusieurs années sur l’accueil et la formation des jeunes,
                        afin
                        de
                        leur permettre d’acquérir les bases et les principes du jeu.</p>

                    <p> Ces dernières années beaucoup d’efforts ont été faits pour améliorer la convivialité
                        et
                        l’échange entre les différentes équipes ainsi qu’avec les parents des nombreux
                        jeunes
                        évoluant dans les diverses équipes de notre club (tournoi interne, soirée
                        annuelle…).</p>
                </div>

                <div style={{textAlign: "center"}}>
                    <h1>Les membres du bureau</h1>
                </div>
                <Figure>
                    <Figure.Image
                        width={500}
                        height={500}
                        alt="500x500"
                        src={imageMembres}
                    />
                </Figure>
            </Container>
        );
    }
}

export default Club;