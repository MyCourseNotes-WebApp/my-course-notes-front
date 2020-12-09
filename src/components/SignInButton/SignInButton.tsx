import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { signIn } from '../../_actions/userActions';
import { IBasicNotebook, IUserState } from 'src/_reducers/userReducer/userReducer';

export const SignInButton:React.FC<any> = (props:any) => {
    const [modal, setModal] = useState<boolean>(false);
    const [signinAlert, setSigninAlert] = useState<string>("");

    const dispatch = useDispatch();

    const toggle = () => { setModal(!modal); if(signinAlert) setSigninAlert(""); };

    const registerUser = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Login submitted!");

        const username = event.currentTarget["username"].value;
        const password = event.currentTarget["password"].value;

        console.log("username: ", username);

        // should put down a get request to obtain user data
        // user data should include: username, password, email, and basic notebook data
        // should then dispatch a logged in user to the redux state
        // once a redux user is assigned, page should redirect to the user's home view

        dispatch(signIn({
                    username: username,
                    email: "",
                    notebooks: [] as IBasicNotebook[]
                } as IUserState
            )
        );
        toggle();
    }

    return (
        <>
            <Button onClick={toggle} className="grey-btn">
                {props.children ? props.children : "Sign In"}
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h3>
                        Sign In
                    </h3>
                </ModalHeader>

                <Form onSubmit={(event:React.FormEvent<HTMLFormElement>) => registerUser(event)} id="registration-form">
                    <ModalBody>
                        <FormGroup>
                            <Label>Username</Label>
                            <Input type="text" required name="username" placeholder="user123" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" required minLength={6} name="password" />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" className="grey-btn" style={{width: "100%", padding: "0.5rem", fontSize: "1.5rem"}}>
                            Sign In
                        </Button>
                        <div style={{color: "red"}}>{signinAlert}</div>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}