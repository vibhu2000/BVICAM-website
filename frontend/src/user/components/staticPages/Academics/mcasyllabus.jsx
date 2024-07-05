import React from 'react'
import Base from '../../base'
import MCACourse from '../../../../assets/images/MCA Course Architecture.png'
import Doc from '../../../../assets/documents/MCA Scheme and Syllabus of 2 years duration w.e.f. Academic Year 2020-2021.pdf'

const McaSyllabus = () => {
  return (
    <Base title="MCA Syllabus">
        <div className='row main-container'>
            <div className='my-5'>
                <img src={MCACourse} width="300px" height="350px"/>
                <p className='mt-5 fs-6 lh-base'>
                    <b>file:</b><br/>
                    <ul>
                        <li><a href={Doc} target="_blank" rel="noreferrer">MCA Scheme and Syllabus of 2 years duration w.e.f. Academic Year 2020-2021</a></li>
                    </ul>
                </p>
            </div>
        </div>
    </Base>
  )
}

export default McaSyllabus