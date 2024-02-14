import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>Sophia Romero</h1>
            <img
                src="https://clipartcraft.com/images/animal-clipart-jaguar-2.png"
                alt="A drawing of a jaguar and her cub"
            />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World.
            </p>
            <ul>
                <li>Stickers</li>
                <li>Prints</li>
                <li>Keychains</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div id="Rectangle"></div>
                    </Col>
                    <Col>
                        <div id="Rectangle2"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
