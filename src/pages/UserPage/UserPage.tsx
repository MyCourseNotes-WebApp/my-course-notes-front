import { cpuUsage } from 'process';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { NotebookButton } from '../../components/NotebookButton/NotebookButton';

interface IProps{
    username:string;
}

export const UserPage:React.FC<IProps> = (props:IProps) => {
    
    const [signedIn, setSignedIn] = useState<boolean>(props.username !== "");

    console.log(props.username);
    console.log(signedIn);

    return(
        <>
            <Row style={{width: "100%", minHeight: "100vh", margin: "0", backgroundColor: "#DDDDDD"}}>
                <Col xs="2" />
                <Col xs="8" style={{padding: "2.5rem", borderLeft: "1px solid #AAAAAA", borderRight: "1px solid #AAAAAA"}}>
                    <h1>
                        Your Notebooks:
                    </h1>
                    <br />
                    <Container>
                        <Row>
                            <Col xl="3" lg="4" md="5" sm="6" xs="6">
                                <NotebookButton title="Java w/ React v3" lastEditDate="Dec-2-2020" startDate="Sep-28-2020" color="red" />
                            </Col>
                            <Col xl="3" lg="4" md="5" sm="6" xs="6">
                                <NotebookButton title="How to ABSOLUTELY JAM OUT on a Recorder" lastEditDate="Jan-17-2020" startDate="Apr-12-2016" color="green" />
                            </Col>
                            <Col xl="3" lg="4" md="5" sm="6" xs="6">
                                <NotebookButton title="Homology Groups for Actual Literal Ducks" lastEditDate="Dec-2-2020" startDate="Sep-28-2020" color="purple" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col xs="2" />
            </Row>

            {signedIn ? <React.Fragment /> : <Redirect to="/" />}
        </>
    );
}

const mapStateToProps = (state:any) => {
    return {
        username: state.userState.username,
    };
};

export default connect<IProps>(mapStateToProps)(UserPage);
