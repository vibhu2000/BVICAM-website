import React from "react";
import Base from "../base";
import AssignTeacherForm from "./assignteacherform";

export default function AssignTeacher() {
  return (
    <Base
    title="Assign Teacher"
    subtitle="Teacher"
    Component={<AssignTeacherForm />}
  ></Base>
  );
}