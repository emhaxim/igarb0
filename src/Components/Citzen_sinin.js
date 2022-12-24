import axios from 'axios';
import React, { useState } from 'react'
import { Signup } from './Signup'
import back from '../images/back.png'
import sin from '../images/sin.png';
import { NavLink } from 'react-router-dom';
import { Citizen_dashboard } from './Citizen_dashboard';

export const Citzen_sinin = () => {

    const [email, setemail] = useState();
    
    const [password, setpassword] = useState();
    const [redirect, setredirect] = useState('');
    const [alldata, setalldata] = useState([])


    function eventHandler(event) {
        const value = event.target.value;
        setemail(value);
    }

    function eventHandler1(event) {
        const value = event.target.value;
        setpassword(value);
    }

    axios.post('http://127.0.0.1:8000/backend/signin/',).then((response) => {
        setalldata(response.data)
        console.log(alldata)
    }).catch(() => {
        console.log('data not retreived')
    })


    function onSubmit() {
            if (alldata.status === "0") {
                alert(`invalid user inputs: `)
                setredirect('/citizen_signup');
            }
            else {
                alert(`Hello you are successfully signed in:`)
                {<Citizen_dashboard email />}
                //setredirect('/citizen_dashboard')
            }            
    }

    return (
        <> 

<nav className='nav1'  style={{height:"50px"}}>
           
           <i class="fa-solid fa-recycle fa-2x" style={{marginLeft:'-45px'}} >IGARB0</i>
          
                 {/* <div className="logo" style={{marginLeft:'-220px'}}><spam>IGarb0</spam></div>*/}  
                   
                   <input type="checkbox" id="click" />
                   <label for="click" className="menu-btn">
                       <i className="fa fa-bars"></i>
                   </label>
                   <ul style={{color: 'black', marginTop: '10px' }}>
                   <li><NavLink className='navlink' exact activeClassName='active_class' to='/'>Home</NavLink></li>
                   <li><NavLink className='navlink' exact activeClassName='active_class' to='/citizen_signup'>Citizen</NavLink></li>
                   <li><NavLink className='navlink' exact activeClassName='active_class' to='seeper_signup'>Employee</NavLink></li>
                   {/* <li><NavLink className='navlink' exact activeClassName='active_class' to='/about'>About</NavLink></li> */}
                   <li><NavLink className='navlink' exact activeClassName='active_class' to='/contact'>Contact us</NavLink></li>
                   <li><NavLink className='navlink' exact activeClassName='active_class' to='/team'>About us</NavLink></li>
                   {/* <li><NavLink className='navlink' exact activeClassName='active_class' to='/signup'>Signup/ Login</NavLink></li> */}


                       {/* <li><a href="#">About</a></li>
                       <li><a href="#">Services</a></li>
                       <li><a href="#">Gallery</a></li>
                       <li><a href="#">Feedback</a></li> */}
                   </ul>
               </nav>
   
   <div style={{background: '#34e89e',  /* fallback for old browsers */background: '-webkit-linear-gradient(to right, #0f3443, #34e89e)',  /* Chrome 10-25, Safari 5.1-6 */background: 'linear-gradient(to left, #0f3443, #34e89e)', /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+*/ width:'100%', height:'643px'   }}> 
        <div className="container"  >
            <div className="row" >
                <div className="col-lg-8" style={{display:'flex', marginLeft:'-60px'}}>
                    <img src={sin} alt="avatar" className=""  />
                </div> 
                
                <div className="col-lg-4" >
                 <Signup  
                        title="Citizen"
                        placeholder1="Your Username"
                        button="Sign in"
                        redirect={redirect}
                        e1={eventHandler}
                        e2={eventHandler1}
                        onSubmit={onSubmit}
                        color='white'
                 />
               
              </div>
                 
                
            </div>
        </div>
    </div>
        

        </>
    )
}
