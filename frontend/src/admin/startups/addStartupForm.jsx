import React, { useState } from "react";
import upload from '../../utils/upload.js';
import Dropzone from "react-dropzone";
import { addStartup } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function AddStartupForm() {
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

  const [singleFile, setSingleFile] = useState(undefined);
  const [uploading, setUploading] = useState(false);

  const [values, setValues] = useState({
    name: "",
    description: "",
    imageType: "",
    url: "",
    urlName: "",
    photo: "",
    photoName: "",
    file: "",
    fileName: "",
    error: "",
    loading: false,
    formData: new FormData(),
    addedStartup: "",
  });
  const {
    name,
    description,
    imageType,
    url,
    photo,
    photoName,
    file,
    fileName,
    error,
    loading,
    formData,
    addedStartup,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    if (!name || !description || !imageType) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        addedStartup: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, addedStartup: "" });

      addStartup(formData).then((data) => {
        if (data.error) {
          setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            name: "",
            description: "",
            imageType: "",
            url: "",
            urlName: "",
            photo: "",
            photoName: "",
            file: "",
            fileName: "",
            error: "",
            loading: false,
            addedStartup: data.name,
          });
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      });
    }
  };

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleUpload = (name,fname) => async (event) => {
    event.preventDefault();
    setUploading(true);
    try {
      
      formData.set(fname, singleFile.name);
      setValues({ ...values, [fname]: singleFile.name });

      const cover = await upload(singleFile);
      formData.set(name, cover);
      setValues({ ...values, [name]: cover });
      setUploading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: addedStartup ? "" : "none" }}
    >
      <h6>{addedStartup} added successfully</h6>
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

  const handleDropImages = (acceptedFiles) => {
    if (!acceptedFiles)  
    { 
      formData.set("photo", "");
      setValues({ ...values, photo: ""});
    }  
    else
    {
        acceptedFiles.map((file) => {
        const reader = new FileReader();
        reader.onload = function(e) {
          console.log(typeof e.target.result);
          formData.set("photo", e.target.result);
          setValues({ ...values, photo: e.target.result, photoName: file.name });
        };
        reader.readAsDataURL(file);
        return file;
        });
    }
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
          <label className="form-label">Description</label>
          <textarea
            rows="10"
            cols="10"
            type="text"
            className="form-control"
            onChange={handleChange("description")}
            value={description}
            required
          />
        </div>
        <div className="form-group my-3">
          <label className="form-label">Notice Type</label>
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
          <label className="form-label">URL</label>
          <br />
          <small className="form-text text-muted">
            Please use the URL (if any).
          </small>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("url")}
            value={url}
          />
        </div>

        <div className="documents">
          <div className="form-group mt-4 mb-5">
            <label className="form-label">File</label><br/>
              <input
                type="file"
                onChange={(e) => {setSingleFile(e.target.files[0])}}
              />
            <button onClick={handleUpload("file","fileName")}>
            {uploading ? "uploading" : "Upload"}
          </button>
        </div> 
      </div>

        <div className="row my-3">
          <label className="form-label">Photo</label>
          <small className="form-text text-muted">
            Please use an image no larger than 1200px * 600px.
          </small>
        </div>
        <div className="dropzone my-1">
          <div className="dz-message">
            <Dropzone
              onDrop={handleDropImages}
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
          <hr className="mt-5 mb-3" />
        </div>

        <Button onSubmit={onSubmit} name="Add Notice" loading={loading}></Button>
      </form>
    </div>
  );
}
