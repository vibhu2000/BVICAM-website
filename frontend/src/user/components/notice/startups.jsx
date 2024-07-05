import React from "react";
import { getAllStartup } from "../../../admin/helper/adminApiCalls";
import { useEffect } from "react";
import { useState } from "react";
import { Loder, ErrorYellow, ComingSoon } from "../../../core/utils";
import Base from "../base";
import { Link } from "react-router-dom";

export default function Startups() {
  const [startup, setStartups] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getAllStartup().then((data) => {
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
      <Base title="Notices">
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>
      </Base>
    );
  } else if (error) {
    return (
      <Base title="Notices">
        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>
      </Base>
    );
  } else if (startup && startup.length !== 0) {
    return (
      <Base title="Notices">
        <div className="row mb-4">
          <div className="col-12 text-center text-wrap mt-5 mb-3">
            <p className="col-12 para-18 text-center">LATEST NOTICES</p>
          </div>

          <div className=" row main-container">
          <table className='table table-bordered'>
                    <thead>
                        <tr style={{backgroundColor: "#A1CEFF",textAlign: "center",fontSize:"1rem"}}>
                            <th></th>
                            <th>News Title</th>
                            <th>News Date</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:"15px"}}> 
            {startup.reverse().map((startup, index) => {
              // console.log(startup.url);
              return (
                        <tr>
                            <td style={{width: "20px",fontSize:"30px"}}><ul style={{listStyleType:"circle"}}><li></li></ul></td>
                            <td><Link to={`/notices/${startup._id}`}>{startup.name}</Link></td>
                            <td style={{textAlign: "center"}}>{new Date(startup.updatedAt).toGMTString().slice(0,17)}</td>
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
      <Base title="Notices">
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
      </Base>
    );
  }
}
