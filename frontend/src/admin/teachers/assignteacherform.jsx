import React, {useState, useEffect } from "react";
import { Button } from "../../core/utils";
import { assignTeacher, getAllUsers, getAllTeachers } from "../helper/adminApiCalls";

export default function AssignTeacherForm() {

  let imageTypes = [
    "Discrete Structures",
    "Computer Networks",
    "Operating Systems with Linux",
    "Database Management Systems",
    "Object Oriented Programming and JAVA",
    
    "Data and File Structures",	
    "Object Oriented Software Engineering",		
    "Python Programming",
    "Full Stack Development",	
    "Digital Marketing",

    "Design and Analysis of Algorithms",
    "Artificial Intelligence and Machine Learning",
    "Cloud Computing",
    "e-Business Systems",
    "Multimedia Technologies",
    "Cyber Security and Cyber Laws",
  ];

    const [user, setUser] = useState([]);
    const [teacher, setTeacher] = useState([]);

    const preload = () => {
        getAllUsers().then((data) => {
          if (data.error) {
            console.log("Something went wrong. Try Again");
          } else {
            setUser(data);
          }
        });
        getAllTeachers().then((data) => {
          if (data.error) {
            console.log("Something went wrong. Try Again");
          } else {
            setTeacher(data);
          }
        });
      };
    
      useEffect(() => {
        preload();
      }, []);
      

    const tname = user.flatMap((n) => {
        if (n.isAdmin===true) {
          return [];
        }
        return n.name;
      });

  const [values, setValues] = useState({
    teacherName: "",
    subjectName: "",
    error: "",
    loading: false,
    formData: new FormData(),
    assigned: "",
  });

  const {
    teacherName,
    subjectName,
    error,
    loading,
    formData,
    assigned,
  } = values;

  const onSubmit = (event) => {
    event.preventDefault();
    const tn=teacher.filter((n)=>n.subjectName===subjectName || n.teacherName===teacherName);

    if(!teacherName || !subjectName){
        setValues({ ...values, error: "Please fill all fields", loading: false, assigned:"" });
        
    }
    else if(tn.length!==0){
      setValues({ ...values, error: `${tn[0].subjectName} is already alloted to ${tn[0].teacherName}`, loading: false, assigned:"" });
    }
    else{
      setValues({ ...values, error: "", loading: true, assigned:"" });
    
    assignTeacher(formData).then((data) => {
      if (data.error) {
        setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
      } else {
        setValues({
          ...values,
          subjectName: "",
          teacherName: "",
          error:"",
          loading: false,
          assigned: data.subjectName,
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
      style={{ display: assigned ? "" : "none" }}
    >
      <h6>{assigned} created successfully</h6>
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
          <label className="form-label">Subject Name</label>
          <select
            onChange={handleChange("subjectName")}
            className="form-control"
            value={subjectName}
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

        <div className="form-group mt-3 mb-5">
          <label className="form-label">Teacher Name</label>
          <select
            onChange={handleChange("teacherName")}
            className="form-control"
            value={teacherName}
            required
          >
            <option>Select</option>
            {tname &&
              tname.map((type, index) => (
                <option key={index} value={type}>
                  {type}
                </option>
              ))}
          </select>
        </div>

        <Button onSubmit={onSubmit} loading={loading} name="Assign Teacher"> </Button>
      </form>
    </div>
  );
}
