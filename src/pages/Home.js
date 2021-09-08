import React, {Component} from "react";
import {Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Rentrée 2021-2022</h1>
                <p>A tous nos volleyeurs,
                    ⏳La rentrée approche à grand pas et il est temps pour nous de vous faire un petit point pour cette
                    reprise 2021/2022. </p>
                <p> ✅ On espère que vous êtes en forme et prêt pour attaquer cette nouvelle saison !
                    Pour que tout se passe bien quelques petits changements :
                    - nouveau certificat médical pour tous (ancien ou nouveau adhérent) à remettre à votre inscription
                    ou au plus tard dimanche 3 octobre.
                    - Un pass sanitaire (vaccination complète, certificat de rétablissement, test négatif de -72h)
                    valide.
                    Le contrôle du pass sera réalisé par les gardiens à l’entrée des gymnases.</p>
                <p>🕗+📍=🏐 La reprise aura lieu : </p>
                <p>- Pour les compétitions : Mercredi 8 septembre à 20h30 au gymnase Smirlian</p>
                <p>- Pour les jeunes : Mercredi 15 septembre à 18h au gymnase Max Boy</p>
                <p>- Pour les loisirs : Dimanche 11 septembre à 20h15 au gymnase Smirlian</p>
                <p>Merci de prévoir le temps nécessaire pour la vérification du pass a l’entrée des gymnases afin de ne
                    pas
                    commencer les séances en retard.</p>
                <p>🙂 Bonne reprise à tous et si vous avez des questions n’hésitez pas.</p>
                <p> Sportivement, le bureau du BCVB</p>
            </Container>
        );
    }
}

export default Home;
