import React from 'react';
import { Col, Row } from 'reactstrap';
import logo from '../../assets/logo.svg';
import '../../scss/nav-bar-styles.scss';
import { Link } from 'react-router-dom';
import { IRootState } from 'src/_reducers/rootReducer';
import { connect, useDispatch } from 'react-redux';
import { Store } from 'redux';
import { RegisterButton } from '../RegisterButton/RegisterButton';
import { SignInButton } from '../SignInButton/SignInButton';
import { SignOutButton } from '../SignOutButton/SignOutButton';

interface IProps {
    username:string;
    email:string;
}

const NavBar: React.FC<IProps> = (props:IProps) => {

    return (
        <Row className="justify-content-around nav-bar d-flex align-items-center">
            <Col xs="auto" className="justify-content-start logo-holder">
                <Link to="/">
                    <img src={logo} alt="Logo" width="325" height="80" />
                </Link>
            </Col>
            <Col className="d-flex justify-content-end auto">
                {
                    props.username ? <SignOutButton /> :
                    <>
                        <RegisterButton />
                        <SignInButton />
                    </>
                }
            </Col>
        </Row>
    );
}

const mapStateToProps = (store:any):IProps => {
    return {
        username: store.userState.username,
        email: store.userState.email
    };
};

export default connect<IProps>(mapStateToProps)(NavBar);