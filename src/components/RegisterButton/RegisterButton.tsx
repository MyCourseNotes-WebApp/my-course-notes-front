import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { IBasicNotebook, IUserState } from 'src/_reducers/userReducer/userReducer';

export const RegisterButton:React.FC<any> = (props:any) => {
    const [modal, setModal] = useState<boolean>(false);
    const [confirmationAlert, setConfirmationAlert] = useState<string>("");

    const dispatch = useDispatch();

    const toggle = () => { setModal(!modal); if(confirmationAlert) setConfirmationAlert(""); };

    const registerUser = async (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log("Registration submitted!");

        const email = event.currentTarget["email"].value;
        const username = event.currentTarget["username"].value;
        const password = event.currentTarget["password"].value;
        if(password !== event.currentTarget["confirm-password"].value){
            setConfirmationAlert("This password doesn't match the one provided!");
            return;
        }
        else{
            setConfirmationAlert("");
        }

        // should put down a post request to make a new user
        // should then dispatch a logged in user to the redux state
        // once a redux user is assigned, page should redirect to the user's home view

        dispatch(() => ({
            type: "SIGN_IN",
            payload: {
                username: username,
                email: email,
                notebooks: [] as IBasicNotebook[]
            } as IUserState
        }));

        toggle();
    }

    return (
        <>
            <Button onClick={toggle} className="grey-btn">
                {props.children ? props.children : "Register"}
            </Button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    <h3>
                        Create Account
                    </h3>
                </ModalHeader>

                <Form onSubmit={(event:React.FormEvent<HTMLFormElement>) => registerUser(event)} id="registration-form">
                    <ModalBody>
                       <FormGroup>
                            <Label>Email</Label>
                            <Input type="email" required name="email" placeholder="user@mycoursenotes.com" />
                        </FormGroup> 
                        <FormGroup>
                            <Label>Username</Label>
                            <Input type="text" required name="username" placeholder="user123" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password</Label>
                            <Input type="password" required minLength={6} name="password" placeholder="******" />
                        </FormGroup>
                        <FormGroup>
                            <Label>Password Confirmation</Label>
                            <div style={{color: "red"}}>{confirmationAlert}</div>
                            <Input type="password" required minLength={6} name="confirm-password" />
                        </FormGroup>
                    </ModalBody>

                    <ModalFooter>
                        <Button type="submit" className="grey-btn" style={{width: "100%", padding: "0.5rem", fontSize: "1.5rem"}}>
                            Register
                        </Button>
                    </ModalFooter>
                </Form>
            </Modal>
        </>
    );
}