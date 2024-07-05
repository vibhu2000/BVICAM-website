import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { Loder,  ErrorYellow, ComingSoon } from "../../../core/utils";
import { getImages } from "../../userApiCalls";
import Base from "../base";

export default function Event() {
  const [gallery, setGallery] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoding] = useState(true);

  const preload = () => {
    getImages("Event").then((data) => {
      setLoding(false);
      if (data.error) {
        setError("Something went wrong. Try Again");
      } else {
        setGallery(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);
  if (loading) {
    return (
        <div className="col-12 my-5 py-5">
          <Loder></Loder>
        </div>

    );
  } else if (error) {
    return (

        <div className="col-12 my-5 py-5">
          <ErrorYellow></ErrorYellow>
        </div>

    );
  } else if (gallery && gallery.length !== 0) {
    return (
          <div className=" row  main-container d-flex justify-content-center">
            <h2 className="h2 fw-semibold lh-long" style={{marginLeft: "70px",marginTop: "40px"}}>Events</h2>
            {gallery.map((gallery, index) => {
              return (
                <div className="col-10 col-md-3 col-lg-3 my-2">
                  <span className="gallery-img position shadow-sm d-flex flex-column align-items-center justify-content-start p-2 border border-dark" style={{backgroundImage:`linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent 15%), url(${gallery.photo})`,backgroundSize: "contain",backgroundRepeat: "no-repeat"}}>
                    <h5 className="fw-semibold text-white">{gallery.name}</h5>  
                  </span>
                </div>
              
              );
            })}
          </div>
    );
  } else {
    return (
        
        <div className="col-12 my-5 py-5">
          <ComingSoon></ComingSoon>
        </div>
    );
  }
}

