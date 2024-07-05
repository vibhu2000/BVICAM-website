import React from 'react'
import Base from '../../base'
import Activities from '../../../../assets/images/Activities.jpg'

const ClubActivities = () => {
  return (
    <Base title="Students' Clubs">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 mt-5'>
            <img src={Activities} width={"480px"} height={"280px"} style={{marginTop: "20px"}}/>
            </div>
            <div className='col-12 col-md-7 mt-5' >
                <p className='mt-5 fs-6 lh-base'>
                    Academics are definitely the top most priority @ BVICAM. But, at BVICAM, thrust is always to develop a work-environment that is akin to corporate culture. The objective of this endeavor is to harness the creative ideas of the young minds to the fullest, developing team spirit amongst them and improving their "'Soft-Skills".
                    <br/><br/>
                    Various activities, organized from time to time, under the flagship of BVICAM's clubs, offer some of the most memorable, interesting and enjoyable aspects of student experience at the Institute. These clubs are a vital part of BVICAM experience and create a vibrant community based on the diversity of our student's background.
                </p>
            </div>
            <div>
                <p className='mt-4 mb-2 fs-6 lh-base'>
                    Participation in club activities helps the students in various ways like : 
                
                    <ol>
                        <li className='fs-6 lh-base'>Building important networks with alumni.</li>
                        <li className='fs-6 lh-base'>Opportunities to explore <b>personal interests</b>.</li>
                        <li className='fs-6 lh-base'>Opportunities to develop <b>leadership potential</b>.</li>
                        <li className='fs-6 lh-base'>An exciting schedule of student led events and activities.</li>
                    </ol>
                </p>
            </div>
            <div>
                <p className='mt-3 mb-2 fs-6 lh-base'>
                    Some of the major clubs of the Institute are as under :
                    <ul>
                        <li className='fs-6 lh-base'>Training and Placement Cell</li>
                        <li className='fs-6 lh-base'>Alumni Cell</li>
                        <li className='fs-6 lh-base'>Software Consultancy and Development Division</li>
                        <li className='fs-6 lh-base'>NSC and Event Management Club</li>
                        <li className='fs-6 lh-base'>Cultural Club</li>
                        <li className='fs-6 lh-base'>Literary & Knowledge Club</li>
                        <li className='fs-6 lh-base'>Technology Club</li>
                        <li className='fs-6 lh-base'>Sports Club</li>
                    </ul>
                </p>
            </div>
          </div>
    </Base>
  )
}

export default ClubActivities