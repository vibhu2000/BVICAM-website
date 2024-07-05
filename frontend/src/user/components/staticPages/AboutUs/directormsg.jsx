import React from 'react'
import Base from '../../base'
import Director from '../../../../assets/images/DirectorSir.png'

const DirectorMsg = () => {
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
                    Dear Students,<br/>I take this opportunity to welcome you all as new members of Bharati Vidyapeeth family. As you are aware that Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM), New Delhi, was established in the year 1999 by Bharati Vidyapeeth, Pune, which has earned its own name through a large network of more than 150 Institutions all over country, particularly in Maharashtra. The Institute has started functioning with effect from the academic year 2002-2003, under affiliation of GGSIPU, New Delhi.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    We all understand that every new academic institute has to pass through a series of efforts and associated achievements before it is very well established in the society. Keeping in the mind, the objectives of un-matched academic excellence supported by adequate infrastructure and students’ caring trained faculty, it is taken up to endeavor continuously for creating better learning experiences to the student community. As a result, in such a short span of time, we could make this Institute as the Centre of Excellence having first preference by both Students and Industries.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    We believe in collective participation of staff, students, parents and Industry for developing the Institute and tailoring the teaching-learning process inline to industry expectations. Activities like LCD Presentations, Creative Writings, Technical Paper Presentation, Lesson Planning, Lab. Manuals, Group Discussions, Online Quizzes, Industrial Visits, Expert Lectures, Invited Talks, Workshops on Technical and Behavioral Issues and Faculty Development Workshops are a regular feature for us. Dedicated team of faculty members are in place tp give mentorship to young students.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    With Regards,<br/>Prof. M. N. Hoda
                </p>
            </div>
        </div>
    </Base>
  )
}

export default DirectorMsg