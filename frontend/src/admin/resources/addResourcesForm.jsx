import React, { useEffect,useState } from 'react'
import { Button } from "../../core/utils";
import { addCourse, getAllCourses } from "../helper/adminApiCalls";
import { Error } from '../../core/utils';
import upload from '../../utils/upload.js';

export default function AddResourcesForm ({ teacherName = "", subjectName = ""}) {
  let sem = [
    "Bridge Course",
    "Semester 1",
    "Semester 2",
    "Semester 3",
    "Semester 4",
    "Semester 5",
    "Semester 6",
  ];

  let courseTypes=[
    "MCA",
    "BA(JMC)"
  ];

  const [course, setCourse] = useState([]);

  const preload = () => {
    getAllCourses().then((data) => {
      if (data.error) {
        console.log("Something went wrong. Try Again");
      } else {
        setCourse(data);
      }
    });
  };

  useEffect(() => {
    preload();
  }, []);

  const cour=course.filter((adm) => adm.subName === subjectName);


  // console.log("test",teacherName,subjectName);

  const [syllabusFiles, setsyllabusFiles] = useState([]);
  const [syllabusfileNames, setsyllabusfileNames] = useState([]);

  const [courseMaterialFiles, setcourseMaterialFiles] = useState([]);
  const [courseMaterialfilenames, setcourseMaterialfilenames] = useState([]);

  const [labFiles, setlabFiles] = useState([]);
  const [labfilenames, setlabfilenames] = useState([]);

  const [intpprFiles, setintpprFiles] = useState([]);
  const [intpprfilenames, setintpprfilenames] = useState([]);

  const [extpprFiles, setextpprFiles] = useState([]);
  const [extpprfilenames, setextpprfilenames] = useState([]);

  const [assignmentFiles, setassignmentFiles] = useState([]);
  const [assignmentfilenames, setassignmentfilenames] = useState([]);

  const [uploading, setUploading] = useState(false);

  const [values, setValues] = useState({
    subName: "",
    semester: "",
    courseType: "",
    syllabus: "",
    syllabusNames: "",
    courseMaterial: "",
    courseMaterialNames: "",
    intppr: "",
    intpprNames: "",
    extppr: "",
    extpprNames: "",
    labFile: "",
    labFileNames: "",
    assignment: "",
    assignmentNames: "",
    teacher: "",
    loading: false,
    formData: new FormData(),
    addedSubject: "",
  });

  const {
    subName,
    semester,
    courseType,
    syllabus,
    syllabusNames,
    courseMaterial,
    courseMaterialNames,
    intppr,
    intpprNames,
    extppr,
    extpprNames,
    labFile,
    labFileNames,
    assignment,
    assignmentNames,
    teacher,
    error,
    loading,
    formData,
    addedSubject,
  } = values;

  const handleChange = (name) => (event) => {
    const value = event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const handleUpload = (sy,cm,lf,ip,ep,as)=>async (event) => {
    event.preventDefault();
    setUploading(true);
    formData.set("subName",subjectName);
    setValues({ ...values, ["subName"]: subjectName});

    formData.set("teacher",teacherName);
    setValues({ ...values, ["teacher"]: teacherName});
    
    try {
      const sFile = await Promise.all(   
        [...syllabusFiles].map(async (file) => {
          syllabusfileNames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );
      formData.set(sy, sFile);
      setValues({ ...values, [sy]: sFile});
      formData.set("syllabusNames", syllabusfileNames);
      setValues({ ...values, ["syllabusNames"]: syllabusfileNames});
    
      const cFile = await Promise.all(   
        [...courseMaterialFiles].map(async (file) => {
          courseMaterialfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );
      formData.set(cm, cFile);
      setValues({ ...values, [cm]: cFile});
      formData.set("courseMaterialNames", courseMaterialfilenames);
      setValues({ ...values, ["courseMaterialNames"]: courseMaterialfilenames});

      const lFile = await Promise.all(   
        [...labFiles].map(async (file) => {
          labfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );
      formData.set(lf, lFile);
      setValues({ ...values, [lf]: lFile});
      formData.set("labFileNames", labfilenames);
      setValues({ ...values, ["labFileNames"]: labfilenames});

      const iFile = await Promise.all(   
        [...intpprFiles].map(async (file) => {
          intpprfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );    
      formData.set(ip, iFile);
      setValues({ ...values, [ip]: iFile});
      formData.set("intpprNames", intpprfilenames);
      setValues({ ...values, ["intpprNames"]: intpprfilenames});

      const eFile = await Promise.all(   
        [...extpprFiles].map(async (file) => {
          extpprfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );
      formData.set(ep, eFile);
      setValues({ ...values, [ep]: eFile});
      formData.set("extpprNames", extpprfilenames);
      setValues({ ...values, ["extpprNames"]: extpprfilenames});

      const aFile = await Promise.all(   
        [...assignmentFiles].map(async (file) => {
          assignmentfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );
      formData.set(as, aFile);
      setValues({ ...values, [as]: aFile});
      formData.set("assignmentNames", assignmentfilenames);
      setValues({ ...values, ["assignmentNames"]: assignmentfilenames});
      
      setUploading(false);
  
    } catch (err) {
      console.log(err);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
 
    if ( !semester || !courseType) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        addedSubject: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, addedSubject: "" });

      addCourse(formData).then((data) => {
        if (data.error) {
          setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            subName: "",
            semester: "",
            courseType: "",
            syllabus: "",
            courseMaterial: "",
            intppr: "",
            extppr: "",
            labFile: "",
            assignment: "",
            teacher: "",
            loading: false,
            addedSubject: data.subName,
          }); 
        }
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      });
    }
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: addedSubject ? "" : "none" }}
    >
      <h6>{addedSubject} added successfully</h6>
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

  if(cour.length === 0)
  {
    return (
    <div className="row">
    {successMessage()}
    {errorMessage()}

    <form className="mb-3 mt-2">
    {subjectName===""?(
    <div className="form-group my-3 mb-2">
        <label className="form-label">Subject Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="NO SUBJECT ALLOTED"
          disabled
        />
      </div> ):(
        <>
       <div className="form-group my-3 mb-2">
        <label className="form-label">Subject Name</label>
        <input
          type="text"
          className="form-control"
          placeholder={subjectName}
          disabled
        />
      </div> 

      <div className="form-group my-3">
        <label className="form-label">Semester</label>
        <select
          onChange={handleChange("semester")}
          className="form-control"
          value={semester}
          required
        >
          <option>Select</option>
          {sem &&
            sem.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
        </select>
      </div>

      <div className="form-group my-3">
        <label className="form-label">Course Type</label>
        <select
          onChange={handleChange("courseType")}
          className="form-control"
          value={courseType}
          required
        >
          <option>Select</option>
          {courseTypes &&
            courseTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
        </select>
      </div>

      <div className="documents">
        <div className="form-group my-4">
            <label className="form-label">General Resources</label><br/>
              <input
                type="file"
                multiple
                onChange={(e) => {setsyllabusFiles(e.target.files)}}
              />
        </div>
        <div className="form-group my-4">
            <label className="form-label">Course Material</label><br/>
              <input
                type="file"
                multiple
                onChange={(e) => setcourseMaterialFiles(e.target.files)}
              />
        </div>
        <div className="form-group my-4">
            <label className="form-label">Lab Files</label><br/>
              <input
                type="file"
                multiple
                onChange={(e) => setlabFiles(e.target.files)}
              />
        </div>
        <div className="form-group my-4">
            <label className="form-label">Internal Paper</label><br/>
              <input
                type="file"
                multiple
                onChange={(e) => setintpprFiles(e.target.files)}
              />
        </div>
        <div className="form-group my-4">
            <label className="form-label">External Paper</label><br/>
              <input
                type="file"
                multiple
                onChange={(e) => setextpprFiles(e.target.files)}
              />
        </div>
        <div className="form-group mt-4 mb-3">
            <label className="form-label">Assignments</label><br/>
              <input
                type="file"
                multiple
                onChange={(e) => setassignmentFiles(e.target.files)}
              />
        </div>
        <div className="form-group mb-3">
        <button className="my-4" onClick={handleUpload("syllabus","courseMaterial","labFile","intppr","extppr","assignment")}>
          {uploading ? "uploading" : "Upload"}
        </button>
        </div> 
      </div>

      <Button onSubmit={onSubmit} name="Add Subject Material" loading={loading}></Button>
      </>
      )}
    </form>
  </div>
  );
}
else
{
  return(
    <div className='row mb-3 mt-2'>
      <h3 className='mt-5 mb-3'>{subjectName} is already added !</h3>
      <p className='mt-3 mb-5'><b>NOTE: </b> Update {subjectName} subject material.</p>
    </div>

  );
}
}


