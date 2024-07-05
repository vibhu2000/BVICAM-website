import React from 'react'
import Base from '../../base'
import Doc1 from '../../../../assets/documents/Revised Syllabus BA (JMC) August 2022 Onwards .pdf'
import Doc2 from '../../../../assets/documents/BA (JMC) Syllabus effective from 2016-2017 onwards.pdf'

const BjmcSyllabus = () => {
  return (
    <Base title="BA (JMC) Syllabus">
        <div className='row main-container'>
            <div className='my-5'>
                <p className='fs-6 lh-base'>
                    <b>File Upload:</b><br/>
                    <ul className='mt-2'>
                        <li><a href={Doc1} target="_blank" rel="noreferrer">Revised Syllabus BA (JMC) August 2022 Onwards.pdf</a></li>
                        <li><a href={Doc2} target="_blank" rel="noreferrer">BA (JMC) Syllabus effective from 2016-2017 onwards.pdf</a></li>
                    </ul>
                </p>
            </div>
        </div>
    </Base>
  )
}

export default BjmcSyllabus