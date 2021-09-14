import React, {useState} from "react";
import ficheInscription from "../img/ficheInscription.jpeg"
import {Button, Image, Modal} from "react-bootstrap";


function Adhesion() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <h1>Inscriptions</h1>

            <p>Pour vous inscrire veuillez à télécharger et remplir la fiche d'inscription</p>

            <Button variant="dark" size="sm" onClick={handleShow}>
                Afficher la fiche d'inscription
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Fiche d'inscription</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Pour télécharger la fiche d'inscription faites clic droit puis "Enregistrez l'image sous..."</p>
                    <Image src={ficheInscription} fluid></Image>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    );

}

export default Adhesion;
