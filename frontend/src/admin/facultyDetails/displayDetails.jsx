import React from "react";
import { Link } from "react-router-dom";

export default function DisplayDetails({ memberId="" , member=[]}) {

  return (
    <div className="row">
      <div className="mb-3 mt-2">
        <h4 className="mt-2 mb-3 text-decoration-underline"><b>Personal Details</b></h4>
      
        <img className="mx-auto d-block" src={member.photo}/>

        <div className="mt-3 mb-4">
          <p className="fs-5 lh-base"><b>Name: </b>{member.name}</p>
        </div>
       
        <div className="mt-3 mb-4">
          <p className="fs-5 lh-base"><b>Designation: </b>{member.designation}</p>
        </div>

        <div className="mt-3 mb-4">
          <p className="fs-5 lh-base"><b>Qualification: </b>{member.qualification}</p>
        </div>

        <div className="mt-3 mb-4">
          <p className="fs-5 lh-base"><b>E-Mail: </b>{member.email}</p>
        </div>

        <div className="mt-3 mb-4">
          <p className="fs-6 lh-base"><b className="fs-5">Area Of Expertise: </b><br/>{member.areaofexpertise}</p>
        </div>

        <div className="mt-3 mb-4">
          <p className="fs-6 lh-base" style={{whiteSpace: "pre-wrap"}}><b className="fs-5">Working Experience: </b><br/>{member.experience}</p>
        </div>

        <div className="mt-3 mb-4">
          <p className="fs-6 lh-base" style={{whiteSpace: "pre-wrap"}}><b className="fs-5">Conference/Seminars: </b><br/>{member.seminar}</p>
        </div>

        <div className="mt-3 mb-4">
          <p className="fs-6 lh-base" style={{whiteSpace: "pre-wrap"}}><b className="fs-5">Awards/Achievements: </b><br/>{member.achievements}</p>
        </div>

        <hr className="mt-5 mb-3" />

        <Link to={`/admin/updateFacultyMember/${member._id}`}><button className="btn w-100 btn-primary">Update Details</button></Link>
      </div>
    </div>
  );
}
