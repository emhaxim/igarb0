import React from 'react'
//import { Link } from 'react-router-dom';
import '../index.css';
import { NavLink } from 'react-router-dom';


export const Col_1 = (props) => {
    return (
        <>
            <div className="col-1">
                <h1>{props.title}</h1>
                <p>{props.para}</p>
                <NavLink to={props.link} >
                    <button>{props.button}</button>
                </NavLink>
            </div>
        </>
    )
}
