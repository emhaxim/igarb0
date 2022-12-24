import React from 'react'
import { NavLink } from 'react-router-dom';


const AdhashSide = () => {

  
  return (
    <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation"  style={{backgroundColor:'#43484C', color:"white"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link " href="#" style={{color:"white"}}><i class="fa-solid fa-claw-marks">Welcome !</i> <h5><br/> M. Hashim </h5></a></li>
                <li class="nav-item mb-2 ">
                  
                <li><NavLink className='nav-link '   exact activeClassName='active_class'style={{color:"white"}} to='/defaulter'><i class="fa-solid fa-person-circle-exclamation "  style={{color:"#FF62AD"}}></i><span className="ml-3">Defaulters</span></NavLink></li></li>
                  
                 {/* <a class="nav-link text-secondary" href="/complain"><i class="fas fa-user font-weight-bold"></i> <span className="ml-3"><i class="fas fa-user font-weight-bold"></i>Defaulters</span></a></li> */}
                <li class="nav-item mb-2">
                    <a class="nav-link" style={{color:"white"}}  href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"  style={{color:"#FF62AD"}}></i> <span className="ml-3"> Complains ▾</span></a>
                    
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                       
                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link ' style={{color:"white"}}   exact activeClassName='active_class' to='/Inprog-complaints'><i class="fas fa-book-reader"></i><span className="ml-3">Inprogress</span></NavLink>
                       {/* <a class="nav-link text-secondary" href=""><i class="fas fa-book-reader"></i> Inprogress </a>  <FontAwesomeIcon icon="fa-regular fa-clipboard-list-check" />*/} 
                       </li>
                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link ' style={{color:"white"}}   exact activeClassName='active_class' to='/comp-complaints'><i class="fa-solid fa-square-check " ></i><span className="ml-3">Resolved</span></NavLink>
                       </li>
                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link '  style={{color:"white"}}  exact activeClassName='active_class' to='/all-complaints'><i class="fa-solid fa-list" ></i><span className="ml-3"> Show All</span></NavLink>
                        {/* <a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> All  </a> */}
                        </li>
                       {/* <a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"> /Inprog-complaints
                      </i> Completed </a></li> 
                       
                       <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> Disputed </a></li>*/}
                    </ul>
                </li>

                <li class="nav-item mb-2">
                    <a class="nav-link" style={{color:"white"}} href="#submenu2" data-toggle="collapse" data-target="#submenu2"><i class="fa-solid fa-trash"  style={{color:"#FF62AD"}}></i> <span className="ml-3"> Dustbins ▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu2" aria-expanded="false">
                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link' style={{color:"white"}}  exact activeClassName='active_class' to='/filled-dustbins'><i class="fa-solid fa-trash-arrow-up"></i><span className="ml-3">Filled</span></NavLink>
                        {/*<a class="nav-link text-secondary" href=""><i class="fa-solid fa-trash-arrow-up"></i>  <span className="ml-3">Filled </span></a> */}
                        </li>
                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/notfilled-dustbins'><i class="fa-solid fa-trash"></i><span className="ml-3">Not filled</span></NavLink>
                       </li>
                       {/* <a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical">
                      </i> Completed </a></li> */}

                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/all-dustbins'><i class="fa-solid fa-list"></i><span className="ml-3">Show All</span></NavLink>
                       </li>
                       
                      {/* <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> Disputed </a></li>  */}
                    </ul>
                </li>

                <li class="nav-item mb-3">
                    <a class="nav-link" style={{color:"white"}} href="#submenu3" data-toggle="collapse" data-target="#submenu3"><i class="fas fa-user font-weight-bold"  style={{color:"#FF62AD"}}></i> <span className="ml-3"> Employee ▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu3" aria-expanded="false">
                  
                    <li class="nav-item mb-2 ml-5 ">
                   
                    <li> <i class="fas fa-user font-weight-bold"  style={{}}></i><a  color='white' href="http://127.0.0.1:8000/admin/backend/sweeper/add/" target="_blank" style={{textDecoration: 'none'}}><span className="ml-3" style={{color:'white'}}>Add New</span></a></li></li>

                  
                       <li class="nav-item mb-1 ml-5">
                          <i class="fa-solid fa-edit"></i><a  color='white' href="http://127.0.0.1:8000/admin/backend/sweeper/" target="_blank" style={{textDecoration: 'none'}}><span className="ml-3" style={{color:'white'}}>Edit Info</span></a>
                       </li>

                       <li class="nav-item mb-2" style={{marginLeft:'32px', marginTop:'5px'}}>
                       <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/all-employee'><i class="fa-solid fa-list"></i><span className="ml-3">All</span></NavLink>
                       </li>

                       {/* <a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical">
                      </i> Completed </a></li> 

                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link text-secondary'   exact activeClassName='active_class' to='/all-dustbins'><i class="fa-solid fa-list"></i><span className="ml-3">Show All</span></NavLink>
                       </li>
                       */}
                      {/* <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> Disputed </a></li>  */}
                    </ul>
                </li>



                <li class="nav-item mb-2">
                    <a class="nav-link" style={{color:"white"}} href="#submenu4" data-toggle="collapse" data-target="#submenu4"><i class="fa-solid fa-book"  style={{color:"#FF62AD"}}></i> <span className="ml-3"> Task ▾</span></a>
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu4" aria-expanded="false">
                  
                    <li class="nav-item mb-2 ">
                  
                    <li><NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/add-task'><i class="fa-solid fa-edit"  style={{}}></i><span className="ml-3">Add Task</span></NavLink></li></li>

                  
                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link' style={{color:"white"}}   exact activeClassName='active_class' to='/notfilled-dustbins'><i class="fa-solid fa-list"></i><span className="ml-3">View Task</span></NavLink>
                       </li>


                       {/* <a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical">
                      </i> Completed </a></li> 

                       <li class="nav-item mb-2 ">
                       <NavLink className='nav-link text-secondary'   exact activeClassName='active_class' to='/all-dustbins'><i class="fa-solid fa-list"></i><span className="ml-3">Show All</span></NavLink>
                       </li>
                       */}
                      {/* <li class="nav-item mb-2 "><a class="nav-link text-secondary" href=""> <i class="fas fa-book-medical"></i> Disputed </a></li>  */}
                    </ul>
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

export default AdhashSide