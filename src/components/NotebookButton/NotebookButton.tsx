import React from 'react';
import { Button } from 'reactstrap';
import '../../scss/notebook-button-styles.scss';

interface IProps{
    title:string;
    lastEditDate:string;
    startDate:string;
    color?:string;
}

export const NotebookButton:React.FC<any> = (props:IProps) => {
    return(
        <button className="notebook-button" style={{backgroundColor: props.color}}>
            <div className="notebook-title">
                {props.title}
            </div>
            <br />
            <div>
                <i>Edited {props.lastEditDate}</i>
            </div>
            <div>
                <i>Started {props.startDate}</i>
            </div>
        </button>
    )
}