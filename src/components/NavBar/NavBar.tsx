import React from 'react';
import { Col, Row } from 'reactstrap';
import { DynamicNavOptions } from '../DynamicNavOptions/DynamicNavOptions';
import logo from '../../assets/nav-logo.svg';
import '../../scss/nav-bar-styles.scss';

export const NavBar: React.FC<any> = () => {
    return (
        <Row className="justify-content-around nav-bar d-flex align-items-center">
            <Col xs="auto" className="justify-content-start logo-holder">
                <img src={logo} alt="Logo" width="320" height="80" />
            </Col>
            <Col className="d-flex justify-content-end auto">
                <DynamicNavOptions />
            </Col>
        </Row>
    );
}