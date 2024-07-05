import React from 'react'
import { getStartups } from "../../userApiCalls";
import { useEffect } from "react";
import { useState } from "react";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import Base from "../base";
import { Link } from "react-router-dom";

export default function StudentsWelfare() {
  const [startup, setStartups] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getStartups("StudentsWelfare").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setStartups(data);
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
      <Base title="Students' Welfare Notices">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Students' Welfare Notices">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (startup && startup.length !== 0) {
    return (
      <Base title="Students' Welfare Notices">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-3 ">
            <p className="col-12 para-18 text-center">LATEST NOTICES</p>
          </div>

          <div className=" row d-flex justify-content-center">
            {startup.reverse().map((startup, index) => {
              console.log(startup.url);
              return (
                <div
                  className="card"
                  style={{ width: "20rem", margin: "10px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      position: "absolute",
                      right: "0",
                    }}
                  >
                    <span
                      className="badge rounded-pill bg-danger"
                      style={{ zIndex: "1", left: "80%" }}
                    >
                      {/* {startup.updatedAt?startup.updatedAt.slice(0,10):""} */}
                      {new Date(startup.updatedAt).toGMTString().slice(0,17)}
                    </span>
                  </div>
                  {startup.photo==="" ? (
                    <img
                    src="https://cdn-icons-png.freepik.com/512/7803/7803013.png"
                    className="card-img-top"
                    style={{
                      width: "260px",
                      height: "330px",
                      marginLeft: "15px",
                    }}
                    alt="..."
                   /> 
                  ) : (
                      <img
                      src={startup.photo}
                      className="card-img-top"
                      style={{
                        width: "260px",
                        height: "330px",
                        marginLeft: "15px",
                      }}
                      alt="..."
                      />
                    )
                  }
                  <div className="card-body">
                    <h5 className="card-title">{startup.name}</h5>
                    <p className="card-text">{startup.description?startup.description.slice(0,100):""}..</p>
                    {/* <a href="#" className="btn btn-primary">
                      Read More
                    </a> */}
                    <Link to={`/notices/${startup._id}`}>Read More</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    );
  } else {
    return (
      <Base title="Notices">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}