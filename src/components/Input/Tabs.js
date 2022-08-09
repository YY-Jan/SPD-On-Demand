import {  useEffect, useState } from "react";
import "./Tab.css";

import { infoDefaults, inputsInfos, materials  } from "../../constant/structureInfo";
import { allVariables } from "../../constant/variables";
import FirstRequest from "../request/first";
import InputTab from "../../Tabs/InputTab";
import ResultTab from "../../Tabs/ResultTab";
import DCRTab from "../../Tabs/DCRTab";

import Header from "../Header/Header";
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
    // const checkedData = new FormData(e.target);
    // const inputObject = Object.fromEntries(checkedData.entries())
    // var tmp = Object()
    // const inputs = inputsInfos.concat(materials)
    // inputs.forEach( (v)=> {
    //   tmp[v.name] = inputObject[v.name]
    // })
    // setValues(tmp);
    // setValues(inputObject);
    // console.log(values);
    // console.log(weight)
    // console.log(dimension)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const checkedData = new FormData(e.target);
    const inputObject = Object.fromEntries(checkedData.entries())
    const inputs = inputsInfos.concat(materials)
    var tmp = Object()
    inputs.forEach( (v)=> {
      tmp[v.name] = inputObject[v.name]
    })
    // setValues(inputObject);
    setValues(tmp);
    console.log(values);

    console.log(inputObject)
    var limits = Object()
    allVariables.forEach( (v)=> {
      limits[v.name+"_min"] = inputObject[v.name+"_min"]
      limits[v.name+"_max"] = inputObject[v.name+"_max"]
    })
    console.log(limits)

    await FirstRequest({values:tmp, limits}).then((res) => {
    setWeights(res.weight);
    setDimension(res.dimensions);
    setDelta(res.delta);
    setDCR(res.DCR);
  })
  };

  return (
    <>
    <Header/>
      <div className="tab-container">
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
