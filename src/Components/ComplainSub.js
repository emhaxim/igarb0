import React from 'react'
import Alert from 'react-bootstrap/Alert';
import verification from '../images/verification.gif'
import veri2 from '../images/veri2.gif'


    

const ComplainSub = () => {
  return (
    <>
          <div style={{backgroundColor:'white', height:"692px" }}>
        
            <div>
                <Alert variant="success" className="mt-5 ml-5 mr-5" >


                <Alert.Heading> <i class="fa-regular fa-envelope fa-3x"></i> Please Confirm Your Email!</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
                </Alert>
            </div>


                        
            <img src={veri2} alt="loading..."  style={{ width:'280px', height:"280px", marginLeft: '40%'}} />
                       

         
    
    <h6  style={{marginLeft: '40%'}}>
        IGARB0 All rights are reserved<i class="fa-regular fa-copyright ml-1"></i>
      </h6>
    
    </div>
    </>
  )
}

export default ComplainSub