import React from 'react'
import {Navbar} from './Navbar'
import hash2 from '../images/hash2.PNG';
import sin from '../images/sin.png';
import { NavLink } from 'react-router-dom';
import hase2 from '../images/hase2.PNG';

const OurTeam = () => {
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
   
    <div>
  <header className=" item-center text-center py-3 mb-4 new">
    <div className="container">
      <h1 className="font-weight-light text-white">Meet Our Lovely Team</h1>
    </div>
  </header>


  <div className="container text-center" style={{paddingLeft:"150px"}}>
    <div className="row text-center"> 
      <div className="col-xl-4 col-md-6 mb-5 text-center" style={{marginleft:"500px"}}>
        <div className="border-0 ">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={hash2} className="card-img-top" alt="avatar" />
                <div className="card-body text-center  ">
                  <h5 className="card-title mb-0">Member One</h5>
                  <div className="card-text text-black-50">Team Lead</div>
                </div>
              </div>
              <div className="flip-card-back">
                <h1 className="person text- ">Member One</h1> 
                <p className="description text-black-50">This is some description about the member of the team, which appears at the back of card and the image appears at the top of the front side with their social media links and the position of the member.</p>
                <i href="#" className="fa fa-facebook" ></i>
                <i href="#" className="fa fa-twitter" ></i>
                <i href="#" className="fa fa-linkedin"> </i>
              </div>
            </div>    
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6 mb-4">
        <div className="border-0 ">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={hase2} className="card-img-top" alt="avatar" />
                <div className="card-body text-center ">
                  <h5 className="card-title mb-0">Member Two</h5>
                  <div className="card-text text-black-50">Web Developer</div>
                </div>
              </div>
              <div className="flip-card-back">
                <h1 className="person text- ">Member Two</h1> 
                <p className="description text-black-50">This is some description about the member of the team, which appears at the back of card and the image appears at the top of the front side with their social media links and the position of the member.</p> 
                <i href="#" className="fa fa-facebook" ></i>
                <i href="#" className="fa fa-twitter" ></i>
                <i href="#" className="fa fa-linkedin"> </i>
              </div>
            </div>    
          </div>
        </div>
      </div>
   
      <div className="col-xl-4 col-md-6 mb-4">
        <div className="border-0 ">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="https://images.unsplash.com/photo-1473700216830-7e08d47f858e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80" className="card-img-top" alt="avatar" />
                <div className="card-body text-center ">
                  <h5 className="card-title mb-0">Member Four</h5>
                  <div className="card-text text-black-50">Web Designer</div>
                </div>
              </div>
              <div className="flip-card-back">
                <h1 className="person text- ">Member Four</h1> 
                <p className="description text-black-50">This is some description about the member of the team, which appears at the back of card and the image appears at the top of the front side with their social media links and the position of the member .</p> 
                
                <i class="fa fa-facebook"  ></i>
                <a href="#" className="fa fa-facebook" />
                <a href="#" className="fa fa-twitter" />
                <a href="#" className="fa fa-linkedin" />
              </div>
            </div>    
          </div>
        </div>
      </div>
    </div>
    
  
    </div>

    </div>



    </>
   
   
    
  )
}

export default OurTeam