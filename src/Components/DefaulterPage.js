import React from 'react'
import Defaulter from './Defaulter'
import AdhashSide from './AdhashSide';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const DefaulterPage = () => {



  

    const [conditionA, setconditionA] = useState(true);
    // Condition B to view add complain page
  
  
   function changeConditionA(){
   
    
    setconditionA(!conditionA)
  
  
  }

  return (
   <>

         <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3" >
  <div className="flex-row d-flex">
  
    <div className="logo pl-4 ml-1">i<spam>G</spam>arb0</div>
  </div>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="navbar-collapse collapse" id="collapsingNavbar">
    {/*
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="//www.codeply.com">Link</a>
      </li>
    </ul>  */}
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
      <li><NavLink className='nav-link'   data-toggle="collapse"  exact activeClassName='active_class' to='/dashboard'>Home</NavLink></li>
        {/*<a className="nav-link" href="#myAlert" data-toggle="collapse" onClick={changeConditionA}>Home</a>*/}
      </li>
      <li className="nav-item">
        <a className="nav-link" href data-target="#myModal" data-toggle="modal">About</a>
      </li>
      
      <li className="nav-item">
        <a className="nav-link waves-effect waves-light text-white">
          <i className="fas fa-envelope-open-text" />
        </a>
      </li>
      <li className="nav-item mr-3">
        <a className="nav-link waves-effect waves-light text-white">
          <i className="fas fa-align-justify" />
        </a>
      </li>
    </ul>
  </div>
         </nav>
        <br></br>
          
        <div class="container-fluid" id="main" style={{backgroundImage:'None'}}>
        <div class="row row-offcanvas row-offcanvas-left">
            
            <AdhashSide/>
            <Defaulter/>
            

            
                    
                        { /* conditionA ? 
                                    : <Employee /> */}
                    
            
                    
            
        </div>
        </div>


   </>
  )
}

export default DefaulterPage