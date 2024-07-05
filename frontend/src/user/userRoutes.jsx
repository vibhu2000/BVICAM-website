import React from 'react'
import {

Routes,
Route,

} from "react-router-dom";


import ComingSoon from '../core/comingSoon';

// Home
import Home from './home';

// Notices
import Notices from './components/notice/startups';
import StartupDetails from './components/notice/startupDetails';
import Admission from './components/NoticeBoard/admission';
import Examinations from './components/NoticeBoard/examinations';
import Placements from './components/NoticeBoard/placements';
import StudentsWelfare from './components/NoticeBoard/StudentsWelfare';
import TimeTable from './components/NoticeBoard/timeTable';
import Attendance from './components/NoticeBoard/attendance';
import Activities from './components/NoticeBoard/activities';
import Achievements from './components/NoticeBoard/achievements';

// AboutUs
import Aboutus from './components/staticPages/AboutUs/aboutus';
import Aboutbvicam from './components/staticPages/AboutUs/aboutbvicam';
import Vision from './components/staticPages/AboutUs/vision';
import FounderMsg from './components/staticPages/AboutUs/foundermsg';
import ChancellorMsg from './components/staticPages/AboutUs/chancellormsg';
import SecretaryMsg from './components/staticPages/AboutUs/secretarymsg';
import DirectorMsg from './components/staticPages/AboutUs/directormsg';
import GoverningBody from './components/staticPages/AboutUs/governingbody';
import FacultyCouncil from './components/staticPages/AboutUs/facultycouncil';
import StudentCouncil from './components/staticPages/AboutUs/studentcouncil';
import Support from './components/faculty/support';
import Gallery from './components/images/gallery';
import ContactUs from './components/contactus/contactUs';

// Academics
import Director from './components/staticPages/Academics/director';
import Faculty from './components/faculty/team';
import TeamDetails from './components/faculty/teamDetails';
import Department from './components/staticPages/Academics/department';
import McaProgramme from './components/staticPages/Academics/mcaprogramme';
import McaSyllabus from './components/staticPages/Academics/mcasyllabus';
import BjmcSyllabus from './components/staticPages/Academics/bjmcsyllabus';
import McaCourseMaterial from './components/course/mcacoursematerial';
import BjmcCourseMaterial from './components/course/bjmccoursematerial';
import CourseDetails from './components/course/coursedetails';
import StudentWardshipProg from './components/staticPages/Academics/studentwardshipprog';

// Infrastructure
import Campus from './components/staticPages/Infrastructure/campus';
import Laboratories from './components/staticPages/Infrastructure/laboratories';
import Library from './components/staticPages/Infrastructure/library';
import Auditorium from './components/staticPages/Infrastructure/auditorium';
import Hostel from './components/staticPages/Infrastructure/hostel';
import VirtualTour from './components/staticPages/Infrastructure/virtualtour';
import OtherFacilities from './components/staticPages/Infrastructure/otherfacilities';
import Amphitheatre from './components/staticPages/Infrastructure/amphitheatre';
import ProfessionalAssociations from './components/staticPages/Infrastructure/professionalassociations';
import Crc from './components/staticPages/Infrastructure/crc';

// Activities
import Criis from './components/staticPages/Activities/criis';
import Fdp from './components/staticPages/Activities/fdp';
import Mdp from './components/staticPages/Activities/mdp';
import ClubActivities from './components/staticPages/Activities/clubactivities';

//Placements
import CareerDirectorMsg from './components/staticPages/Placements/careerdirectormsg';
import TnpCell from './components/staticPages/Placements/tnpcell';
import PlacementHistory from './components/staticPages/Placements/placementhistory';
import RecruitingCompanies from './components/staticPages/Placements/recruitingcompanies';

// Alumni
import AlumniCouncil from './components/staticPages/Alumni/alumnicouncil';
import AlumniMeets from './components/staticPages/Alumni/alumnimeets';
import AlumniActivities from './components/staticPages/Alumni/alumniactivities';


// Others
import AluminiFellowship from './components/Others/aluminFellowship';
import Articles from './components/Others/articles';
import Bulletin from './components/Others/bulletin';
import Events from './components/Others/events';
import EventDetails from './components/Others/event-details';
import Facilities from './components/Others/facilities';
import FacilitiesDetails from './components/Others/facilitiesDetails';
import IIC from './components/Others/iic';
import Incubation from './components/Others/incubation';
import Investors from './components/Others/investors';
import Mentors from './components/Others/mentors';
import Partners from './components/Others/partners';
import PreIncubation from './components/Others/preIncubation';
import SeedInvestment from './components/Others/seedInvestment';
import Testimonials from './components/Others/testimonials';
import Videos from './components/Others/videos';


