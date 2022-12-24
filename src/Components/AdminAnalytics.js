import React from 'react'
import { NavLink } from 'react-router-dom';
import {
    
    CButton,
    CButtonGroup,
    CCardBody,
    CCol,
    CRow,
    CCardHeader,
    CCard
  
  } from '@coreui/react'

import {
  CChartBar,
} from '@coreui/react-chartjs'

  import { CChartLine } from '@coreui/react-chartjs'
  import { getStyle, hexToRgba } from '@coreui/utils'
  import CIcon from '@coreui/icons-react'
  import {
    
    cilCloudDownload,
 
  } from '@coreui/icons'
import AdhashSide from './AdhashSide';

const AdminAnalytics = () => {


    const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  return (
    <>
       {/*<nav className="navbar fixed-top navbar-expand-md navbar-dark bg-dark mb-3" >*/}

       <nav className="navbar fixed-top navbar-expand-md  mb-3"   style={{backgroundColor:'#43484C', color:"white"}}>
  <div className="flex-row d-flex" >
  
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
    <br/>


    
    
<div class="container-fluid" id="main" style={{backgroundImage:'None'}}>
<div class="row row-offcanvas row-offcanvas-left">
      
      <AdhashSide/>

    <div    class="col main pt-5 mt-3" style={{backgroundColor:"white", paddingTop:'200px'}}>

        
   
                <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h2 id="traffic" className=" mb-0">
                Garbage Traffic
              </h2>
              <div className="small text-medium-emphasis">January - December 2022</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === 'Month'}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'My First dataset',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                  fill: true,
                },
                {
                  label: 'My Second dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                    random(50, 200),
                  ],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [65, 65, 65, 65, 65, 65, 65],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
               </CCardBody>

               <CCard className="mb-4">
          <CCardHeader>Bar Chart</CCardHeader>
          <CCardBody>
            <CChartBar  
              data={{
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                  {
                    label: 'Mass of Garbage Yearly Produced',
                    backgroundColor: '#f87979',
                    data: [40, 20, 12, 39, 10, 40, 39, ],
                    fontSize: '20px'

                  },
                ],
              }}
              labels="months"
            />
          </CCardBody>
        </CCard>
    </div>

</div>
</div>

    </>
  )
}

export default AdminAnalytics