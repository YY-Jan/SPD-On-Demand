import DCRs from "../constant/DCRs";


const DCRTab = (props) => {
    const { dcr } = { ...props };

    const createTable = (tableName, vars, vals, color, col=1, row=1) => (
      <table className={`w-full col-span-${col} row-span-${row} self-start table-auto border-spacing-2 border-separate bg-${color}-50`}>
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
              <td>{vals ? vals[v.name].toFixed(v.precision) : null}</td>
              <td className="text-xs">{v.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  
    return (
      <div className="w-full grid grid-cols-2 gap-3 place-items-center">
        {createTable("SPD", DCRs, dcr, "emerald", 1, 1)}
        {createTable("Beam", DCRs, dcr, "emerald", 1, 1)}
      </div>
    );
  };
  
  export default DCRTab;
  