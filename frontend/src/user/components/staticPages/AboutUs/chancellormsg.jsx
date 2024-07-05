import React from 'react'
import Base from '../../base'
import Chancellor from '../../../../assets/images/chancellor.jpg'

const ChancellorMsg = () => {
  return (
    <Base title="Chancellor's Message">
        <div className='row main-container'>
            <div className='col-12 col-md-5 px-sm-5 my-3'>
            <img src={Chancellor} width={"300px"} height={"350px"} style={{marginTop: "40px",marginLeft: "60px",boxShadow: "3px 3px 3px #7C7C7C"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='h3 mt-5 fs-5 lh-base text-center'>
                    <br/><br/>
                    <b>Hon'ble Prof. (Dr.) Shivajiraoji Kadam</b><br/>
                        M. Sc., Ph.D.<br/>
                        Chancellor <br/>
                        Bharati Vidyapeeth University, Pune<br/>
                </p>
            </div>
            <div className='col-12'>
                <p className='mt-4 mx-4 fs-6 lh-base'>
                    Dear Students,<br/>Hearty welcome to you in Bharati Vidyapeeth, Pune, a Temple of Learning. I appreciate your interest in joining Bharati Vidyapeeth family. You are entering into the arena of higher education where the future is full of opportunities and promises.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    There is continuous explosion of knowledge everywhere. New technologies and new skills are emerging. New fields of knowledge are opening. Horizons of professional activities are expanding so there is much more scope for the people of younger generations to show their talents and for the achievements.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    At the same time, you must realize that there are many challenges inherent in the emerging situation. Since educational situation in our country has become quite dynamic, we will have to be ready and equipped with the required abilities and capacities to conquer the newer fields of knowledge and master newer techniques and skills.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    We at Bharati Vidyapeeth, Pune, are committed to provide you with excellent education and training.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    While we put emphasis on giving excellent education to our students in an encouraging environment, we pay equal attention to the all sided development of their personalities. We provide them ample opportunities for giving expression to their inner literacy and artistic talents, as well as, sportsmanship. We want our students to be well educated and well trained and also to become responsible citizens. You will be happy to know that the track record of achievements of our alumni is indeed commendable.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    I am sure, you are joining our institutions with your ambition and dream. We are here to help you to realize them. So, let us work together and make an endeavour to build up your career.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    I wish you all the best in your future career as students of this Institution.
                </p>

                <p className='mt-4 mx-4 fs-6 lh-base'>
                    With Warm Wishes,<br/>Prof. (Dr.) Shivajiraoji Kadam
                </p>
            </div>
        </div>    
    </Base>
  )
}

export default ChancellorMsg