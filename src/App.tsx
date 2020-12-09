import React from 'react';
import logo from './logo.svg';
import './scss/app.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import NavBar from './components/NavBar/NavBar';
import { NavFooter } from './components/NavFooter/NavFooter';
import LandingPage from './pages/LandingPage/LandingPage';
import { UserPage } from './pages/UserPage/UserPage';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
    

    return (
        <Provider store={store}>
            <Container fluid={true} style={{minHeight: "100vh", maxWidth: "100vw"}}>
                <BrowserRouter>
                    <NavBar />
                    <Row className="justify-content-center" style={{display: "block"}}>
                        <Col style={{minHeight: "70vh", padding: "0"}}>
                            <Switch>
                                <Route exact path="/" component={LandingPage} />
                                <Route path="/home" component={UserPage} />
                            </Switch>
                        </Col>
                    </Row>
                </BrowserRouter>
                <NavFooter />
            </Container>
        </Provider>
    );
}

export default App;
