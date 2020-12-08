import React from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { NavBar } from './components/NavBar/NavBar';
import { LandingPage } from './pages/LandingPage/LandingPage';

function App() {
    

    return (
        <Container fluid={true} style={{minHeight: "100vh", maxWidth: "100vw"}}>
            <NavBar />
            <Row className="justify-content-center" style={{display: "block"}}>
                <Col style={{minHeight: "70vh", padding: "0"}}>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/" component={LandingPage} />
                        </Switch>
                    </BrowserRouter>
                </Col>
            </Row>
        </Container>
    );
}

export default App;
