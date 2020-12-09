import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import { signOut } from '../../_actions/userActions';

export const SignOutButton:React.FC<any> = () => {
    const dispatch = useDispatch();

    const buttonSignOut = () => {
        dispatch(signOut());
    }

    return (
        <Button className="grey-btn" onClick={buttonSignOut}>
            Sign Out
        </Button>
    );
}