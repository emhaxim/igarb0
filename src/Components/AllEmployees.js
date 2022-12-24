import React from 'react'
import AdhashSide from './AdhashSide';
import { NavLink } from 'react-router-dom';
import '@coreui/coreui/dist/css/coreui.min.css';
import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'

  import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cifPk,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'

import avatar1 from '../assets/avatars/1.jpg'
import avatar2 from '../assets/avatars/2.jpg'
import avatar3 from '../assets/avatars/3.jpg'
import avatar4 from '../assets/avatars/4.jpg'
import avatar5 from '../assets/avatars/5.jpg'
import avatar6 from '../assets/avatars/6.jpg'


const AllEmployees = () => {

    const tableExample = [
        {
          avatar: { src: avatar1, status: 'success' },
          user: {
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'USA', flag: cifPk },
          usage: {
            value: 50,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'success',
          },
          payment: { name: 'Mastercard', icon: cibCcMastercard },
          activity: '10 sec ago',
        },
        {
          avatar: { src: avatar2, status: 'danger' },
          user: {
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Brazil', flag: cifPk },
          usage: {
            value: 22,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'info',
          },
          payment: { name: 'Visa', icon: cifPk },
          activity: '5 minutes ago',
        },
        {
          avatar: { src: avatar3, status: 'warning' },
          user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2021' },
          country: { name: 'India', flag: cifPk },
          usage: {
            value: 74,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'warning',
          },
          payment: { name: 'Stripe', icon: cibCcStripe },
          activity: '1 hour ago',
        },
        {
          avatar: { src: avatar4, status: 'secondary' },
          user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2021' },
          country: { name: 'France', flag: cifFr },
          usage: {
            value: 98,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'danger',
          },
          payment: { name: 'PayPal', icon: cibCcPaypal },
          activity: 'Last month',
        },
        {
          avatar: { src: avatar5, status: 'success' },
          user: {
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Spain', flag: cifPk },
          usage: {
            value: 22,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'primary',
          },
          payment: { name: 'Google Wallet', icon: cibCcApplePay },
          activity: 'Last week',
        },
        {
          avatar: { src: avatar6, status: 'danger' },
          user: {
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2021',
          },
          country: { name: 'Poland', flag: cifPl },
          usage: {
            value: 43,
            period: 'Jun 11, 2021 - Jul 10, 2021',
            color: 'success',
          },
          payment: { name: 'Amex', icon: cibCcAmex },
          activity: 'Last week',
        },
        {
            avatar: { src: avatar6, status: 'danger' },
            user: {
              name: 'Friderik Dávid',
              new: true,
              registered: 'Jan 1, 2021',
            },
            country: { name: 'Poland', flag: cifPl },
            usage: {
              value: 43,
              period: 'Jun 11, 2021 - Jul 10, 2021',
              color: 'success',
            },
            payment: { name: 'Amex', icon: cibCcAmex },
            activity: 'Last week',
          },
          {
            avatar: { src: avatar6, status: 'danger' },
            user: {
              name: 'Friderik Dávid',
              new: true,
              registered: 'Jan 1, 2021',
            },
            country: { name: 'Poland', flag: cifPl },
            usage: {
              value: 43,
              period: 'Jun 11, 2021 - Jul 10, 2021',
              color: 'success',
            },
            payment: { name: 'Amex', icon: cibCcAmex },
            activity: 'Last week',
          },
          
      ]
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
            <div class="container-fluid" id="main" style={{backgroundImage:'None', backgroundColor:"white"}}>

            <div class="row row-offcanvas row-offcanvas-left">
                
                <AdhashSide/>


                <div className='col main pt-5 mt-3 '>
                <h2 style={{backgroundColor:"white"}}>Record of Employees</h2>
                    <CTable align="middle" class="mb-0 border pt-3" hover responsive style={{backgroundColor:"white",height:"600px", width:"1200px"}}>

                       
                        <CTableHead color="light pt-3 mt-3" >
                        <CTableRow className='mt-3'>
                            <CTableHeaderCell className="text-center">
                            <CIcon icon={cilPeople} />
                            </CTableHeaderCell>
                            <CTableHeaderCell>User</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                            <CTableHeaderCell>Usage</CTableHeaderCell>
                            <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                            <CTableHeaderCell>Activity</CTableHeaderCell>
                        </CTableRow>
                        </CTableHead>
                        <CTableBody>
                        {tableExample.map((item, index) => (
                            <CTableRow v-for="item in tableItems" key={index}>
                            <CTableDataCell className="text-center">
                                <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                            </CTableDataCell>
                            <CTableDataCell>
                                <div>{item.user.name}</div>
                                <div className="small text-medium-emphasis">
                                <span>{item.user.new ? 'New' : 'Recurring'}</span> | Registered:{' '}
                                {item.user.registered}
                                </div>
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                            </CTableDataCell>
                            <CTableDataCell>
                                <div className="clearfix">
                                <div className="float-start">
                                    <strong>{item.usage.value}%</strong>
                                </div>
                                <div className="float-end">
                                    <small className="text-medium-emphasis">{item.usage.period}</small>
                                </div>
                                </div>
                                <CProgress thin color={item.usage.color} value={item.usage.value} />
                            </CTableDataCell>
                            <CTableDataCell className="text-center">
                                <CIcon size="xl" icon={item.payment.icon} />
                            </CTableDataCell>
                            <CTableDataCell>
                                <div className="small text-medium-emphasis">Last login</div>
                                <strong>{item.activity}</strong>
                            </CTableDataCell>
                            </CTableRow>
                        ))}
                        </CTableBody>
                        </CTable>
                </div>

           
      

      
            
    
      </div>
    </div>
    </>
  )
}

export default AllEmployees