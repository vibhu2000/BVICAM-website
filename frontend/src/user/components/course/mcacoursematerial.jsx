import React from 'react';
import { getCourses } from "../../userApiCalls";
import { useEffect } from "react";
import { useState } from "react";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import Base from "../base";
import { Link } from "react-router-dom";

export default function McaCourseMaterial() {
  const [course, setCourses] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  let imageTypes = [
    "Bridge Course",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4"
  ];
  const [imageType, setImageType] = useState("");

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setImageType(value);
  };

  const preload = () => {
    getCourses("MCA").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setCourses(data);
      }
    });
  };

  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  useEffect(() => {
    preload();
  }, []);

  if (loading) {
    return (
      <Base title="Subjects Semester Wise">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Subjects Semester Wise">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (course && course.length !== 0) {
    return (
      <Base title="Subjects Semester Wise">
        <div className="row main-container">
          <div className="col-12 col-md-4 my-5">
            <p className="fs-6 lh-base"><b>SELECT SEMESTER: </b></p>
            <select
                onChange={handleChange("imageType")}
                className="form-control"
                value={imageType}
                required
              >
                <option value={""}>Select</option>
                {imageTypes &&
                  imageTypes.map((type, index) => (
                    <option key={index} value={type}>
                      {type}
                    </option>
                  ))}
              </select>
          </div>

          <div className=" row main-container">
          <p className="fs-6 lh-base text-center"><b>{imageType}</b></p>
          <table className='table table-bordered mb-5'>
                    <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th></th>
                            <th>Subject Title</th>
                            <th>Programme</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:"15px"}}> 
                    {course.filter((sem) =>
                    imageType === ""
                    ? true
                    : sem.semester === imageType
                    )
                    .map((cour, index) => {
                    return (
                        <tr>
                            <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                            <td><Link to={`/courses/${cour._id}`}>{cour.subName}</Link></td>
                            <td style={{textAlign: "center"}}>{cour.courseType}</td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
          </div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base title="Subjects Semester Wise">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}