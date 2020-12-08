import React from 'react';
import { Button } from 'reactstrap';

export const DynamicNavOptions:React.FC<any> = () => {
    return(
        <React.Fragment>
            <Button className="nav-button">Register</Button>
            <Button className="nav-button">Sign In</Button>
        </ React.Fragment>
    );
}