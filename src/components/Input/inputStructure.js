// import "./inputStructure.css";
// import InputUnit from "./inputUnit";
// import { infoDefaults, inputsInfos } from "../../constant/structureInfo";
// import { useEffect, useState } from "react";
// import FirstRequest from "../request/first";

// const InputStructure = () => {
//   const [values, setValues] = useState(infoDefaults);
//   const [weights, setWeights] = useState(0);

//   const handleCheck = (e) => {
//     e.preventDefault();
//     const checkedData = new FormData(e.target);
//     setValues(Object.fromEntries(checkedData.entries()));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setWeights(await FirstRequest(values).then((res) => res.weight));
//   };

//   useEffect(()=>{
//     console.log(weights);
//     console.log(weights.W_EJ_l);
//     console.log(weights['W_b']);
//   }, [weights])

//   return (
//     <>
//       <div className="inputStructure">
//         <h1 className="text-3xl font-bold underline">
//           Hello world! test TailWind
//         </h1>
//         <form onSubmit={handleCheck}>
//           <div className="grid gap-6 mb-6 md:grid-cols-2">
//             <div>
//               {inputsInfos.map((input) => (
//                 <InputUnit key={input.id} {...input} />
//               ))}
//               <button>Check Input</button>
//             </div>
//             <div>
//               <textarea
//                 readOnly
//                 className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                 id="exampleFormControlTextarea1"
//                 rows="20"
//                 placeholder="Your structure information"
//                 value={
//                   "structure information: {" +
//                   Object.entries(values).map(([k, v]) => "\n" + k + ": " + v) +
//                   "},\n" +
//                   Object.entries(weights).map(([k, v]) => "\n" + k + ": " + v)
//                 }
//               />
//               <button onClick={handleSubmit}>Submit</button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default InputStructure;
