import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteCourse, getAllCourses } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";

export default function Resources() {
  const [course, setCourse] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("jwt"));
  
  const preload = () => {
    getAllCourses().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setCourse(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const cour=course.filter((adm) => adm.teacher === currentUser.user.name);
  
  const deleteThisMember = (courseId) => {
    console.log(courseId);
    deleteCourse(courseId).then((data) => {
      console.log(data)
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };

  const deleteModel = (index) => (
    <div
      className="modal fade"
      id={`deleteModal${index}`}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Delete Subject
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {cour[index].subName}  ?</h6>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={() => {
                deleteThisMember(cour[index]._id);
              }}
            >
              Yes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  if (loading) {
    return (
      <Base1
      title="All Subject Materials"
      subtitle="Subject Material"
      name="Add Subject Material"
      url="addResources"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
      title="All Subject Materials"
      subtitle="Subject Material"
      name="Add Subject Material"
      url="addResources"
      >
        <Error></Error>
      </Base1>
    );
  } else if (cour && cour.length !== 0) {
    return (
      <Base1
      title="All Subject Materials"
      subtitle="Subject Material"
      name="Add Subject Material"
      url="addResources"
      >
        <div className="row m-5">
            <div className="col-12 col-xl-8">
            {cour.map((star, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col ms-n2">
                          <h4 className="mb-1">
                            <h6 className="h5">{star.subName}</h6>
                          </h4>

                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {star.courseType}
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row">
                        <Link
                            to={`/admin/updateCourse/${star._id}`}
                            className="avatar-img rounded-circle bg-primary mx-2"
                            
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              edit
                            </span>
                          </Link>
                          <Link
                            to="#"
                            className="avatar-img rounded-circle bg-danger mx-2"
                            data-bs-toggle="modal"
                            data-bs-target= {`#deleteModal${index}`}
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              delete
                            </span>
                          </Link>
                        </div>
                        {deleteModel(index)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        
      </Base1>
    );
  } else {
    return (
      <Base1
      title="All Subject Materials"
      subtitle="Subject Material"
      name="Add Subject Material"
      url="addResources"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
