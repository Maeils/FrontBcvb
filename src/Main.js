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
                  <NavDropdown.Item href="#/compétition">Compétition</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
          <Container>
            <Route exact path="/" component={Home}/>
            <Route exact path="/club" component={Club}/>
            <Route path="/adhesion" component={Adhesion}/>
          </Container>
        </HashRouter>
    );
  }
}

export default Main;
