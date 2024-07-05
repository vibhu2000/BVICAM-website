import React, {useState } from "react";
import { Button } from "../../core/utils";
import { signup } from "../auth/helper";

export default function AddUserForm() {

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    isAdmin: false,
    error: "",
    loading: false,
    formData: new FormData(),
    showPassword: false,
    createdUser: "",
  });
  const {
    name,
    email,
    password,
    isAdmin,
    error,
    loading,
    formData,
    showPassword,
    createdUser,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    if(!name || !email || !password){
        setValues({ ...values, error: "Please fill all fields", loading: false,createdUser:"" });
        
    }else{
      setValues({ ...values, error: "", loading: true,createdUser:"" });
    
    signup({name,email,password}).then((data) => {
      if (data.error) {
        setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
      } else {
        console.log(data);   
        setValues({
          ...values,
          name: "",
          email: "",
          password: "",
          isAdmin: false,
          error:"",
          loading: false,
          createdUser: data.name,
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

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: createdUser ? "" : "none" }}
    >
      <h6>{createdUser} created successfully</h6>
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
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange("email")}
            value={email}
            required
          />
        </div>
        
        <div className="form-group mt-3 mb-5">
          <label className="form-label">Password</label>
          <div className="input-group input-group-merge mb-4">
          <input
            className="form-control" 
            type={showPassword ? "text" : "password"}
            onChange={handleChange("password")}
            value={password}
            required
          />

                  <span
                    className="input-group-text bg-white"
                    onClick={() =>
                      setValues({
                        ...values,
                        showPassword: !showPassword,
                      })
                    }
                  >
                    <i
                      className="material-symbols-outlined"
                      style={{ cursor: "pointer" }}
                    >
                      {showPassword ? "visibility_off" : "visibility"}
                    </i>
                  </span>
                  </div>
        </div>


        <Button onSubmit={onSubmit} loading={loading} name="Add User"> </Button>
      </form>
    </div>
  );
}
