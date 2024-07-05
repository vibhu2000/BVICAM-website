import React from 'react'
import Base from '../../base'
import Alumni from '../../../../assets/images/AlumniActivities.jpg'

const AlumniActivities = () => {
  return (
    <Base title="Alumni Activities">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Alumni} width={"480px"} height={"280px"} style={{marginTop: "25px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-4 fs-6 lh-base'>
                    BVICAM Alumni retain their relationship with the Institute by being involved in various activities in the Institute like conducting workshops, FDPs, seminars, etc. The diverse activities involving connection of the alumni with present students to support the Institute’s mission of teaching, research and services. Some notable Alumni activities are as follows :-
                </p>
                <ul>
                    <li className='mt-2 fs-6 lh-base'>Collaboration between present students and Alumni members to further strengthen the Institute's Software Consultancy and Development Cell (SCDC).</li>
                    <li className='mt-2 fs-6 lh-base'>Conduction of sessions based on Active Learning and other skills for Corporate Grooming to enhance the overall employability of the existing students in Institute's campus.</li>
                    <li className='mt-2 fs-6 lh-base'>Regular FDPs on latest technologies.</li>
                </ul>
            </div>
          </div>
        </Base>
  )
}

export default AlumniActivities