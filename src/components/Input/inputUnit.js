const InputUnit = (props) => {
  const { id, label, two, unit, ...inputProps } = props;

  return (
    <div className=" flex flex-row ">
      <div className="w-1/4 grid place-items-center">
        <label>{label}</label>
      </div>
      {two ? (
        <div key={id} className="flex flex-row ">
          <input
            {...inputProps}
            name={inputProps.name + "_min"}
            className="w-1/2 mt-1 ml-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
          />
          <input
            {...inputProps}
            name={inputProps.name + "_max"}
            className="w-1/2 mt-1 ml-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
          />
        </div>
      ) : (
        <input
          {...inputProps}
          className="w-1/2 mt-1 ml-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
        />
      )}
      <label className="w-1/3 self-end">{unit}</label>
    </div>
  );
};

export default InputUnit;
