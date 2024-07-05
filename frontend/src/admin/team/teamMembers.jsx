import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { deleteTeamMember, getAllTeam, getTeam } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";
export default function TeamMembers() {

  let imageTypes = [
    "All",
    "Faculty",
    "Support"
  ];
  const [team, setTeam] = useState([]);
  const [imageType, setImageType] = useState("");
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setImageType(value);
  };

  const preload = () => {
    getAllTeam().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setTeam(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const filterteam = team.filter((img) =>
    imageType === "All" || imageType === ""
      ? true
      : img.imageType === imageType
  );

  const deleteThisMember = (memberId) => {
    console.log(memberId);
    deleteTeamMember(memberId).then((data) => {
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
              Delete Member
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {filterteam[index].name} faculty member?</h6>
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
                deleteThisMember(filterteam[index]._id);
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
        title="All Faculty Member"
        subtitle="Faculty Member"
        name="Add Faculty Member"
        url="addFaculty"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Faculty Member"
        subtitle="Faculty Member"
        name="Add Faculty Member"
        url="addFaculty"
      >
        <Error></Error>
      </Base1>
    );
  } else if (filterteam && filterteam.length !== 0) {
    return (
      <Base1
        title="All Faculty Member"
        subtitle="Faculty Member"
        name="Add Faculty Member"
        url="addFaculty"
      >
        <div className="row m-3">
        <div className="row">
            <div className="col-12 col-xl-8 my-3 mx-2 px-4 ">
              <label className="form-label">Faculty Type</label>
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
          </div>
            <div className="col-12 col-xl-8">
              {filterteam
              .map((member, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <img
                            src={member.photo}
                            alt="..."
                            className="avatar-img rounded-circle uploaded-img "
                          />
                        </div>
                        <div className="col ms-n2">
                          <div className="mb-1">
                            <h6 className="h5">{member.name}</h6>
                          </div>

                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {member.designation} | {member.imageType}
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row">
                          <Link
                            to={`/admin/updateFacultyMember/${member._id}`}
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
                            data-bs-target={`#deleteModal${index}`}
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
        title="All Faculty Member"
        subtitle="Faculty Member"
        name="Add Faculty Member"
        url="addFaculty"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
