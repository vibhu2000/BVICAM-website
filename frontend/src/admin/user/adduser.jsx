import React from "react";
import Base from "../base";
import AddUserForm from "./adduserform";

export default function AddUser() {
  return (
    <Base
    title="Create User"
    subtitle="User"
    Component={<AddUserForm />}
  ></Base>
  );
}