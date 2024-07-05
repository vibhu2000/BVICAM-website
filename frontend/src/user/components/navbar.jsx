import React, { useEffect, useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Navlink, NavlinkDropdown } from "./navlinks";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LoginIcon from '@mui/icons-material/Login';

export default function Navbar({ initialScrollPosition = 50 }) {
  const [scrollPosition, setPosition] = useState(0);
  const path = useLocation().pathname;
  function updatePosition() {
    setPosition(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", updatePosition);

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const offcanvasElement = useRef();

  const openCanvas = () => {
    offcanvasElement.current.classList.toggle("open");
  };

  return (
    <>
    <div style={{position:"absolute", textAlign: "right",marginTop:"-40px",marginLeft:"12px", cursor: "pointer",padding:"10px",paddingLeft:"15px",backgroundColor:"#053861"}}>
      <a href="https://api.whatsapp.com/send/?phone=%2B918130176573&text&type=phone_number&app_absent=0" title="Connect WhatsApp" target="_blank">
        <WhatsAppIcon style={{marginRight: "15px", color:"lightgreen"}}/>
      </a>
      <a title="Connect Twitter" target="_blank">
        <TwitterIcon title="Connect WhatsApp" style={{marginRight: "15px", color:"lightblue"}}/>
      </a>
      <a title="Connect Instagram" target="_blank">
        <InstagramIcon style={{marginRight: "15px", color:"pink"}}/>
      </a>
      <a href="https://www.facebook.com/profile.php?id=100075781826342" title="Connect FaceBook" target="_blank">
        <FacebookIcon style={{marginRight: "15px", color:"blue"}}/>
      </a>
      <Link to="/admin" title="Login" target="_blank" style={{color: "white"}}>
        <LoginIcon style={{marginRight: "15px"}} />
      </Link>
    </div>
    {/* <nav
      className={`navbar navbar-expand-lg ${
        scrollPosition >= initialScrollPosition
          ? " navbar-light shadow-sm scrolled"
          : "navbar-dark"
      }`}
      aria-label="Main navigation"
    > */}
    <nav className="navbar navbar-expand-lg navbar-light shadow-sm" style={{backgroundColor: "#053861"}}>
      <div className="container-fluid main-container mt-3 mb-3" style={{ marginLeft: "50px"}}>
        {/* <Link
          className="navbar-brand d-flex flex-row align-items-center p-0 m-sm-0"
          to="/"
        >
          {/* <img src={logo} alt="" className="nav-logo" style={{ marginLeft: "-40px",width: "180px", height: "80px"}}/> */}
          {/* <h5 className="logo-title _600-bold text-wrap text-start  px-2 lh-1 d-sm-inline d-none "> */}
             {/* <br />BVICAM <br /> Innovation and Incubation Center{" "} */}
          {/* </h5> 
        </Link> */}
        <button
          className="navbar-toggler p-0 border-0 m-2"
          type="button"
          id="navbarSideCollapse"
          aria-label="Toggle navigation"
          onClick={openCanvas}
        >
          <span
            className="material-symbols-outlined toggler-icon m-1"
            style={{ fontSize: "32px" }}
          >
            menu
          </span>
        </button>

        <div
          className="navbar-collapse offcanvas-collapse"
          ref={offcanvasElement}
          id="navbarsExampleDefault"
        >
          <div className="navbar-nav ms-lg-auto me-lg-0 me-auto mb-2 mb-lg-0">
          {/* <NavlinkDropdown
              dropdowns={[
                { name: "All Notices", url: "/notices" },
                { name: "Admission", url: "/admission" },
                { name: "Examinations", url: "/examinations" },
                { name: "Placements", url: "/placements" },
                { name: "Student's Welfare", url: "/students-welfare" },
                { name: "Time Table", url: "/timetable" },
                { name: "Attendance", url: "/attendance" },
                { name: "Activities", url: "/activities" },
                { name: "Achievements", url: "/achievements" },
                { name: "INDIACom", url: "/indiacom" },
                { name: "BJIT", url: "/bjit" },
                { name: "NSC", url: "/nsc" },
                
              ]}
              title="Notice Board"
              activeId={path}
            ></NavlinkDropdown> */}
            
            <Navlink title="Home" url="/" activeId={path}></Navlink>
            
            <NavlinkDropdown
              dropdowns={[
                { name: "About Bharati Vidyapeeth, Pune", url: "/about-us" },
                { name: "About BVICAM", url: "/about-bvicam" },
                { name: "Vission, Mission & Quality Policy", url: "/vision" },
                { name: "Founder's Message", url: "/founder-message" },
                { name: "Chancellor's Message", url: "/chancellor-message" },
                { name: "Secretary's Message", url: "/secretary-message" },
                { name: "Director's Message", url: "/director-message" },
                { name: "Governing Body", url: "/governing-boby" },
                { name: "Faculty Council", url: "/faculty-council" },
                { name: "Administrative Structure", url: "/administrative" },
                { name: "Students' Council", url: "/student-council" },
                { name: "Support Staff", url: "/support-staff" },
                { name: "Photo Gallery", url: "/gallery" },
                { name: "Contact Us", url: "/contact-us" },
              ]}
              title="About Us"
              activeId={path}
            ></NavlinkDropdown>
            
            <NavlinkDropdown
              dropdowns={[
                { name: "Director", url: "/director" },
                { name: "Faculty", url: "/faculty" },
                { name: "Department", url: "/department" },
                { name: "Admission", url: "/admission" },
                { name: "Fee Structure", url: "/fee-structure" },
                { name: "MCA Programme", url: "/mca-programme" },
                { name: "MCA Syllabus", url: "/mca-syllabus" },
                { name: "BA (JMC) Syllabus", url: "/bajmc-syllabus" },
                { name: "Course Material (MCA)", url: "/mca-course-material" },
                { name: "Couse Material (BA-JMC)", url: "/bjmc-course-material" },
                { name: "Teaching Pedagogy", url: "/teaching-pedagogy" },
                { name: "Student Teacher Wardship", url: "/student-teacher-wardship" },
                { name: "Institute Brochure", url: "/institute-brochure" },
                { name: "BVICAM LMS", url: "/lms" },
                { name: "Google Classroom", url: "/google-classroom" },
              ]}
              title="Academics"
              activeId={path}
            ></NavlinkDropdown>

            <NavlinkDropdown
              dropdowns={[
                { name: "Campus", url: "/campus" },
                { name: "Laboratries", url: "/laboratories" },
                { name: "Library", url: "/library" },
                { name: "Auditorium", url: "/auditorium" },
                { name: "Hostel", url: "/hostel" },
                { name: "Virtual Tour of Campus", url: "/virtual-tour" },
                { name: "Other Facilities", url: "/other-facilities" },
                { name: "Amphitheatre", url: "/amphitheatre" },
                { name: "Professional Associations", url: "/professional-associations" },
                { name: "Computer Resource Center", url: "/computer-resource-center" },
              ]}
              title="Infrastructure"
              activeId={path}
            ></NavlinkDropdown>

            <NavlinkDropdown
              dropdowns={[
                { name: "CRIIS", url: "/criis" },
                { name: "FDP", url: "/fdp" },
                { name: "MDP", url: "/mdp" },
                { name: "Expert Lectures/Webinars", url: "/webinars" },
                { name: "INDIACom", url: "/indiacom" },
                { name: "NSC", url: "/nsc" },
                { name: "BVICAM CSR", url: "/bvicam-csr" },
                { name: "Club Activities", url: "/club-activities" },
                { name: "MCA Students' Activities", url: "/mca-students-activities" },
                { name: "Media Lecture Series", url: "/mediaseries" },
              ]}
              title="Activities"
              activeId={path}
            ></NavlinkDropdown>
            
            <NavlinkDropdown
              dropdowns={[
                { name: "Director's Message", url: "/career-director-message" },
                { name: "Training & Placement Cell", url: "/tnp-cell" },
                { name: "Placement History", url: "/placement-history" },
                { name: "Recruiting Companies", url: "/recruiting-companies" },
                { name: "Placement Trends", url: "/placement-trends" },
              ]}
              title="Placements"
              activeId={path}
            ></NavlinkDropdown>
            
            <NavlinkDropdown
              dropdowns={[
                { name: "BIJIT", url: "/bjit" },
                { name: "INDIACom Proceeding", url: "/indiacom" },
                { name: "IJRMS", url: "/ijrms" },
                { name: "Faculty Publication", url: "/faculty-publication" },
                { name: "E-Magazine", url: "/e-magazine" },
                { name: "E-News Letter", url: "/e-news-letter" },
                { name: "NSC", url: "/nsc" },
              ]}
              title="Publications"
              activeId={path}
            ></NavlinkDropdown>
            
            <NavlinkDropdown
              dropdowns={[
                { name: "List", url: "/list" },
                { name: "Alumni Council", url: "/alumni-council" },
                { name: "Alumni Meets", url: "/alumni-meets" },
                { name: "Alumni Activities", url: "/alumni-activities" },
                { name: "BVP Golden Jubliee alumni meet", url: "/golden-jubliee-meet" },
              ]}
              title="Alumni"
              activeId={path}
            ></NavlinkDropdown>
            
            <Navlink title="Press Release" style={{color: "black"}} url="/press-release" activeId={path}></Navlink>
            
            <Navlink title="Blog" url="/blog" activeId={path}></Navlink>
               {/* <Navlink title="Startups" url="/startups" activeId={path}></Navlink>
               <Navlink title="Facilities" url="/facilities" activeId={path}></Navlink>
               <Navlink title="Events" url="/events" activeId={path}></Navlink> 
               <NavlinkDropdown
              dropdowns={[
                { name: "Incubation", url: "/incubation" },
                { name: "PreIncubation", url: "/pre-incubation" },
                { name: "Seed Investment", url: "/seed-investment" },
                { name: "Alumini Fellowship", url: "/alumini-fellowship" },
              ]}
              title="Apply"
              activeId={path}
            ></NavlinkDropdown>
           <NavlinkDropdown
              dropdowns={[
                { name: "Bulletin", url: "/bulletin" },
                { name: "Articles", url: "/articles" },
                { name: "Testimonials", url: "/testimonials" },
              ]}
              title="News"
              activeId={path}
            ></NavlinkDropdown>
              <NavlinkDropdown
              dropdowns={[
                { name: "Mentors", url: "/mentors" },
                { name: "Partners", url: "/partners" },
                { name: "Investors", url: "/investors" },
                { name: "IIC", url: "/institution-innovation-council" },                
              ]}
              title="Community"
              activeId={path}
            ></NavlinkDropdown>
            */}
          </div>
        </div>
      </div>
    </nav>
    </>
    // <nav
    //   className={`navbar navbar-expand-lg  fixed-top  ${
    //     scrollPosition >= initialScrollPosition ? " scrolled shadow-sm" : ""
    //   }`}
    // >
    //   <div className="container-fluid  main-container">
    //     <Link
    //       className="navbar-brand d-flex flex-row align-items-center p-0 m-sm-0"
    //       to="/"
    //     >
    //       <img src={logo} alt="" className="nav-logo" />
    //       <h5 className="_600-bold text-wrap text-start  px-2 lh-1">
    //         JNTUA <br /> Innovation and Incubation Center{" "}
    //       </h5>
    //     </Link>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="offcanvas"
    //       data-bs-target="#offcanvasRight"
    //       aria-controls="offcanvasRight"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="material-symbols-outlined toggle">menu</span>
    //     </button>
    //     {/* the navbar before toggle  */}
    //     <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas active" aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas" to="#">
    //             Team
    //           </Link>
    //         </li>

    //         <li className="nav-item dropdown">
    //           <Link
    //             className="nav-link nav-link-offcanvas dropdown-toggle"
    //             to="#"
    //             id="navbarDropdown"
    //             role="button"
    //             aria-expanded="false"
    //           >
    //             Team
    //           </Link>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Another action
    //               </Link>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Something else here
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link nav-link-offcanvas disabled"
    //             to="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     {/* the navbar after toggle */}
    //     <div className="offcanvas offcanvas-end" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas active" aria-current="page" to="/">
    //             Home
    //           </Link>
    //         </li>
    //         <li className="nav-item">
    //           <Link className="nav-link nav-link-offcanvas" to="#">
    //             Team
    //           </Link>
    //         </li>

    //         <li className="nav-item dropdown">
    //           <Link
    //             className="nav-link nav-link-offcanvas dropdown-toggle"
    //             to="#"
    //             id="navbarDropdown"
    //             role="button"
    //             aria-expanded="false"
    //           >
    //             Team
    //           </Link>
    //           <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Action
    //               </Link>
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Another action
    //               </Link>
    //             </li>
    //             <li>
    //               <hr className="dropdown-divider" />
    //             </li>
    //             <li>
    //               <Link className="dropdown-item" to="#">
    //                 Something else here
    //               </Link>
    //             </li>
    //           </ul>
    //         </li>
    //         <li className="nav-item">
    //           <Link
    //             className="nav-link nav-link-offcanvas disabled"
    //             to="#"
    //             tabindex="-1"
    //             aria-disabled="true"
    //           >
    //             Disabled
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}
