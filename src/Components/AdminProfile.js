import React from 'react'
import AdhashSide from './AdhashSide';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CitizenProfile from './CitizenProfile';

const AdminProfile = () => {

    const [conditionA, setconditionA] = useState(true);
    // Condition B to view add complain page
  
    function changeConditionA(){
 
  
        setconditionA(!conditionA)
      
      
      }
  const [alldata, setalldata] = useState([])

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

    <li><NavLink className='nav-link'  data-toggle="collapse"  exact activeClassName='active_class' to='/dashboard'>Home</NavLink></li>
      
      
      <li className="nav-item"> <NavLink className='nav-link'  href data-target="#myModal" data-toggle="modal" exact activeClassName='active_class' to='/admin-profile'>Profile</NavLink></li>
 
        

      
      
      
   
   {/*}
    <li className="nav-item">
        <a className="nav-link" href data-target="#myModal" data-toggle="modal">About</a>
  </li> */}
      
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
      <div class="col main pt-5 mt-3">< CitizenProfile alldata = {alldata} img = 'https://img.freepik.com/free-photo/person-getting-ready-project-meeting_23-2149267872.jpg?w=740&t=st=1670007506~exp=1670008106~hmac=7a58f3d2a2cac2f6739fb416479552df3f7921eb4812f205dce251205d18b250'/></div>
      
      
      

      
            
                  
      
            
    
  </div>
</div>
     
    </>
  )
}

export default AdminProfile