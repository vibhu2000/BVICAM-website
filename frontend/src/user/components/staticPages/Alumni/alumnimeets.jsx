import React from 'react'
import Base from '../../base'
import Alumni from '../../../../assets/images/alumni-meet.jpg'

const AlumniMeets = () => {
  return (
    <Base title="Alumni Meets">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Alumni} width={"480px"} height={"280px"} style={{marginTop: "30px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    Near about 500 students have passed out from the Institute, since its inception. Many of our alumni are serving the society as professionals in one-way or the other different countries across the globe.
                    <br/><br/>
                    In order to provide platform for better interaction between the alumni, existing students and the faculty members, BVICAM conducts an annual Alumni Meet. This Alumni Meet is organized in the month of March annually in the Institute's premises. The occasion is graced by the alumni ranging across various batches of MCA Programme of the Institute. This is the occasion when the alumni meet and spend some nostalgic time together.
                </p>
            </div>
          </div>
    </Base>
  )
}

export default AlumniMeets