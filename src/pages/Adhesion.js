import React, {Component} from "react";
import ficheInscription from "../ficheInscription.jpeg"

class Adhesion extends Component {
    render() {
        return (
            <div>
                <h1>Inscriptions</h1>
                <p>Pour vous inscrire veuillez à télécharger et remplir ce document :</p>
                <a href={ficheInscription} download>Lien pour la fiche d'inscription</a>
            </div>
        );
    }
}

export default Adhesion;
