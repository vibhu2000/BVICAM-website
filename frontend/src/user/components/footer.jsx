import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/social-media-icons/facebook.svg";
import youtube from "../../assets/social-media-icons/youtube.svg";
import google from "../../assets/social-media-icons/google.svg";
import instagram from "../../assets/social-media-icons/instagram.svg";
import twitter from "../../assets/social-media-icons/twitter.svg";
import { useState } from "react";
import { error } from "jquery";

export default function Footer() {
  const [submit , setSubmit] = useState(false);
  const [email , setEmail] = useState('');
  const [error,setError] = useState(false);
  const onSubmit=() => {
    if(!email){
      setError(true);
    }else{
      setSubmit(true)
      setEmail('');
    }
    
  }
  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: submit ? "" : "none" }}
    >
      <h6 className="my-auto">Thank you! Your submission has been received!</h6>
    </div>
  );
  
  const handleChange = (name) => (event) => {
    const value = event.target.value;
    
    setEmail(value);
  };
  const errorMessage = () => (
    <span
      className="text-danger"
      style={{ display: error ? "" : "none" }}
    >
      This field is required
    </span>
  );
  return (
    <div style={{backgroundColor: "#03213A"}}>
    <div className="row main-container pt-5 px-sm-4">
      <div className="col-12 col-lg-3 border-right">
        <h6 className="fw-semibold py-3 text-wrap text-white">
          Subcribe for latest updates!
        </h6>
        {successMessage()}
        <div className="d-flex flex-column align-items-start">
          <input
            type="email"
            className="input-field w-100"
            maxlength="256"
            name="subscribe-email"           
            placeholder="Email"        
            onChange={handleChange('email')}
            value={email}

          ></input>
          {errorMessage()}
          <button className="subscribe-button w-button" onClick={onSubmit}>subscribe</button>
        </div>
      </div>
      <div className="row col-12 col-lg-9  p-3">
        <div className="col-12 col-md-4">
          <h6 className="fw-semibold py-2 text-white">Quick Links</h6>
          <div className="d-flex flex-column">
            <Link to="/about-us" className="links">
              About BVP
            </Link>
            <Link to="/about-bvicam" className="links">
              About BVICAM
            </Link>
            <Link to="#" className="links">
              Director
            </Link>
            <Link to="/faculty" className="links">
              Faculty
            </Link>
            <Link to="#" className="links">
              Admission
            </Link>
            <Link to="#" className="links">
              Fee Structure
            </Link>
            <Link to="/placement-history" className="links">
              Placements
            </Link>
            <Link to="#" className="links">
              Course Materials
            </Link>
            <Link to="#" className="links">
              SIS Portal
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <h6 className="fw-semibold py-2 text-wrap text-white">Other Links</h6>
          <div className="d-flex flex-column">
          <Link to="/contact-us" className="links">
              Contact Us
            </Link>
            <Link to="#" className="links">
              SGRC
            </Link>
            <Link to="#" className="links">
              Grievances Redressal
            </Link>
            <Link to="#" className="links">
              NIRF Data
            </Link>
            <Link to="#" className="links">
              Mandatory Disclosures
            </Link>
            <Link to="/about-us" className="links">
              BVP              
            </Link>
            <Link to="#" className="links">
              GGSIPU
            </Link>
            <Link to="#" className="links">
              AICTE(EOA)
            </Link>
            <Link to="#" className="links">
              UGC
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-4">
          <h6 className="fw-semibold py-2 text-wrap text-white">Our University</h6>
          <div className="d-flex flex-column">
            <span to="#" className="links text-wrap">
            Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM)
            </span>
            <span to="#" className="links text-wrap">
            A-4, Paschim Vihar, Opp. Paschim Vihar (East) Metro Station, Rohtak Road, New Delhi - 110063
            </span>
            <Link
              to="#"
              className="links d-flex flex-row align-items-center text-center justify-content center "
            >
              <span class="material-symbols-outlined me-2 text-white">headphones</span>
              <span className="text-center mt-1"> +91 9212022066</span>
            </Link>
            <Link
              to="#"
              className="links d-flex flex-row align-items-center text-center justify-content center "
            >
              <span class="material-symbols-outlined me-2 text-white">mail</span>
              <span className="text-center mt-1"> mca@bvicam.ac.in</span>
            </Link>
            <div className="d-flex flex-row flex-wrap">
              <Link to="#">
                <img src={google} alt="" className="social-media" />
              </Link>
              <Link to="#">
                <img src={youtube} alt="" className="social-media" />
              </Link>
              <Link to="#">
                <img src={facebook} alt="" className="social-media" />
              </Link>
              <Link to="#">
                <img src={twitter} alt="" className="social-media" />
              </Link>
              <Link to="#">
                <img src={instagram} alt="" className="social-media" />
              </Link>
            </div>
           
          </div>
        </div>
      </div>
      <div className="row text-center mt-3 mb-3 text-white">
        <h6>Copyright © 2024 BVICAM  MCA | BA(JMC)
</h6>
      </div>
    </div>
    </div>
  );
}
