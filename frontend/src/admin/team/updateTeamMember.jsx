import React from "react";
import { useParams } from "react-router-dom";

import Base from "../base";
import UpdateTeamForm from "./updateTeamForm";

export default function UpdateTeamMember() {
  let { memberId } = useParams();
  return (
    <Base
      title="Update the Faculty member"
      subtitle="Faculty Member"
      Component={<UpdateTeamForm memberId={memberId} />}
    ></Base>
  );
}
