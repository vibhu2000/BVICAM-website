import React from "react";

import Base from "../base";
import AddStartupForm from "./addStartupForm";

export default function AddStartup() {
  return (
    <Base
      title="Add a new notice"
      subtitle="Notice"
      Component={<AddStartupForm />}
    ></Base>
  );
}
