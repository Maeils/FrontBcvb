import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends Component {
  render() {
      return (
        <HashRouter>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">BCVB</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#/stuff">Le club</Nav.Link>
                <Nav.Link href="#/stuff">Adhésion 2021/2022</Nav.Link>
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
            <Route path="/stuff" component={Stuff}/>
          </Container>
        </HashRouter>
    );
  }
}

export default Main;
