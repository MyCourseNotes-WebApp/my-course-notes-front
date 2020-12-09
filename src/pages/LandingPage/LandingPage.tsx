import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import landingImg from '../../assets/student.png';
import { RegisterButton } from '../../components/RegisterButton/RegisterButton';

interface IProps{
    username:string;
}

const LandingPage:React.FC<IProps> = (props:IProps) => {
    // useEffect(() => {return}, [props.username]);

    return(
        <>
        <Row style={{width: "100%", minHeight: "70vh", margin: "0", backgroundColor: "#006699", color: "white"}}>
            <Col xs="6" className="d-flex align-items-center">
                <Row>
                    <Col xs="1" />
                    <Col xs="10">
                        <h1>
                            Welcome to MyCourseNotes!
                        </h1>
                        <br />
                        <h3>
                            Your place to write, share, and digitize your notebook!
                        </h3>
                        <br />
                        <Row>
                            <Col xs="6" className="text-center">
                                <div>
                                    Want an example?
                                </div>
                                <Button className="grey-btn">
                                    See here!
                                </Button>
                            </Col>
                            <Col xs="6" className="text-center">
                                <div>
                                    Interested?
                                </div>
                                <RegisterButton>
                                    Get Started!
                                </RegisterButton>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1" />
                </Row>
            </Col>
            <Col xs="6" className="d-flex justify-content-center" style={{backgroundColor: "#009999", padding: "0"}}>
                <Row style={{width: "100%", maxHeight: "100%"}}>
                    <div style={{maxHeight: "70%"}}>
                        <img src={landingImg} alt="student studying" style={{width: "100%", maxHeight: "100%"}} />
                    </div>
                    <br />
                    <Row className="d-flex justify-content-center" style={{margin: "0", textAlign: "center"}}>
                        <Col xs="1" />
                        <Col xs="10">
                            <h5>
                                MyCourseNotes is for you!
                            </h5>
                        </Col>
                        <Col xs="1" />
                    </Row>
                </Row>
            </Col>
        </Row>
        <Row className="d-flex text-center" style={{color: "black", backgroundColor: "#DDDDDD", minHeight: "30vh", width: "100%", padding: "30px 0", margin: "0"}}>
            <Col xs="1" />
            <Col xs="10">
                <h1>
                    What We Do
                </h1>
                <br />
                <h4>
                    MyCourseNotes offers a simple, easy way to write & organize your course notes, with the added benefit of computer-ey things like links, images, and easy navigation!
                </h4>
            </Col>
            <Col xs="1" />
        </Row>
        {props.username ? <Redirect to="/home" /> : <React.Fragment />}
        </>
    );
}

const mapStateToProps = (store:any):IProps => {
    return {
        username: store.userState.username
    };
};

export default connect<IProps>(mapStateToProps)(LandingPage);
