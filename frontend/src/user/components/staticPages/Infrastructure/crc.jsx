import React from 'react'
import Base from '../../base'
import Lab from '../../../../assets/images/CLab.jpg'

const Crc = () => {
  return (
    <Base title="Computer Resource Center">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Lab} width={"450px"} height={"300px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    <br />
                    BVICAM has an ultra-modern <b>“Computer Resource Centre”</b> with an excellent interior design, consisting of more than <b>175</b> computer systems equipped with all the latest and relevant hardware and software as required for the course curriculum from time to time. Adequate number of printers, including Lasers, is installed for providing add-on services.<br/><br/>
                    The Centre has live multi-user communication environment based on the three-tier Client-Server Network Architecture. All PCs are connected through On-line UPS, which, in turn, is supported by heavy-duty central generator of the Institute for long backup, in case of power failure.
                </p>
            </div>
            <div className='col-12'>
                <p className='fs-6 lh-base' style={{marginTop: "-15px"}}>
                    As a gateway to Information Superhighway, the Institute has a dedicated <b>“Internet Resource Centre”</b> using high bandwidth radio link connectivity for the faculty as well as students. Internet facility is also available in Library to browse the online journals. Hostel rooms are also equipped with internet facility.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    In order to make efficient use of the above resources, the laboratories are kept open for minimum 12 hours daily. Students are encouraged to take up project work related to professional software development in collaboration with the Industries and Corporate Houses.
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Crc