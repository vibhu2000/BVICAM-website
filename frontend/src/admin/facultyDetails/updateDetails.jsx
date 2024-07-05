import React, { useEffect, useState } from "react";
import { getAllTeam } from "../helper/adminApiCalls";
import Base from "../base";
import DisplayDetails from "./displayDetails";

export default function UpdateDetails() {
    const currentUser = JSON.parse(localStorage.getItem("jwt"));
    const memberName=currentUser.user.email;

    const [team, setTeam] = useState([]);
    const [memberId, setMemberId] = useState("");


    const preload = () => {
      getAllTeam().then((data) => {
        if (data.error) {
          console.log("Something went wrong. Try Again");
        } else {
          setTeam(data);
        }
      });
    };
  
    useEffect(() => {
      preload();
    }, []);

    const member = team.filter((n) =>
      n.email === memberName
    );

    const changeMemberId=(array)=>{
        array.map((s)=>{
          setMemberId(s._id);
          console.log(s._id);
        });
      }
    
      useEffect(()=>{
        changeMemberId(member);
      });
        
      console.log("member",member);
        
    return (
        <Base
            title={currentUser.user.name}
            subtitle="Profile"
            Component={<DisplayDetails memberId={memberId} member={member[0]} />}
        ></Base>
    );
}
