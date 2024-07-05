import React from 'react'
import Base from '../../base'
import Tnp from '../../../../assets/images/tnp.jpg'
import Doc1 from '../../../../assets/documents/Invitation Letter for Campus Hiring for the Final Year Batch Passing out in 2020.pdf'
import Doc2 from '../../../../assets/documents/Invitation Letter for Campus Hiring for the Final Year Batch Passing out in 2018.pdf'
import Doc3 from '../../../../assets/documents/Invitation Letter for Campus Hiring for the batch passing out in 2017.pdf'

const TnpCell = () => {
  return (
    <Base title="Training & Placement Cell">
          <div className="row main-container">
            <div className='col-12 col-md-5 px-sm-4 my-5'>
            <img src={Tnp} width={"500px"} height={"280px"} style={{marginTop: "40px"}}/>
            </div>
            <div className='col-12 col-md-7 my-5' >
                <p className='mt-5 fs-6 lh-base'>
                    <b>BVICAM, New Delhi,</b> is one of the <b>187 Institutions of Bharati Vidyapeeth, Pune,</b> which is 53 years old Institution having academic programmes from pre-primary to doctorate level, in diverse fields of academic pursuits, under its umbrella. Keeping its vision clear and mission at fore, BVICAM, New Delhi started 03 years <b>Master of Computer Applications (MCA)</b> programme under <b>University School of Information and Communication Technology (USICT)</b> with effect from the Academic year <b>2002-2003</b> as a part of Bharati Vidyapeeth family in New Delhi. The Institute is affiliated to Guru Gobind Singh Indraprastha (GGSIP) University, New Delhi and approved by All India Council for Technical Education (AICTE), Ministry of HRD, Government of India. BVICAM, New Delhi, receives first priority in the centralized admission process of GGSIP University and, year after year, <b>top rankers, join BVICAM, New Delhi.</b>
                </p>
            </div>
            <div className='col-12'>
                <p className='fs-6 lh-base' style={{marginTop: "-20px"}}>
                    BVICAM's Training and Placement Cell acts as a vital interface to bridge the gap between industry and academia to facilitate its students' intake and absorption in IT companies. Our Training and Placement Cell facilitates students in their career development through various initiatives like:  Student Counseling, Corporate Mentorship, Corporate Interface, Mock Campus, Placement Team, etc. It provides the necessary training and guidance to the students to help them decide their career paths and become a successful professional. We have a vibrant bunch of <b>100 MCA students</b>, from amongst the top <b>10% cream</b> of the <b>MCA programme</b> of <b>GGSIP University</b>, New Delhi, who are corporate ready, technically sound and competent enough to be a valued member of any of the working team, in an industry of repute, like you.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    The Placement Cell is headed by a full time Training and Placement Officer having rich corporate experience and supported by a team of committed faculty and student members. With a clear objective of "defining the career path of every student", the Placement Cell is actively involved in the activities like: Training Students on Recent Technical Trends and Corporate Soft Skills, Building Relationships with Corporate, Industrial Visits, Guest Lectures, Alumni Interaction, Feedback Collection, Organizing Customized and Tailor-made Programmes for Corporates, etc. Every sturday (which is working), is used to expose students with corporate culture and groom them accordingly. Working HR professionals from different Corporate Houses are invited for the same.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    The campus placement programme for each batch is carried out during July - September every year. Organizations are requested to schedule their recruitment efforts during this time with full support from Placement Cell of the Institute. Placement Cell renders all possible support and services to the organizations for smooth conduct of recruitment activities like pre-placement talks, written tests, group discussions and interviews. We also extend the Pool Campus facility, where in companies may also invite students from other Institutions / Universities, based upon their choice.
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    BVICAM boasts of almost 100% placement of each batch. Our corporate relations catering to a multitude of profile, span across a variety of partners to the likes of <b>Amazon, Thorogood, ThoughtWorks, Nagarro, Indus Valley Partners, Reval, Aon Hewit, Cvent, TCS, Aricent, Infogain, Opera, BirlaSoft, Xebia, HeadStrong, Jabong, NIIT Technologies, CSC, ForeSight, Sopra, Genpact</b>, and many more. The Training and Placement Cell works tirelessly throughout the year by undertaking various initiatives to transform its students into industry-ready professionals. We at BVICAM, New Delhi, meticulously nurture our young and dynamic professionals through a rigorous course curriculum coupled up with quintessential dimensions of <b>research publications, corporate grooming, industrial trainings, live-project work experience, incubation centre</b>. Various efforts undertaken in this direction include:
                </p>
                <ul>
                    <li className='mt-2 fs-6 lh-base'>Project Based and Problem Based Teaching Learning practices.</li>
                    <li className='mt-2 fs-6 lh-base'>Grooming of technical skills through workshops and hands-on on technologies like- <b>Asp.Net, JEE Frameworks, MEAN stack, Laravel, Python, Ruby R, Bootstrap, Web Design,</b> etc.</li>
                    <li className='mt-2 fs-6 lh-base'>Grooming of soft skills like <b>project management, team work, communication skills through INDIACom; the IEEE International Conference, National Students' Conventions,</b> etc. which are zealously organized by our students.</li>
                    <li className='mt-2 fs-6 lh-base'>A series of value added workshops / seminars by renowned personalities like Mr. Ankit Fadia, Mr. Yashavant Kanetkar, Mr. Shiv Khera, etc., to name a few.</li>
                    <li className='mt-2 fs-6 lh-base'>Strong collaborations with professional societies like IEEE, IETE & CSI </li>
                </ul>
                <p className='mt-4 fs-6 lh-base'>
                    <span style={{color: "red"}}>Please download a formal copy of</span> <a href={Doc1} target="_blank" rel="noreferrer">Invitation Letter for Campus Hiring for the batch passing out in 2020.</a>
                </p>
                <p className='mt-4 fs-6 lh-base text-center'>
                    For further details, please contact: our Training and Placement Officers-
                </p>
                <p className='mt-2 fs-6 lh-base text-center border border-dark p-2'>
                        <b>Dr. Saumya Bansal</b><br/>
                        Training and Placement  Officer | Faculty Coordinator, T & P Cell BVICAM<br/> 
                        Mob: +91-8130846470, +91-11-25275055<br/>
                        e-Mail: <span style={{color: "blue"}}>placements@bvicam.ac.in</span><br/>
                </p>
                <p className='mt-2 fs-6 lh-base text-center'>
                        Bharati Vidyapeeth's<br/>
                        Institute of Computer Applications and Management (BVICAM)<br/> 
                        A-4, Paschim Vihar, Near Paschim Vihar (East) Metro Station,<br/>
                        Rohtak Road, New Delhi-110063<br/>
                        Tel. +91-11-25275055, Fax: +91-11-25255056<br/>
                        Mobile: +91-8130588039, +91-8130588172<br/>
                        E-Mail: <span style={{color: "blue"}}> placements@bvicam.ac.in</span>, <span style={{color: "blue"}}>mca@bvicam.ac.in</span><br/>
                </p>
                <p className='mt-4 fs-6 lh-base'>
                    <b>file:</b><br/>
                    <ul>
                        <li><a href={Doc1} target="_blank" rel="noreferrer">Invitation Letter for Campus Hiring for the Final Year Batch Passing out in 2020.pdf</a></li>
                        <li><a href={Doc2} target="_blank" rel="noreferrer">Invitation Letter for Campus Hiring for the Final Year Batch Passing out in 2018.pdf</a></li>
                        <li><a href={Doc3} target="_blank" rel="noreferrer">Invitation Letter for Campus Hiring for the batch passing out in 2017.pdf</a></li>
                    </ul>
                </p>
            </div>
          </div>
        </Base>
  )
}

export default TnpCell