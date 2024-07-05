import React from 'react'
import Base from '../../base'
import Director from '../../../../assets/images/DirectorSir.png'

const CareerDirectorMsg = () => {
  return (
    <Base title="Director's Message">
        <div className='row main-container'>
            <div className='col-12 col-md-5 px-sm-5 my-3'>
            <img src={Director} width={"350px"} height={"350px"} style={{marginTop: "40px",marginLeft: "60px",boxShadow: "3px 3px 3px #7C7C7C"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='h3 mt-5 fs-5 lh-base text-center'>
                    <br/><br/><br/>
                    <b>Prof. M. N. Hoda</b><br/>
                        MCA, Ph.D., SMIEEE, SMACM, FIETE, FCSI, FIITP, LMISTE, LMISCA<br/>
                        Director - BVICAM<br/>
                </p>
            </div>
            <div className='col-12'>
                <p className='mt-4 mx-4 fs-6 lh-base'>
                Dear Corporates,<br/>With the evolution of new millennium, we put forth before you the profile of our prospective professionals who are dynamic, committed & self motivated and strive to leave no stone unturned to meet the rapidly changing global challenges of IT world in the 21st Century.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    The MCA programme at BVICAM, New Delhi, is a right blend of both academic and professional learning. The students undergo rigorous academic work complimented by intensive project work, industrial exposures and value added workshops/seminars. In fact, the major value addition lies at the core of our teaching curriculum and is regularly updated with regular feedback from the industry and compared with the curriculum of leading national and international level institutions to retain the edge in the academics. Both academicians and corporates have appreciated our Faculty Development and Quality Improvement Programmes. At BVICAM, education is considered as the instrument of social change, which distinguishes us from other institutions. We not only teach students to be Total Quality Professionals but also to be socially responsible and accountable citizens. If given an opportunity, BVICAM, New Delhi, students are capable enough to prove their worth in any of the professional pursuit.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    We take this opportunity to invite your esteemed organization to interact with the students and participate in our campus recruitment process (for our final year MCA students) which starts in the month of July every year, and thereby provide them with ample opportunities. We assure you the right match for your talent search at our campus.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    With Best Wishes,<br/>Prof. M. N. Hoda<br/>(DIRECTOR)
                </p>
            </div>
        </div>
    </Base>
  )
}

export default CareerDirectorMsg