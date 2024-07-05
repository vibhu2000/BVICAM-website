import React,{ useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import Base from "../base";
import UpdateResourcesForm from "./updateResourcesForm";
import { getAllTeachers } from "../helper/adminApiCalls";


const UpdateResources = () => {
  let { courseId } = useParams();

  const currentUser = JSON.parse(localStorage.getItem("jwt"));
  const username=currentUser.user.name;

  const [user, setUser] = useState([]);
  const [subjectname, setSubjectName] = useState("");

  const preload = () => {
    getAllTeachers().then((data) => {
      if (data.error) {
        console.log("Something went wrong. Try Again");
      } else {
        setUser(data);
      }
    });
  };

  useEffect(() => {
    preload();
    }, []);

  const subject=user.filter((sub) =>
    sub.teacherName === username
    );

  const changeSubName=(array)=>{
    array.map((s)=>{
      setSubjectName(s.subjectName);
      // console.log(s.subjectName);
    });
  }
  
  // console.log(subject);
  

  useEffect(()=>{
    changeSubName(subject);
  })

  // console.log(subjectname);
    
    return (
      <Base
      title="Update the subject material"
      subtitle="Resources"
      Component={<UpdateResourcesForm courseId={courseId} teacherName={username} subjectName={subjectname}/>}
    ></Base>
    );
}

export default UpdateResources
