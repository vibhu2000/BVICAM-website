import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteUser, getAllUsers } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";

export default function Users() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getAllUsers().then((data) => {
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

  const teacher=user.filter((adm) =>
    adm.isAdmin === false
  );

  const deleteThisMember = (memberId) => {
    console.log(memberId);
    deleteUser(memberId).then((data) => {
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
            <h6>Are sure you want to delete {teacher[index].name}  user?</h6>
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
                deleteThisMember(teacher[index]._id);
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
        title="All Users"
        subtitle="User"
        name="Add User"
        url="addUser"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
      title="All Users"
      subtitle="User"
      name="Add User"
      url="addUser"
      >
        <Error></Error>
      </Base1>
    );
  } else if (teacher && teacher.length !== 0) {
    return (
      <Base1
      title="All Users"
      subtitle="User"
      name="Add User"
      url="addUser"
      >
        <div className="row m-5">
            <div className="col-12 col-xl-8">
            {teacher
            .map((star, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col ms-n2">
                          <h4 className="mb-1">
                            <h6 className="h5">{star.name}</h6>
                          </h4>

                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {star.email}
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
        title="All Users"
        subtitle="User"
        name="Add User"
        url="addUser"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
