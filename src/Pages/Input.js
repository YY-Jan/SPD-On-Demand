import React, { useState } from "react";
import InputStructure from "../components/inputStructure";
import Navbar from "../Navbar";

const InputPage = (props) => {
  const [res, setRes] = useState(100);

  return (
    <>
      <Navbar />
      <h1>Input Structure Information</h1>
      <InputStructure />
    </>
  );
};

export default InputPage;
