import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main";
import Container from "react-bootstrap/Container";
import header from "./header.png"
import {Image} from "react-bootstrap";

ReactDOM.render(
    <React.StrictMode>
        <title>BCVB</title>
        <header>
            <div style={{
                backgroundColor: "black",
                borderBottom: "1px solid"
            }}>
                <Container style={{textAlign: "center"}}>
                    <Image src={header} fluid/>
                </Container>
            </div>
        </header>
        <Main/>
    </React.StrictMode>,
    document.getElementById('root')
);
