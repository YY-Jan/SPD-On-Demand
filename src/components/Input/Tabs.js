import {  useEffect, useState } from "react";
import Navbar from "../Navbar";
import "./Tab.css";

import { infoDefaults, inputsInfos  } from "../../constant/structureInfo";
import FirstRequest from "../request/first";
import InputTab from "../../Tabs/InputTab";
import ResultTab from "../../Tabs/ResultTab";
import DCRTab from "../../Tabs/DCRTab";

const [tabInput,tabWeight, dcrTab] = [1,2,3]

const Tabs = () => {
  const [tabState, setTabState] = useState(1);
  const [values, setValues] = useState(infoDefaults);
  const [weight, setWeights] = useState(0);
  const [dimension, setDimension] = useState(0);
  const [delta, setDelta] = useState(0);
  const [dcr, setDCR] = useState(0);

  const toggleTab = (index) => {
    setTabState(index);
  };

  const handleCheck = (e) => {
    e.preventDefault();
    const checkedData = new FormData(e.target);
    const inputObject = Object.fromEntries(checkedData.entries())
    var tmp = Object()
    inputsInfos.forEach( (v)=> {
      tmp[v.name] = inputObject[v.name]
    })
    setValues(tmp);
    setValues(inputObject);
    console.log(values);
    console.log(weight)
    console.log(dimension)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await FirstRequest(values).then((res) => {
    setWeights(res.weight);
    setDimension(res.dimensions);
    setDelta(res.delta);
    setDCR(res.DCR);
  })

    // setWeights();
    // setWeights(await FirstRequest(values).then((res) => res.weight));
  };

  // useEffect(()=>{
  //   console.log(weight)
  // },[weight])

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={tabState === tabInput ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(tabInput)}
          >
            Input
          </button>
          <button
            className={tabState === tabWeight ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(tabWeight)}
          >
            Results
          </button>
          <button
            className={tabState === dcrTab ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(dcrTab)}
          >
            DCR
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={tabState === tabInput ? "content  active-content" : "content"}
          >
            <InputTab {...{handleCheck, handleSubmit, weight, values}}/>
          </div>

          <div
            className={tabState === tabWeight ? "content  active-content" : "content"}
          >
            <ResultTab {...{weight, dimension, delta}}/>
          </div>
          <div
            className={tabState === dcrTab ? "content  active-content" : "content"}
          >
            <DCRTab {...{dcr}}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
