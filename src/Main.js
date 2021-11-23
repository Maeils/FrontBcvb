import React, {Component} from "react";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import Club from "./pages/Club";
import logo from "./img/logoBcvb.png"
import {Image} from "react-bootstrap";
import Adhesion from "./pages/Adhesion";
import Junior from "./pages/Junior";
import Loisirs from "./pages/Loisirs";
import Competition from "./pages/Competition";
import Contact from "./pages/Contact";
import Merch from "./pages/Merch";

class Main extends Component {

    constructor() {
        super();
        this.state = {Club: true};
    }

    changeComponentToDisplay(newComponent: string) {
        this.changeBooleanToFalse();
        switch (newComponent) {
            case "Club":
                this.setState({Club: true});
                break;
            case "Adhesion":
                this.setState({Adhesion: true});
                break;
            case "Junior":
                this.setState({Junior: true});
                break;
            case "Loisirs":
                this.setState({Loisirs: true});
                break;
            case "Competition":
                this.setState({Competition: true});
                break;
            case "Contact":
                this.setState({Contact: true});
                break;
            case "Merch":
                this.setState({Merch: true});
                break;
            default :
                this.setState({Club: true});
        }
    }

    changeBooleanToFalse() {
        this.setState({Club: false})
        this.setState({Adhesion: false})
        this.setState({Junior: false})
        this.setState({Loisirs: false})
        this.setState({Competition: false})
        this.setState({Contact: false})
        this.setState({Merch: false})
    }


    render() {
        return (
            <div id="bcvb-main-page">
                <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
                    <Container>
                        <Navbar.Brand onClick={() => this.changeComponentToDisplay("Club")}><Image width={50}
                                                                                                   height={50}
                                                                                                   src={logo}
                                                                                                   roundedCircle/></Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => this.changeComponentToDisplay("Club")}>Le club</Nav.Link>
                                <Nav.Link onClick={() => this.changeComponentToDisplay("Adhesion")}>Adhésion
                                    2021/2022</Nav.Link>
                                <NavDropdown menuVariant="dark" title="Séances" id="navbarScrollingDropdown">
                                    <NavDropdown.Item
                                        onClick={() => this.changeComponentToDisplay("Junior")}>Jeunes</NavDropdown.Item>
                                    <NavDropdown.Item
                                        onClick={() => this.changeComponentToDisplay("Loisirs")}>Loisirs</NavDropdown.Item>
                                    <NavDropdown.Item
                                        onClick={() => this.changeComponentToDisplay("Competition")}>Compétition</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link onClick={() => this.changeComponentToDisplay("Contact")}>Contact</Nav.Link>
                                <Nav.Link onClick={() => this.changeComponentToDisplay("Merch")}>Le shop</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <Container>
                    {this.state.Club && <Club/>}
                    {this.state.Adhesion && <Adhesion/>}
                    {this.state.Junior && <Junior/>}
                    {this.state.Loisirs && <Loisirs/>}
                    {this.state.Competition && <Competition/>}
                    {this.state.Contact && <Contact/>}
                    {this.state.Merch && <Merch/>}
                </Container>
            </div>
        );
    }
}

export default Main;
