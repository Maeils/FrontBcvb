import React, { Component } from "react";
import {
  Route,
  HashRouter
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Home from "./pages/Home";
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
  render() {
      return (
        <HashRouter>
          <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
            <Container>
            <Navbar.Brand href="/"><Image width={50} height={50} src={logo} roundedCircle/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#/club">Le club</Nav.Link>
                <Nav.Link href="#/adhesion">Adhésion 2021/2022</Nav.Link>
                <NavDropdown menuVariant="dark" title="Séances" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#/jeunes">Jeunes</NavDropdown.Item>
                  <NavDropdown.Item href="#/loisirs">Loisirs</NavDropdown.Item>
                  <NavDropdown.Item href="#/competitions">Compétition</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#/contact">Contact</Nav.Link>
                <Nav.Link href="#/shop">Le shop</Nav.Link>

              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
            <Route exact path="/" component={Club}/>
            <Route path="/club" component={Club}/>
            <Route path="/adhesion" component={Adhesion}/>
            <Route path="/jeunes" component={Junior}/>
            <Route path="/loisirs" component={Loisirs}/>
            <Route path="/competitions" component={Competition}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/shop" component={Merch}/>
          </Container>
        </HashRouter>
    );
  }
}

export default Main;
