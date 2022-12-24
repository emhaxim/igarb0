import React from 'react';


import img1 from '../images/admin2.jpg';
import img2 from '../images/sweeper2.jpg';
import img3 from '../images/citizen2.jpg';

import { Col_1 } from './Col_1';
import { Col_22 } from './Col_22';



export const About = () => {
    return (
        <>
            <div className="about_heading" id='about' style={{ color: "#000" }}>
                <h1>SYSTEM COMPONENTS</h1>
            </div>
            <div className="about_container" style={{ color: "#000" }}>
                <Col_1
                    title="ADMIN"
                    para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti esse ducimus commodi corrupti architecto id officia corporis tempora! Minus nihil nisi debitis modi consequatur error possimus in, sed ea distinctio placeat odio."
                    button="SIGN IN"
                    link='/admin_signup'
                />
                <Col_22
                    imgsrc={img1}
                    org_info="ADMIN SECTION"
                    ser_name="Admin"
                    button="SIGN IN"
                    link="/admin_signup"
                    
                />
            </div>
            <div className="about_container" style={{ marginTop: "-90px", color: "#000" }}>
                <Col_22
                    imgsrc={img2}
                    org_info="SWEEPER SECTION"
                    ser_name="Sweeper"
                    button="SIGN IN"
                    link="/sweeper_signup"
                   
                />
                <Col_1
                    title="SWEEPER"
                    para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti esse ducimus commodi corrupti architecto id officia corporis tempora! Minus nihil nisi debitis modi consequatur error possimus in, sed ea distinctio placeat odio."
                    button="SIGN IN"
                    link="/sweeper_signup"
                />
            </div>
            <div className="about_container" style={{ marginTop: "-90px", color: "#000" }}>
                <Col_1
                    title="CITIZEN"
                    para="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti esse ducimus commodi corrupti architecto id officia corporis tempora! Minus nihil nisi debitis modi consequatur error possimus in, sed ea distinctio placeat odio."
                    button="SIGN IN "
                    link="citizen_signup"
                />
                <Col_22
                    imgsrc={img3}
                    org_info="CITIZEN SECTION"
                    ser_name="Citizen"
                    button="REGISTER "
                    link="citizen_registeration"
                />
            </div>
        </>
    )
}
