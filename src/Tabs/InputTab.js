import { inputsInfos, materials } from "../constant/structureInfo";
import InputUnit from "../components/Input/inputUnit";
import {beamVariables, SPDVariables} from "../constant/variables";
import { useState } from "react";

const InputTab = (props) => {
  const { handleCheck, handleSubmit, weight, values } = { ...props };
  const [useLimit, setUseLimit] = useState(false);
  const allVariables = beamVariables.concat(...SPDVariables)

  return (
    <div>
      <div className="flex items-center mb-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          onChange={() => {
            setUseLimit(!useLimit);
          }}
        />
        <label
          htmlFor="default-checkbox"
          className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Default checkbox
        </label>
      </div>

      <form onSubmit={handleCheck}>
        {/* <div className="grid gap-6 mb-6 md:grid-cols-3"> */}
        <div className="w-11/12">
          <div className="flex">
            <div className="w-1/2">
              {inputsInfos.map((input) => (
                <InputUnit key={input.id} {...input} />
              ))}
            </div>

            <div className="w-1/2">
              {materials.map((input) => (
                <InputUnit key={input.id} {...input} />
              ))}

            </div>
            {useLimit ? (
            <div className="w-1/2">
              {
              allVariables.map((input) => (
                <InputUnit key={input.id} {...input} two={true} />
              ))}
            </div>
          ) : (
            <></>
          )}
          </div>
          
                        <button>Check Input</button>
              <button onClick={handleSubmit}>Submit</button>
          {/* <div className="w-1/3">
            <textarea
            readOnly
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="exampleFormControlTextarea1"
            rows="20"
            placeholder="Your structure information"
            value={
              "structure information: {" +
              Object.entries(values).map(([k, v]) => "\n" + k + ": " + v) +
              "},\n"
            }
          />
            <button onClick={handleSubmit}>Submit</button>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default InputTab;
