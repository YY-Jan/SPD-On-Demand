import weights from "../constant/weights";
import {
  beamVariables,
  lowerSPDVariables,
  upperSPDVariables,
} from "../constant/variables";
import DELTAS from "../constant/deltas";

const colors = {
  sky: { table: "bg-sky-50", txt: "text-sky-600", span: "bg-sky-200" },
  emerald: { table: "bg-emerald-50", txt: "text-emerald-600", span: "bg-emerald-200" },
  amber: { table: "bg-amber-50", txt: "text-amber-600", span: "bg-amber-200" },
};
const rowSpan = {1:'row-span-1', 2:'row-span-2'};
const colSpan = {1:'col-span-1', 2:'col-span-2'};

const ResultTab = (props) => {
  const { weight, dimension, delta } = { ...props };
  const createTable = (tableName, vars, vals, color, col = 1, row = 1) => (
    <table
      className={`w-full h-full ${colSpan[col]} ${rowSpan[row]} self-start table-auto border-spacing-2 border-separate ${color.table}` }
    >
      <thead>
        <tr>
          <td colSpan="3">
            <span
              className={`inline-block text-sm  font-semibold py-1 px-3 rounded uppercase last:mr-0 mr-1 ${color.txt} ${color.span}`}
            >
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
            <td>{vals ? vals[v.name].toFixed(v.precision) : null}</td>
            <td className="text-sm">{v.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="w-full grid grid-cols-6 gap-3 place-items-center">
      {createTable("weight", weights, weight, colors.emerald, 2, 1)}
      {createTable("delta ", DELTAS, delta, colors.amber, 2, 1)}
      <img src="./SPD.png" className="object-contain h-60 w-48" alt="SPD" />
      {createTable("beam ", beamVariables, dimension, colors.sky, 2, 1)}
      {createTable("lower SPD", lowerSPDVariables, dimension, colors.sky, 2, 1)}
      {createTable("upper SPD", upperSPDVariables, dimension, colors.sky, 2, 1)}
    </div>
  );
};

export default ResultTab;
