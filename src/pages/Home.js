import React, {Component} from "react";
import {Container} from "react-bootstrap";

class Home extends Component {
    render() {
        return (
            <Container>
                <h1>Bienvenu sur le site du BCVB</h1>
                <h5>Inscriptions 2021-2022</h5>
                <p>Nous vous informons que victime de notre succès, les inscriptions aux sections jeunes et loisirs sont
                    complètes.<br/></p>
                <h5>Covid-19</h5>
                <p>Suite à la mise en place du Pass sanitaire, nous vous informons que celui-ci est obligatoire pour
                    accéder aux différents gymnases.</p>
            </Container>
        );
    }
}

export default Home;
