// import logo from '/SPD.png';
import weights from "../constant/weights";
import {
  beamVariables,
  lowerSPDVariables,
  upperSPDVariables,
} from "../constant/variables";
import DELTAS from "../constant/deltas";


const ResultTab = (props) => {
  const { weight, dimension, delta } = { ...props };
  const createTable = (tableName, vars, vals, color, col=1, row=1) => (
    <table className={`w-full h-full col-span-${col} row-span-${row} self-start table-auto border-spacing-2 border-separate bg-${color}-50`}>
      <thead>
        <tr >
          <td colSpan="3">
            <span className={`inline-block text-sm  font-semibold py-1 px-3 rounded text-${color}-600 bg-${color}-200 uppercase last:mr-0 mr-1 `}>
              {tableName}
            </span>
          </td>
        </tr>
        <tr>
          <th className="border-b-2 border-slate-500">Item</th>
          <th className="border-b-2 border-slate-500">Value</th>
          <th className="border-b-2 border-slate-500">Description</th>
        </tr>
      </thead>
      <tbody>
        {vars.map((v) => (
          <tr key={v.id}>
            <td>{v.label}</td>
            <td>{vals ? vals[v.name].toFixed(v.precision)  : null}</td>
            <td className="text-sm">{v.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="w-full grid grid-cols-6 gap-3 place-items-center">
      {createTable("weight", weights, weight, "emerald", 2, 1)}
      {createTable("delta ", DELTAS, delta, "amber", 2, 1)}
      <img src="/SPD.png" className="object-contain h-60 w-48" alt="..." />
      {createTable("beam ", beamVariables, dimension, "sky", 2, 1)}
      {createTable("lower SPD", lowerSPDVariables, dimension, "sky",  2, 1)}
      {createTable("upper SPD", upperSPDVariables, dimension, "sky", 2, 1)}
    </div>
  );
};

export default ResultTab;
