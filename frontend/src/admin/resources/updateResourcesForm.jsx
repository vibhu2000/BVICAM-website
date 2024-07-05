import React, { useEffect, useState } from "react";
import upload from '../../utils/upload.js';
import { getCourse,updateCourse } from "../helper/adminApiCalls";
import { Button } from "../../core/utils";

export default function UpdateResourcesForm({courseId = "",teacherName = "", subjectName = ""}) {
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
    updatedSubject: "",
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
    updatedSubject,
  } = values;

  const preload = courseId => {

    getCourse(courseId).then(data => {
      if (data.error) {
        setValues({ ...values, error: "Something went wrong. Try again." ,updatedStartup:""});
      } else {
        setValues({
          ...values,
          subName: data.subName,
          semester: data.semester,
          courseType: data.courseType,
          syllabus: data.syllabus,
          syllabusNames: data.syllabusNames,
          courseMaterial: data.courseMaterial,
          courseMaterialNames: data.courseMaterialNames,
          intppr: data.intppr,
          intpprNames: data.intpprNames,
          extppr: data.extppr,
          extpprNames: data.extpprNames,
          labFile: data.labFile,
          labFileNames: data.labFileNames,
          assignment:data.assignment,
          assignmentNames:data.assignmentNames,
          teacher:data.teacher,
          error:"",
          updatedStartup:"",
          formData: new FormData()
        });
      }
    });
  };
  
  useEffect(() => {
    preload(courseId);
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!semester || !courseType ) {
      setValues({
        ...values,
        error: "Please fill all fields",
        loading: false,
        updatedSubject: "",
      });
    } else {
      setValues({ ...values, error: "", loading: true, updatedSubject: "" });

      updateCourse(courseId,formData).then((data) => {
        if (data.error) {
          setValues({ ...values,loading:false, error: "Something went wrong. Try again." });
        } else {
          setValues({
            ...values,
            error: "",
            loading: false,
            updatedSubject: data.subName,
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
      
      if(syllabus==="")
      {  
        formData.set(sy, sFile);
        setValues({ ...values, [sy]: sFile});
      }
      else
      {
        if(sFile.length!==0)
        {
          formData.set(sy, syllabus+","+sFile);
          setValues({ ...values, [sy]: syllabus+","+sFile});
        }
        else
        {
          formData.set(sy, syllabus);
          setValues({ ...values, [sy]: syllabus});
        }
      }

      if(syllabusNames==="")
      {  
          formData.set("syllabusNames", syllabusfileNames);
          setValues({ ...values, ["syllabusNames"]: syllabusfileNames});
      }
      else
      {
          if(syllabusfileNames.length!==0)
          {
            formData.set("syllabusNames", syllabusNames+","+syllabusfileNames);
            setValues({ ...values, ["syllabusNames"]: syllabusNames+","+syllabusfileNames});
          }
          else
          {
            formData.set("syllabusNames", syllabusNames);
            setValues({ ...values, ["syllabusNames"]: syllabusNames});
          }
      }
    
      const cFile = await Promise.all(   
        [...courseMaterialFiles].map(async (file) => {
          courseMaterialfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );

      if(courseMaterial==="")
        {  
          formData.set(cm, cFile);
          setValues({ ...values, [cm]: cFile});
        }
        else
        {
          if(cFile.length!==0)
          {
            formData.set(cm, courseMaterial+","+cFile);
            setValues({ ...values, [cm]: courseMaterial+","+cFile});
          }
          else
          {
            formData.set(cm, courseMaterial);
            setValues({ ...values, [cm]: courseMaterial});
          }
        }
  
        if(courseMaterialNames==="")
        {  
            formData.set("courseMaterialNames", courseMaterialfilenames);
            setValues({ ...values, ["courseMaterialNames"]: courseMaterialfilenames});
        }
        else
        {
            if(courseMaterialfilenames.length!==0)
            {
              formData.set("courseMaterialNames", courseMaterialNames+","+courseMaterialfilenames);
              setValues({ ...values, ["courseMaterialNames"]: courseMaterialNames+","+courseMaterialfilenames});
            }
            else
            {
              formData.set("courseMaterialNames", courseMaterialNames);
              setValues({ ...values, ["courseMaterialNames"]: courseMaterialNames});
            }
        }

      const lFile = await Promise.all(   
        [...labFiles].map(async (file) => {
          labfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );

      if(labFile==="")
        {  
          formData.set(lf, lFile);
          setValues({ ...values, [lf]: lFile});
        }
        else
        {
          if(lFile.length!==0)
          {
            formData.set(lf, labFile+","+lFile);
            setValues({ ...values, [lf]: labFile+","+lFile});
          }
          else
          {
            formData.set(lf, labFile);
            setValues({ ...values, [lf]: labFile});
          }
        }
  
        if(labFileNames==="")
        {  
            formData.set("labFileNames", labfilenames);
            setValues({ ...values, ["labFileNames"]: labfilenames});
        }
        else
        {
            if(labfilenames.length!==0)
            {
              formData.set("labFileNames", labFileNames+","+labfilenames);
              setValues({ ...values, ["labFileNames"]: labFileNames+","+labfilenames});
            }
            else
            {
              formData.set("labFileNames", labfilenames);
              setValues({ ...values, ["labFileNames"]: labfilenames});
            }
        }

      const iFile = await Promise.all(   
        [...intpprFiles].map(async (file) => {
          intpprfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );    

      if(intppr==="")
        {  
          formData.set(ip, iFile);
          setValues({ ...values, [ip]: iFile});
        }
        else
        {
          if(iFile.length!==0)
          {
            formData.set(ip, intppr+","+iFile);
            setValues({ ...values, [ip]: intppr+","+iFile});
          }
          else
          {
            formData.set(ip, intppr);
            setValues({ ...values, [ip]: intppr});
          }
        }
  
        if(intpprNames==="")
        {  
            formData.set("intpprNames", intpprfilenames);
            setValues({ ...values, ["intpprNames"]: intpprfilenames});
        }
        else
        {
            if(intpprfilenames.length!==0)
            {
              formData.set("intpprNames", intpprNames+","+intpprfilenames);
              setValues({ ...values, ["intpprNames"]: intpprNames+","+intpprfilenames});
            }
            else
            {
              formData.set("intpprNames", intpprNames);
              setValues({ ...values, ["intpprNames"]: intpprNames});
            }
        }

      const eFile = await Promise.all(   
        [...extpprFiles].map(async (file) => {
          extpprfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );

      if(extppr==="")
        {  
          formData.set(ep, eFile);
          setValues({ ...values, [ep]: eFile});
        }
        else
        {
          if(eFile.length!==0)
          {
            formData.set(ep, extppr+","+eFile);
            setValues({ ...values, [ep]: extppr+","+eFile});
          }
          else
          {
            formData.set(ep, extppr);
            setValues({ ...values, [ep]: extppr});
          }
        }
  
        if(extpprNames==="")
        {  
            formData.set("extpprNames", extpprfilenames);
            setValues({ ...values, ["extpprNames"]: extpprfilenames});
        }
        else
        {
            if(extpprfilenames.length!==0)
            {
              formData.set("extpprNames", extpprNames+","+extpprfilenames);
              setValues({ ...values, ["extpprNames"]: extpprNames+","+extpprfilenames});
            }
            else
            {
              formData.set("extpprNames", extpprNames);
              setValues({ ...values, ["extpprNames"]: extpprNames});
            }
        }


      const aFile = await Promise.all(   
        [...assignmentFiles].map(async (file) => {
          assignmentfilenames.push(file.name);
          const url = await upload(file);
          return url;
        })
      );

      if(assignment==="")
        {  
          formData.set(as, aFile);
          setValues({ ...values, [as]: aFile});
        }
        else
        {
          if(sFile.length!==0)
          {
            formData.set(as, assignment+","+aFile);
            setValues({ ...values, [as]: assignment+","+aFile});
          }
          else
          {
            formData.set(as, assignment);
            setValues({ ...values, [as]: assignment});
          }
        }
  
        if(assignmentNames==="")
        {  
            formData.set("assignmentNames", assignmentfilenames);
            setValues({ ...values, ["assignmentNames"]: assignmentfilenames});
        }
        else
        {
            if(assignmentfilenames.length!==0)
            {
              formData.set("assignmentNames", assignmentNames+","+assignmentfilenames);
              setValues({ ...values, ["assignmentNames"]: assignmentNames+","+assignmentfilenames});
            }
            else
            {
              formData.set("assignmentNames", assignmentNames);
              setValues({ ...values, ["assignmentNames"]: assignmentNames});
            }
        }
      
      setUploading(false);
  
    } catch (err) {
      console.log(err);
    }
  };

  const successMessage = () => (
    <div
      className="alert alert-success mt-3 p-2"
      style={{ display: updatedSubject ? "" : "none" }}
    >
      <h6>{updatedSubject} updated successfully</h6>
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

      <Button onSubmit={onSubmit} name="Update Subject Material" loading={loading}></Button>
      </form>
    </div>
  );
}