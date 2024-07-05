import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTeacher, getAllTeachers} from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";

export default function Teacher() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getAllTeachers().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setUser(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const deleteThisMember = (userId) => {
    console.log(userId);
    deleteTeacher(userId).then((data) => {
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
              Delete User
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {user[index].teacherName}  assigned teacher ?</h6>
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
                deleteThisMember(user[index]._id);
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
        title="All Assigned Teachers"
        subtitle="Teacher"
        name="Assign Teacher"
        url="assignTeacher"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
      title="All Assigned Teachers"
      subtitle="Teacher"
      name="Assign Teacher"
      url="assignTeacher"
      >
        <Error></Error>
      </Base1>
    );
  } else if (user && user.length !== 0) {
    return (
      <Base1
      title="All Assigned Teachers"
      subtitle="Teacher"
      name="Assign Teacher"
      url="assignTeacher"
      >
        <div className="row m-5">
            <div className="col-12 col-xl-8">
            {user.map((star, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col ms-n2">
                          <h4 className="mb-1">
                            <h6 className="h5">{star.subjectName}</h6>
                          </h4>

                          <p className="card-text medium text-muted mb-1">
                            <span className="text-success">●</span>{" Assigned to: "}
                            <b style={{color:"black"}}>{star.teacherName}</b>
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row">
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
      title="All Assigned Teachers"
      subtitle="Teacher"
      name="Assign Teacher"
      url="assignTeacher"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
