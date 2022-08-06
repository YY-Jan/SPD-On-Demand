import { useState } from "react";
import "./inputunit.css";

const InputUnit = (props) => {
  const { id, label, two, ...inputProps } = props;

  return (
    <div className="InputUnit ">
      <div className="varTag">
        <label>{label}</label>
      </div>
      {two ? (
        <div key={id}>
          <input className="w-12" {...inputProps} name={inputProps.name+"_min"}/>
          <input className="w-12" {...inputProps} name={inputProps.name+"_max"}/>
        </div>
      ) : (
        <input className="w-28 grow" {...inputProps} />
      )}
    </div>
  );
};

export default InputUnit;
