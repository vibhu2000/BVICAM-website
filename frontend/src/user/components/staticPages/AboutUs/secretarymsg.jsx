import React from 'react'
import Base from '../../base'
import Secretary from '../../../../assets/images/secretary.jpg'

const SecretaryMsg = () => {
  return (
    <Base title="Secretary's Message">
        <div className='row main-container'>
            <div className='col-12 col-md-5 px-sm-5 my-3'>
            <img src={Secretary} width={"300px"} height={"350px"} style={{marginTop: "40px",marginLeft: "60px",boxShadow: "3px 3px 3px #7C7C7C"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='h3 mt-5 fs-5 lh-base text-center'>
                    <br/><br/>
                    <b>Hon'ble Dr. Vishwajeet Kadam</b><br/>
                        B.E., MBA, Ph.D.<br/>
                        Secretary<br/>
                        Bharati Vidyapeeth University, Pune<br/>
                </p>
            </div>
            <div className='col-12'>
                <p className='mt-4 mx-4 fs-6 lh-base'>
                    I, on behalf of Bharati Vidyapeeth, Pune, wish all our students of Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM), New Delhi, a very challenging and successful career. We make sure that with all the necessary inputs provided to them by the experienced and qualified faculty with excellent infrastructural and instructional facilities, they will definitely be an asset to any organization.                
                </p>
                <p className='mt-4 mx-4 fs-6 lh-base'>
                    We, at Bharati Vidyapeeth, have always felt it as our moral duty to produce responsible and Total Quality Professionals, who can successfully face the challenges of the ever- changing global scenario. Bharati Vidyapeeth with its five decades of expertise in the educational field has the richness and depth found at larger E-schools, with personal attention given to all the students.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    We, therefore, make an appeal to your venerated organization to give an opportunity to our students of BVICAM, New Delhi, to prove their skills and abilities to the optimal level.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    With Warm Wishes,<br/>Dr. Vishwajeet Kadam
                </p>
            </div>
        </div>
    </Base>
  )
}

export default SecretaryMsg