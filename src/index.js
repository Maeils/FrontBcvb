import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from "./Main";
import Container from "react-bootstrap/Container";

ReactDOM.render(
    <React.StrictMode>
        <header>
            <div style={{
                height: "200px",
                backgroundColor: "black",
                textAlign: "center",
                alignItems: "center",
                display: "flex"
            }}>
                <Container>
                    <ul>
                        <li>
                            <h1 style={{color: "white", fontSize: "5em"}}>BCVB</h1>
                        </li>
                    </ul>
                </Container>
            </div>
        </header>
        <Main/>
    </React.StrictMode>,
    document.getElementById('root')
);
