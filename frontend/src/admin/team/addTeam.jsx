import React from "react";

import AddTeamForm from "./addTeamForm";

import Base from "../base";

export default function AddTeam() {
  return (
    <Base
      title="Add a new faculty member"
      subtitle="Faculty Member"
      Component={<AddTeamForm />}
    ></Base>
  );
}
