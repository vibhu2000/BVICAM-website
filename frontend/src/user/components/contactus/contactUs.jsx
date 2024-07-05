import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Empty, Loder, Error } from "../../../core/utils";
import { addContact, getImages } from "../../userApiCalls";
import Base from "../base";


export default function ContactUs() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
    error: "",
    loading: false,
    formData: new FormData(),
    addedContact: "",
  });
  const {
    name,
    email,
    message,
    subject,
    error,
    loading,
    formData,
    addedContact,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({
        ...values,
        errror:"",
        loading: true,
        addedContact: "",
      });
    if (!name || !email || !message || !subject) {
        console.log("Plese all fields")
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        addedContact: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, addedContact: "" });

      addContact(formData).then((data) => {
        if (data.error) {
          setValues({
            ...values,
            loading: false,
            error: "Oops! Something went wrong while submitting the form.",
          });
        } else {
          setValues({
            ...values,
            name: "",
            email: "",
            message: "",
            subject: "",
            error: "",
            loading: false,
            addedContact: data.name,
          });
        }
      
      });
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: addedContact ? "" : "none" }}
    >
      <h6 className="my-auto">Thank you! Your submission has been received!</h6>
    </div>
  );
  const errorMessage = () => (
    <div
      className="alert alert-warning mt-3  p-2"
      style={{ display: error ? "" : "none" }}
    >
      <h6 className="my-auto">{error}</h6>
    </div>
  );

  return (
    <Base title="Contact Us">
      <div className="row main-container my-5">
        <div className="col-md-8 col-12">
          <h4 className="h4 fw-semibold mb-3">Feedback</h4>
          <p className="para-17 mb-5">
            Please fill the form below to reach out to us regarding any queries.
          </p>
          {successMessage()}
          {errorMessage()}
        </div>
        <div className="col-12 col-md-8">
          <form  className="row">
            <div className="col-12 col-md-6 form-group">
              <input
                type="text"
                placeholder="Name"
                className="input-field field"
                value={name}
                onChange={handleChange('name')}
              />
            </div>
            <div className="col-12 col-md-6 form-group">
              <input
                type="email"
                placeholder="Email"
                className="input-field field"
                onChange={handleChange('email')}
                value={email}
              />
            </div>
            <div className="col-12 form-group">
              <input
                type="text"
                placeholder="Subject"
                className="input-field field"
                value={subject}
                onChange={handleChange('subject')}
              />
            </div>
            <div className="col-12 form-group">
              <textarea
                type="email"
                placeholder="Message"
                className="input-field field h-100"
                value={message}
                onChange={handleChange('message')}
              ></textarea>
            </div>
            <div className="col-6 my-4">
              <button
                onClick={onSubmit}

                className={`subscribe-button text-white w-button w-100 text-center   ${
                  loading ? "disabled" : ""
                }`}

              >
                
                {loading && (
                  <span
                    className="spinner-border spinner-border-sm mx-2 "
                    role="status"
                    aria-hidden="true"
                  ></span>
                )}
                Submit
              </button>
            </div>
          </form>
        </div>

        <div className="col-12 col-md-4 ps-lg-4">
          <h6 className="fw-semibold">Location :</h6>
          <p className="para-17 text-wrap lh-sm">
            Bharati Vidyapeeth's Institute of Computer Applications and Management (BVICAM)<br/>   
            A-4, Paschim Vihar, Opp. Paschim Vihar (East) Metro Station,
            Rohtak Road, New Delhi-110063
          </p>
          <h6 className="fw-semibold pt-3">Phone :</h6>
          <p className="para-17">+91 - 11 - 25275055</p>
          <p className="para-17">+91 - 9212022066</p>
          <h6 className="fw-semibold pt-3">Email:</h6>
          <p className="para-17"> mca@bvicam.ac.in , mca.hoda@gmail.com</p>
        </div>

        <iframe
          className="my-5"
          src="https://maps.google.co.in/maps?hl=en&q=bharati+vidyapeeth+institute+of+computer+applications+and+management&ie=UTF8&hq=bharati+vidyapeeth+institute+of+computer+applications+and+management&hnear=New+Delhi,+Delhi&t=m&source=embed&ll=28.676187,77.112876&spn=0.013178,0.030127&z=15&output=embed"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          title="location-map"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </Base>
  );
  //     <div className="row">
  //       {successMessage()}
  //       {errorMessage()}
  //       <form className="mb-3 mt-2">
  //         <div className="form-group my-3 mb-2">
  //           <label className="form-label">Name</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             onChange={handleChange("name")}
  //             value={name}
  //             required
  //           />
  //         </div>
  //         <div className="form-group my-3">
  //           <label className="form-label">Description</label>
  //           <input
  //             type="text"
  //             className="form-control"
  //             onChange={handleChange("description")}
  //             value={description}
  //             required
  //           />
  //         </div>
  //         <div className="form-group my-3">
  //           <label className="form-label">URL</label>
  //           <br />
  //           <small className="form-text text-muted">
  //             Please use the Youtube URL.
  //           </small>
  //           <input
  //             type="text"
  //             className="form-control"
  //             onChange={handleChange("url")}
  //             value={url}
  //             required
  //           />
  //         </div>

  //         <hr className="mt-5 mb-3" />

  //         <Button onSubmit={onSubmit} loading={loading} name="Add Video"></Button>
  //       </form>
  //     </div>
  //   );
}