export default function UserRoutes() {
  return (
    
   <Routes>
    <Route path='*' element={<ComingSoon></ComingSoon>}></Route>
    
    {/* Home */}
    <Route path="/" exact element={<Home />}></Route>
    
    {/* NoticeBoard */}
    <Route path='/notices' exact  element={<Notices/>}></Route>
    <Route path="/notices/:startupId" exact element={<StartupDetails></StartupDetails>}></Route>
  
    <Route path='/admission' exact element={<Admission/>}></Route>
    <Route path='/examinations' exact element={<Examinations/>}></Route>
    <Route path='/placements' exact element={<Placements/>}></Route>
    <Route path='/students-welfare' exact element={<StudentsWelfare/>}></Route>
    <Route path='/timetable' exact element={<TimeTable/>}></Route>
    <Route path='/attendance' exact element={<Attendance/>}></Route>
    <Route path='/activities' exact element={<Activities/>}></Route>
    <Route path='/achievements' exact element={<Achievements/>}></Route>

    {/* AboutUs */}
    <Route path='/about-us' exact element={<Aboutus/>}></Route>
    <Route path='/about-bvicam' exact element={<Aboutbvicam/>}></Route>
    <Route path='/vision' exact element={<Vision/>}></Route>
    <Route path='/founder-message' exact element={<FounderMsg/>}></Route>
    <Route path='/chancellor-message' exact element={<ChancellorMsg/>}></Route>
    <Route path='/secretary-message' exact element={<SecretaryMsg/>}></Route>
    <Route path='/director-message' exact element={<DirectorMsg/>}></Route>
    <Route path='/governing-boby' exact element={<GoverningBody/>}></Route>
    <Route path='/faculty-council' exact element={<FacultyCouncil/>}></Route>
    <Route path='/student-council' exact element={<StudentCouncil/>}></Route>
    <Route path='/support-staff' exact element={<Support/>}></Route>
    <Route path="/gallery" exact element={<Gallery/>}></Route>
    <Route path="/contact-us" exact element={<ContactUs/>}></Route>

    {/* Academics */}
    <Route path='/director' exact element={<Director/>}></Route>
    
    <Route path="/faculty" exact element={<Faculty/>}></Route>
    <Route path="/team/:startupId" exact element={<TeamDetails></TeamDetails>}></Route>

    <Route path='/department' exact element={<Department/>}></Route>
    <Route path='/mca-programme' exact element={<McaProgramme/>}></Route>
    <Route path='/mca-syllabus' exact element={<McaSyllabus/>}></Route>
    <Route path='/bajmc-syllabus' exact element={<BjmcSyllabus/>}></Route>

    <Route path="/mca-course-material" exact element={<McaCourseMaterial></McaCourseMaterial>}></Route>
    <Route path="/bjmc-course-material" exact element={<BjmcCourseMaterial></BjmcCourseMaterial>}></Route>
    <Route path="/courses/:courseId" exact element={<CourseDetails></CourseDetails>}></Route>

    <Route path='/student-teacher-wardship' exact element={<StudentWardshipProg/>}></Route>

    {/* Infrastructure */}
    <Route path='/campus' exact element={<Campus/>}></Route>
    <Route path='/laboratories' exact element={<Laboratories/>}></Route>
    <Route path='/library' exact element={<Library/>}></Route>
    <Route path='/auditorium' exact element={<Auditorium/>}></Route>
    <Route path='/hostel' exact element={<Hostel/>}></Route>
    <Route path='/virtual-tour' exact element={<VirtualTour/>}></Route>
    <Route path='/other-facilities' exact element={<OtherFacilities/>}></Route>
    <Route path='/amphitheatre' exact element={<Amphitheatre/>}></Route>
    <Route path='/professional-associations' exact element={<ProfessionalAssociations/>}></Route>
    <Route path='/computer-resource-center' exact element={<Crc/>}></Route>

    {/* Activities */}
    <Route path='/criis' exact element={<Criis/>}></Route>
    <Route path='/fdp' exact element={<Fdp/>}></Route>
    <Route path='/mdp' exact element={<Mdp/>}></Route>
    <Route path='/club-activities' exact element={<ClubActivities/>}></Route>

    {/* Placements */}
    <Route path='/career-director-message' exact element={<CareerDirectorMsg/>}></Route>
    <Route path='/tnp-cell' exact element={<TnpCell/>}></Route>
    <Route path='/placement-history' exact element={<PlacementHistory/>}></Route>
    <Route path='/recruiting-companies' exact element={<RecruitingCompanies/>}></Route>

    {/* Alumni */}
    <Route path='/alumni-council' exact element={<AlumniCouncil/>}></Route>
    <Route path='/alumni-meets' exact element={<AlumniMeets/>}></Route>
    <Route path='/alumni-activities' exact element={<AlumniActivities/>}></Route>
    
    
    {/* Others */}
    <Route path="/videos" exact element={<Videos/>}></Route>
    <Route path="/facilities" exact element={<Facilities></Facilities>}></Route>
    <Route path="/facilities-details" exact element={<FacilitiesDetails></FacilitiesDetails>}></Route>
    <Route path="/partners" exact element={<Partners></Partners>}></Route>
    <Route path="/mentors" exact element={<Mentors></Mentors>}></Route>
    <Route path="/investors" exact element={<Investors></Investors>}></Route>
    <Route path="/bulletin" exact element={<Bulletin></Bulletin>}></Route>
    <Route path="/articles" exact element={<Articles></Articles>}></Route>
    <Route path="/testimonials" exact element={<Testimonials></Testimonials>}></Route>
    <Route path="/institution-innovation-council" exact element={<IIC></IIC>}></Route>
    <Route path="/seed-investment" exact element={<SeedInvestment></SeedInvestment>}></Route>
    <Route path="/alumini-fellowship" exact element={<AluminiFellowship></AluminiFellowship>}></Route>
    <Route path="/incubation" exact element={<Incubation></Incubation>}></Route>
    <Route path="/pre-incubation" exact element={<PreIncubation></PreIncubation>}></Route>
    <Route path="/events" exact element={<Events></Events>}></Route>
    <Route path="/events/:eventId" exact element={<EventDetails></EventDetails>}></Route>
        

   </Routes>
  )
}
