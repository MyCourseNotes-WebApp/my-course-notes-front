import React from 'react';
import { Col, Row } from 'reactstrap';
import '../../scss/nav-footer-styles.scss';

export const NavFooter: React.FC<any> = () => {
    return (
        <Row className="justify-content-around nav-footer d-flex align-items-center">
            <Col xs="auto" className="justify-content-start logo-holder">
                <i>You've reached the end.</i>
            </Col>
        </Row>
    );
}