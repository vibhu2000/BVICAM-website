import React, { useEffect, useRef, useState } from "react";
import WebFont from "webfontloader";
import Navbar from "./components/navbar";
import { Link } from "react-router-dom";
import "../main-style.css";
import backgroundImg from "../assets/images/image.jpg";
import campus from "../assets/images/bvicam.jpg";
import Footer from "./components/footer";
import Event from "./components/images/event";
import { getImages } from "../user/userApiCalls";
import { getAllStartup } from "../admin/helper/adminApiCalls";
import logo from "../assets/images/logo.png";
import logo1 from "../assets/images/golden_jubilee.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavlinkDropdown } from "./components/navlinks";


export default function Home() {
  const [startup, setStartups] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getImages("SliderImg").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setGallery(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 4000,
      cssEase: "linear"
    };

    const verticalSettings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      vertical: true,
      verticalSwiping: true,
      beforeChange: function(currentSlide, nextSlide) {
        // console.log("before change", currentSlide, nextSlide);
      },
      afterChange: function(currentSlide) {
        // console.log("after change", currentSlide);
      }
    };

  getAllStartup().then((data) => {
    if (data.error) {
      console.log("Something went wrong. Try Again");
    } else {
      setStartups(data);
    }
  });

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Hind:regular"],
      },
    });
  }, []);
  return (
    <div className="container-fluid p-0">
      <div
        className="row home-hero-section-page"
        style={{
          backgroundColor: "white",
          // backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url(${backgroundImg})`, 
          paddingTop: "40px"
        }}
      >
        
        <div className="col-12">
          <div className="px-1">
            <div className="main-container">
              <div className="home-hero-container">
                <div className="home-hero-heading">
                  <img src={logo} width="20%" height="120px" style={{display: "block", marginLeft: "-130px", marginTop: "60px"}}/>
                  <h2 className="display-5 text-center text-black fw-semibold" style={{marginTop: "-140px"}}>
                    Bharati Vidyapeeth's Institute of Computer Applications and Management
                  </h2>
                  <h1 className="display-4 text-black text-center fw-semibold">
                  BVICAM
                  </h1>
                  <img src={logo1} width="14%" height="120px" style={{display: "block", marginLeft: "1110px", marginTop: "-180px"}}/>

                  <div style={{color:"red", marginLeft: "1070px", marginTop: "25px", fontSize:"23px",fontWeight: "600"}}>
                      <NavlinkDropdown dropdowns={[
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
                      ></NavlinkDropdown>
                  </div>
                </div>
                <div className="text-center">
                  <p className="h5 fw-normal text-black m-3 text-center">MCA | BA(JMC)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Navbar></Navbar>
      </div>
      <div className="row main-container pt-md-5 pt-2 mt-5">
      <div className="col-12 col-md-8 px-sm-3 mt-4">
      
      <div className="slider-container">
      <Slider {...settings}>
            {gallery.map((gallery, index) => (
                <div key={index}>
                  <img src={gallery.photo} width={"750px"} height={"400px"}/>
                </div>
            ))}
      </Slider>
    </div>
  </div>
        <div className="col-12 col-md-4 ps-5 pe-2">
          <div className="col 12">
          <h2 className="h2 fw-semibold text-center mb-3">Notices</h2>
          <Slider {...verticalSettings}>
          {startup.map((startup,index) => (
                  <div key={index} >
                    <div style={{padding: "18px 5px",borderBlockEnd: "0.1rem solid darkslategray"}}>
                      {/* <div style={index%2==0 ? {backgroundColor: "blue"} : {backgroundColor: "lightblue"}}> */}
                      <h5 className="fw-medium">{startup.name}</h5>
                      <Link to={`/notices/${startup._id}`} style={{fontStyle: "italic", color: "#848991",fontWeight: "500"}}>Read More...</Link>
                      {/* </div> */}
                    </div>
                  </div>
              ))}
      </Slider>
          </div>
        </div>
      </div>
      <div className="row main-container pt-md-5 pt-2 mt-5">
        <div className="col-12 col-md-6 px-sm-5">
          <div className="co-12">
            <h2 className="h2 fw-semibold lh-long">About Us</h2>
          </div>
          <div className="col-12 home-about-paragraph">
            <p className="para-17">
            Bharati Vidyapeeth's Institute of Computers Applications and Management (BVICAM), New Delhi, 
            is one of the 187 institutions under Bharati Vidyapeeth, Pune. With a clear vision and mission 
            to serve the cause of higher education in India, the Institute started conducting Master of 
            Computer Applications (MCA) programme with effect from the Academic year 2002-2003. The Institute 
            is affiliated to Guru Gobind Singh Indraprastha University (GGSIPU), Sector 16C Dwarka, 
            New Delhi-78. The Institute is also approved by the All India Council for Technical Education (AICTE), 
            Ministry of HRD, Government. of India, New Delhi. BVICAM, New Delhi, is the first choice of 
            students and parents for MCA admission, in Northern India and many 
            of the Top Rankers from the CET of GGSIP University join BVICAM.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 px-sm-5">
          <figure className="home-about-image-wrapper">
            <img
              src={campus}
              loading="lazy"
              alt="BVICAM Campus"
              className="home-about-image"
              style={{ marginTop: "30px", width: "100%", height: "100%", objectFit: "contain" }}
            />
          </figure>
        </div>
      </div>
      <div className="row main-container pt-md-4 pt-2 mt-4" style={{width: "1100px"}}>
      </div>
      {/* <div className="row impact mt-5">
        <div className="col-12">
          <h2 className="h2 fw-semibold lh-long text-black text-center">
            Our Impact
          </h2>
        </div>
        <div className="col-12">
          <div className="row main-container">
            {ourImpact.map((value, index) => {
              return (
                <div className="col-12 col-sm-5 col-lg-4 mx-auto my-4">
                  <div className="px-2 impact-block">
                    <h5 className="fw-semibold text-center">{value.name}</h5>
                    <p
                      className="pt-4 fw-semibold"
                      style={{ fontFamily: "Hind", fontSize: "60px" }}
                    >
                      {value.count}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="row my-sm-5 py-sm-5 my-3 py-3 px-2 ">
        <div className="col-12 pb-5">
          <h2 className="h2 fw-semibold lh-long text-black text-center">
            Related Information
          </h2>
          <p className="para-18  text-center ">
            An overview of what IIC offers
          </p>
        </div>
        <div className="col-12">
          <div className="row main-container">
            {relatedInformation.map((value, index) => {
              return (
                <div className="col-12 col-lg-4 text-center">
                  <span
                    class="material-symbols-outlined primary-color"
                    style={{ fontSize: "48px" }}
                  >
                    {value.iconName}
                  </span>
                  <h5 className="fw-semibold m-3">{value.title}</h5>
                  <p className="para-17 px-2">{value.description} </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-top"></div>
      <OurPartners></OurPartners> */}


      <Event></Event>


      <div className="border-top mt-5"></div>
      <Footer></Footer>
    </div>
  );
}
