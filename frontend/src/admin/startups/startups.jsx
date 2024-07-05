import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteStartup, getAllStartup } from "../helper/adminApiCalls";
import { Loder, Empty, Error } from "../../core/utils";
import Base1 from "../base1";

export default function Startups() {
  let imageTypes = [
    "Admission",
    "Examinations", 
    "Placements", 
    "StudentsWelfare", 
    "TimeTable", 
    "Attendance", 
    "Activities", 
    "Achievements", 
    "Others"
  ];
  const [startup, setStartup] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);
  const [imageType, setImageType] = useState("");

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    setImageType(value);
  };
  const preload = () => {
    getAllStartup().then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setStartup(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const filternotice=startup
  .filter((img) =>
    imageType === "All" || imageType === ""
      ? true
      : img.imageType === imageType
  )

  const deleteThisMember = (startupId) => {
    console.log(startupId);
    deleteStartup(startupId).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        preload();
      }
    });
  };
  const openInNewTab = url => {
    window.open(url, '_blank', 'noopener,noreferrer');
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
              Delete Notice
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <h6>Are sure you want to delete {filternotice[index].name}  notice?</h6>
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
                deleteThisMember(filternotice[index]._id);
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
        title="All Notices"
        subtitle="Notice"
        name="Add Notice"
        url="addStartup"
      >
        <Loder></Loder>
      </Base1>
    );
  } else if (error) {
    return (
      <Base1
        title="All Notices"
        subtitle="Notice"
        name="Add Notice"
        url="addStartup"
      >
        <Error></Error>
      </Base1>
    );
  } else if (filternotice && filternotice.length !== 0) {
    return (
      <Base1
        title="All Notices"
        subtitle="Notice"
        name="Add Notice"
        url="addNotice"
      >
        <div className="row m-3">
        <div className="row">
            <div className="col-12 col-xl-8 my-3 mx-2 px-4 ">
              <label className="form-label">Notice Type</label>
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
            {filternotice
              .map((star, index) => {
                return (
                  <div className="card mb-3 shadow-sm">
                    <div className="card-body">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          { star.photo==="" ? (
                            <img
                            src="https://cdn-icons-png.freepik.com/512/7803/7803013.png"
                            alt="..."
                            className="avatar-img rounded-circle uploaded-img "
                            />
                          ):(
                            <img
                            src={star.photo}
                            alt="..."
                            className="avatar-img rounded-circle uploaded-img "
                          />
                          ) }
                        </div>
                        <div className="col ms-n2">
                          <h4 className="mb-1">
                            <h6 className="h5">{star.name}</h6>
                          </h4>

                          <p className="card-text small text-muted mb-1">
                            <span className="text-success">●</span>{" "}
                            {star.description?star.description.slice(0,100):""}... | {star.imageType}
                          </p>
                        </div>
                        <div className="col-auto d-flex flex-row">
                        <Link
                            to='#'
                            onClick={() => openInNewTab(star.url?(star.url):(star.file))}
                            className="avatar-img rounded-circle bg-warning  mx-2"
                            
                          >
                            <span
                              className="material-symbols-outlined p-2 "
                              style={{ color: "white" }}
                            >
                              link
                            </span>
                          </Link>
                          <Link
                            to={`/admin/updateNotice/${star._id}`}
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
        title="All Notices"
        subtitle="Notice"
        name="Add Notice"
        url="addNotice"
      >
        <Empty></Empty>
      </Base1>
    );
  }
  
}
