import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import { getTeam } from "../../userApiCalls";
import Base from "../base";
import { Link } from "react-router-dom";

export default function Team() {
  const [team, setTeam] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getTeam("Faculty").then((data) => {
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
  if (loading) {
    return (
      <Base title="Faculty">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Faculty">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (team && team.length !== 0) {
    return (
      <Base title="Faculty">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap my-5 ">
            <p class="col-12 para-18 text-center">
              These people have been the back of pushing <br /> this institute forward
            </p>
          </div>

          <div className=" row col-12 main-container">
            {team.map((member, index) => {
              return (
                <div className="col-12 col-md-4 col-lg-3 my-3">
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <img
                      src={member.photo}
                      alt="..."
                      className="avatar-img rounded-circle team-img uploaded-img"
                    />
                    <h5 className="fw-semibold pt-3">{member.name}</h5>
                    <p className="para-18 font-monospace text-center">
                      {member.designation}
                    </p>
                    <Link to={`/team/${member._id}`}>Read More..</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Base>
    );
  }else {
    return (
        <Base title="Faculty">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}
