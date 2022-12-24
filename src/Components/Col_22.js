import React from 'react'
import { NavLink } from 'react-router-dom';
import img1 from '../images/bg1.jpg';


export const Col_22 = (props) => {
    return (
        <>
            <div className="col-2">
                <div className="cards">
                    <div className="card">
                        <img className="imgsrc" src={props.imgsrc} alt='my img' />
                        <div className="info">
                            <p className='org_info'>{props.org_info}</p>
                            <h3 className='ser_name'>{props.ser_name}</h3>
                            <NavLink to={props.link} >
                                <button>{props.button}</button>
                            </NavLink>
                           
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
