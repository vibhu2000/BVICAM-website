import React from 'react'
import Base from '../../base'
import Founder from '../../../../assets/images/founder.jpg'

const FounderMsg = () => {
  return (
    <Base title="Founder's Message">
        <div className='row main-container'>
            <div className='col-12 col-md-5 px-sm-5 my-3'>
            <img src={Founder} width={"300px"} height={"350px"} style={{marginTop: "40px",marginLeft: "60px",boxShadow: "3px 3px 3px #7C7C7C"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='h3 mt-5 fs-5 lh-base text-center'>
                    <br/><br/>
                    <b>Hon'ble Dr. Patangraoji Kadam</b><br/>
                        M.A., L.L.B, Ph.D<br/>
                    Founder - Bharati Vidyapeeth, Pune<br/>
                    Chancellor - Bharati Vidyapeeth University, Pune<br/>
                    Minister for Forests, Govt. of Maharashtra,
                    Maharashtra
                </p>
            </div>
            <div className='col-12'>
                <p className='mt-4 mx-4 fs-6 lh-base'>
                    Dear Students,<br/>Youth of a nation, if channelized in the right direction can lead a nation's growth and progress. I laid the foundation of Bharati Vidyapeeth, five decades ago with an aim to build an educational institute that could train the youth of this country into productive individuals who could be an asset to the nation. Since then, Bharati Vidyapeeth has grown into one of the largest, reputed group of quality educational institutes in the country as well as abroad. The motto of Bharati Vidyapeeth, Pune, is Social Transformation through Dynamic Education.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    The idea behind establishing Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM) at New Delhi, the national capital of the country, close to the Gurgaon and Noida, the major IT hubs of Asia, was to provide quality IT education to the young, innovative minds and thereby making them worthy citizens of the country. To realize this aim, we at Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM) have built up a strong infrastructure with healthy and secure surroundings, updated, state-of the art laboratories and well-stocked libraries with all required e-journals and resources. The institute takes special care for all-round development and skill enhancement of its students with a team of dedicated, qualified and experienced director, faculty and staff.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    It gives me a deep sense of satisfaction and achievement, when I meet alumni of this alma-matter occupying important, decision-making roles in different fields across the globe. I feel proud that Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM) continuously strives and has always emerged as one of the leading learning centers in the field of Computer Applications, imparting holistic, quality education in the country.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    With Best Wishes,<br/>Dr. Patangrao Kadam
                </p>
            </div>
        </div>
    </Base>
  )
}

export default FounderMsg