import React,{ useEffect,useState } from "react";
import Base from "../base";
import AddResourcesForm from "./addResourcesForm";
import { getAllTeachers } from "../helper/adminApiCalls";

export default function AddResources() {

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
      title="Add a new subject material"
      subtitle="Resources"
      Component={<AddResourcesForm teacherName={username} subjectName={subjectname}/>}
    ></Base>
  );
}
