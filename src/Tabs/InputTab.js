import { materials, structure_1, structure_2 } from "../constant/structureInfo";
import InputUnit from "../components/Input/inputUnit";
import {
  beamVariables,
  lowerSPDVariables,
  upperSPDVariables,
} from "../constant/variables";
import { useState } from "react";

const InputTab = (props) => {
  const { handleCheck, handleSubmit } = { ...props };
  const [useLimit, setUseLimit] = useState(false);

  return (
    <div className="p-2">
      <form onSubmit={handleSubmit}>
        <div className="flex bg-slate-300 p-3 m-2">
          {[structure_1, structure_2, materials].map((v, i) => (
            <div key={i} className="w-1/4 px-1">
              {v.map((input) => (
                <InputUnit key={input.id} {...input} />
              ))}
            </div>
          ))}
          <div className="w-1/4 p-2 flex flex-col gap-5 bg-sky-50">
            <div className=" flex items-center mb-4 pl-2 bg-sky-600">
              <input
                id="default-checkbox"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => {
                  setUseLimit(!useLimit);
                }}
              />
              <label
                htmlFor="default-checkbox"
                className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
              >
                Dimension Limits
              </label>
            </div>
            <div>
            <label
              htmlFor="types"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
            >
              Select a SPD-MRF type
            </label>
            <select
              id="types"
              defaultValue="Single"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            >
              {/* dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 */}
              <option value="Single">
                Single Type
              </option>
              <option value="Double">Double Type</option>
            </select>
            </div>
            <button>Check Input</button>
            <button
              // onClick={handleSubmit}
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Submit
            </button>
          </div>
        </div>
        <div>
          <div
            className={`w-full bg-amber-50 p-3 m-2 ${useLimit ? "" : "hidden"}`}
          >
            <div className="flex">
              {[beamVariables, lowerSPDVariables, upperSPDVariables].map(
                (vs, i) => (
                  <div key={i} className="w-1/3">
                    <div className="ml-0 grid grid-cols-6 place-items-center">
                      <div ></div>
                      <label className="col-span-2">Min</label>
                      <label className="col-span-2">Max</label>
                    </div>
                    {vs.map((input) => (
                      <InputUnit key={input.id} {...input} two={true} />
                    ))}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputTab;

{
  /* <div className="w-1/3">
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
</div> */
}
