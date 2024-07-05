import React from 'react';
import Base from "../../base";
import MCA from '../../../../assets/images/MCATopRecruiter.jpg';
import BJMC from '../../../../assets/images/RecruitersBJMC.jpg';

const RecruitingCompanies = () => {
  return (
    <Base title="Recruiting Companies">
    <div className='row main-container'>
        <div className='my-5'>
            <h3 className='lh-base text-center text-decoration-underline'>
                <b>MCA TOP RECRUITERS</b>
           </h3> 
            <img src={MCA} className='mb-3 mx-auto d-block' style={{width:"1000px"}}/> 
            <h3 className='mt-5 lh-base text-center text-decoration-underline'>
                <b>BA-JMC TOP RECRUITERS</b>
           </h3> 
            <img src={BJMC} className='mb-3 mx-auto d-block' style={{border: "solid #B2BEB5", width:"1000px"}}/>            
        </div>
    </div>
</Base>
  )
}

export default RecruitingCompanies