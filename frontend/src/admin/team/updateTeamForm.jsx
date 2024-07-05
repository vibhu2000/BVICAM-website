import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone";
import { getTeamMember, updateTeamMember } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function UpdateTeamMemberForm({ memberId="" }) {

  let imageTypes = [
    "Faculty",
    "Support"
  ];

  const [values, setValues] = useState({
    name: "",
    designation: "",
    qualification: "",
    imageType: "",
    areaofexpertise: "",
    email: "",
    photo:"",
    photoName:"",
    experience:"",
    seminar:"",
    achievements:"",
    error: "",
    loading: false,
    formData: new FormData(),
    updatedTeamMember: "",
  });
  const {
    name,
    designation,
    qualification,
    imageType,
    areaofexpertise,
    email,
    photo,
    photoName,
    experience,
    seminar,
    achievements,
    error,
    loading,
    formData,
    updatedTeamMember,
  } = values;

  const preload = memberId => {
    getTeamMember(memberId).then(data => {
      console.log(data);
      if (data.error) {
        setValues({ ...values,loading:false, error: "Something went wrong. Try again." ,updatedTeamMember:""});
      } else {
        setValues({
          ...values,
          name: data.name,
          designation: data.designation,
          qualification: data.qualification,
          imageType: data.imageType,
          areaofexpertise: data.areaofexpertise,
          email: data.email,
          photo:data.photo,
          photoName:"",
          experience: data.experience,
          seminar: data.seminar,
          achievements: data.achievements,
          error:"",
          updatedTeamMember:"",
          formData: new FormData()
        });
      }
    });
  };
  useEffect(() => {
    preload(memberId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: "", loading: true,updatedTeamMember:"" });    
    updateTeamMember(memberId , formData).then((data) => {
      if (data.error) {
        setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
      } else {      
        setValues({
          ...values,
          error:"",          
          loading: false,
          updatedTeamMember: data.name,
        });
      }
    });
      
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: updatedTeamMember ? "" : "none" }}
    >
      <h6>{updatedTeamMember} updated successfully</h6>
    </div>
  );
  const errorMessage = () => (
    <div
      className="alert alert-warning mt-3 p-2"
      style={{ display: error ? "" : "none" }}
    >
      <h6>{error}</h6>
    </div>
  );
  const handleDrop = (acceptedFiles) => {
    acceptedFiles.map((file) => {
      const reader = new FileReader();
      reader.onload = function(e) {
        formData.set("photo", e.target.result);
        setValues({ ...values, photo: e.target.result, photoName: file.name });
      };
      reader.readAsDataURL(file);
      return file;
    });
  };

  return (
    <div className="row">
        {successMessage()}
        {errorMessage()}
      <form className="mb-3 mt-2">
        <div className="form-group my-3 mb-2">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("name")}
            value={name}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Designation</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("designation")}
            value={designation}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Faculty Type</label>
          <select
            onChange={handleChange("imageType")}
            className="form-control"
            value={imageType}
            required
          >
            <option>Select</option>
            {imageTypes &&
              imageTypes.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
          </select>
        </div>
        <div className="form-group my-3">
          <label className="form-label">Qualification</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("qualification")}
            value={qualification}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Area of Expertise</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("areaofexpertise")}
            value={areaofexpertise}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Email Id</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Working Experience</label>
          <textarea
            rows="3"
            cols="10"
            type="text"
            className="form-control"
            onChange={handleChange("experience")}
            value={experience}
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Conference/Seminar</label>
          <textarea
            rows="3"
            cols="10"
            type="text"
            className="form-control"
            onChange={handleChange("seminar")}
            value={seminar}
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Awards/Achievements</label>
          <textarea
            rows="3"
            cols="10"
            type="text"
            className="form-control"
            onChange={handleChange("achievements")}
            value={achievements}
          />
        </div>
        <div className="row mt-3">
          <label className="form-label">Photo</label>
          <small className="form-text text-muted">
            Please use an image no larger than 1200px * 600px.
          </small>
        </div>
        <div className="dropzone my-1">
          <div className="dz-message">
            <Dropzone
              onDrop={handleDrop}
              accept="image/*"
              minSize={1024}
              maxSize={3072000}
              maxFiles={1}
              multiple={false}
            >
              {({ getRootProps, getInputProps }) => (
                <div {...getRootProps({ className: "dropzone" })}>
                  <input {...getInputProps()} />
                  <p>Drag and drop images, or click to select file</p>
                </div>
              )}
            </Dropzone>
          </div>
          {photo.length !== 0 ? (
            <div className="p-3">
              <img src={photo} alt="" className="uploaded-img" />
              <small className="p-2">{photoName}</small>
            </div>
          ) : (
            <div></div>
          )}
          <div></div>
        </div>

        <hr className="mt-5 mb-3" />

        <Button onSubmit={onSubmit} name="Update Faculty Member" loading={loading}></Button>
      </form>
    </div>
  );
}
