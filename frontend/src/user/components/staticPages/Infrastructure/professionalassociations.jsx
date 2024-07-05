import React from 'react'
import Base from '../../base'
import Day from '../../../../assets/images/ISTEDay.jpg'

const ProfessionalAssociations = () => {
  return (
    <Base title="Professional Associations">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Day} width={"450px"} height={"270px"} style={{marginTop: "45px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    <br />
                    <p className='h3 fs-5 lh-base fst-italic text-center'>ISTE Day Celebration</p>
                    The Bharati Vidyapeeth's Institute of Computer Applications and Management, in association with Delhi Section of Indian Society for Technical Education (ISTE), New Delhi organized an evening symposium on ”Role of Professional Societies in Quality Enhancement of Technical Education” held at Bharati Vidyapeeth's campus on a formal invitation by Prof. N.D.Kaushika, Principal of B.V.C.O.E., New Delhi on 21st May, 2010.
                </p>
            </div>
            <div className='col-12'>
                <p className='fs-6 lh-base' style={{marginTop: "-15px"}}>
                    To grace the occasion with his presence was Prof. D.P. Aggarwal (Chairman , Union Public Service Commission, New Delhi) , Shri S.N.Gupta (Chief Regulatory Advisor and Director Govt. Affairs, BT Global Services, India & SAARC),  and Prof. P.V. Gupta (Educationalists Ex-advisor, Apeejay Group of Institutions).
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    In his presidential address, Prof. D.P. Aggarwal highlighted the role of technical institutions in grooming of the upcoming IT professionals. He emphasized on the essence of quality education and conceptual learning which cannot be completely achieved with blackboard teaching or teaching with PowerPoint presentations. The chief convener of the conference, Prof M.N. Hoda, Director BVICAM said that we must take IT to each and every sector.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    Shri S.N.Gupta, put forward his ideas and knowledge regarding “Better Life, Better Citizens using Technology” .
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    Prof. P.V.Gupta then highlighted the importance of “Entrepreneurship in Technical Education”, gave instances of many entrepreneurs like Bill Gates who are amongst the most successful men of today’s world.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    The conference concluded with a note of thanks by  Prof. P.Q.Ansari followed by formal dinner.    
                </p>
            </div>
          </div>
        </Base>
  )
}

export default ProfessionalAssociations