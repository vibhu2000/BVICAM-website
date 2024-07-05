import React from 'react'
import Base from '../../base'
import img from '../../../../assets/images/FDP.jpg'

const Fdp = () => {
  return (
    <Base title="Faculty Development Programmes">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 mt-5 mb-4'>
                <img src={img} width={"480px"} height={"280px"} style={{marginTop: "15px"}}/>
            </div>
            <div className='col-12 col-md-7 mt-4' >
                <p className='mt-5 fs-6 lh-base'>
                    The main aim of BVICAM core activities is strengthening the backbone of nation by improving the quality of education and enhancing the level of technical Teaching-Learning Process. For this purpose, efforts are made to elevate the capability of a teacher not only in teaching but also in other allied activities as well as research and development. The personality of a faculty has a monumental effect on students as they try to imitate as well as acquire many practices of theirs unconsciously. The personality development of the teacher is desired to create enthusiasm amongst students by motivating them to attend lectures and to shape their career in a fruitful direction. BVICAM organizes regular FDPs with the motive to illuminate the faculties inducing self-analysis, self-introspection, self-actualization, self-enhancement and comprehensive development of their personalities. 
                </p>
            </div>
            <p className='mb-5 fs-6 lh-base'>For details of the all FDPs being conducted, please <a href="#">click here</a>.</p>
          </div>
    </Base>
  )
}

export default Fdp