import React from 'react'
import Base from '../../base'
import Lab from '../../../../assets/images/CLab.jpg'

const Laboratories = () => {
  return (
    <Base title="Computer Resource Center">
          <div className="row main-container my-5">
            <div className='col-12 col-md-5 px-sm-4'>
            <img src={Lab} width={"450px"} height={"340px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-7' >
                <p className='mt-5 fs-6 lh-base'>
                    The Institute provides ample and updated technical resources to allow its students develop, practice and apply their technical prowess to the utmost. BVICAM campus provides the following well-maintained, spacious laboratories with appropriate teaching-learning facilities.
                </p>
                <h4 className='mt-4'>Computer Labs</h4>
                <p className='mt-1 fs-6 lh-base'>
                    The Institute houses three computer labs with about 175 computer systems and a separate Internet lab. All the laboratories are maintained by full-time staff. Current versions of all required software as per MCA course requirements are installed on all systems in each lab under MSDN academic alliance with Microsoft. Any other software required by students for project-work or research-work is also made available. Laboratories are available to students at all working days and working hours.
                </p>
            </div>

            <div className='col-12'>
                <h4 className='mt-4'>Digital Systems & Microprocessor Lab</h4>
                <p className='mt-1 fs-6 lh-base'>
                    To allow students to understand digital system hardware components and design, BVICAM has a separate Digital Systems and Microprocessor Lab. It is equipped with PAL/GAL trainer, 8085 microprocessor kits, etc. BVICAM also takes pride in providing System Integration and Hardware Assembling lab to its first year students. 
                </p>

                <h4 className='mt-4'>Internet Lab</h4>
                <p className='mt-1 fs-6 lh-base'>
                    The Institute has a separate Internet lab. It is connected to the cyberspace with a high speed, dedicated 2 Mbps WiMax radio link from Tata Communications. Additionally, it is also equipped with NKN link and related resources. This lab helps in linking the students to the world of e-resources while updating them about the latest happenings & technological updates. 
                </p>
            </div>
          </div>
        </Base>
  )
}

export default Laboratories