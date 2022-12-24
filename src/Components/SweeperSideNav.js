import React from 'react'
import { NavLink } from 'react-router-dom';


const SweeperSideNav = () => {
  return (
    <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation"  style={{backgroundColor:'#43484C', color:"white"}}>
    <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">

        <li class="nav-item mb-2 ">
               <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/admin-analytics'><i class="fas fa-user font-weight-bold" style={{color:"#FF62AD"}}></i><span className="ml-3">Profile</span></NavLink>    
        </li>

        <li class="nav-item mb-2 ">
               <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/admin-analytics'><i class="fas fa-chart-bar font-weight-bold" style={{color:"#FF62AD"}}></i><span className="ml-3">Task</span></NavLink>    
        </li>

        <li class="nav-item mb-2 ">
               <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/admin-analytics'><i class="fas fa-book font-weight-bold" style={{color:"#FF62AD"}}></i><span className="ml-3">Duties</span></NavLink>    
        </li>

        <li class="nav-item mb-2 ">
               <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/admin-analytics'><i class="fas fa-question font-weight-bold" style={{color:"#FF62AD"}}></i><span className="ml-3">Find Dustbin</span></NavLink>    
        </li>

        <li class="nav-item mb-2 ">
               <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/admin-analytics'><i class="fas fa-add font-weight-bold" style={{color:"#FF62AD"}}></i><span className="ml-3">Add Note</span></NavLink>    
        </li>

        <li class="nav-item mb-2 ">
               <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/admin-analytics'><i class="fas fa-chart-bar font-weight-bold" style={{color:"#FF62AD"}}></i><span className="ml-3">Analytics</span></NavLink>    
        </li>




        

            {/*}
            <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> <span className="ml-3">Analytics</span></a></li>  */}
      
    </ul>
</div>
  )
}

export default SweeperSideNav