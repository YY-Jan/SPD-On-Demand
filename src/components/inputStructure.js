import "./inputStructure.css";
import InputUnit from "./inputUnit";
import { infoDefaults, inputsInfos } from "../constant/structureInfo";
import { useEffect, useState } from "react";

const InputStructure = () => {
    const [values, setValues] = useState(infoDefaults);

    const handleCheck = (e) => {
        e.preventDefault();
        const checkedData = new FormData(e.target);
        setValues(Object.fromEntries(checkedData.entries()));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // const checkedData = new FormData(e.target);
        console.log("Reddy to submit: ", values);
    };

    useEffect(() => {
        console.log("Effect: ", values);
    }, [handleCheck]);

    return (
        <div className="inputStructure">
            <h1 className="text-3xl font-bold underline">
                Hello world! test TailWind
            </h1>
            <form onSubmit={handleCheck}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                    <div>
                        {inputsInfos.map((input) => (
                            <InputUnit key={input.id} {...input} />
                        ))}
                        <button>Check</button>
                    </div>
                    <div>
                        <textarea
                            readOnly
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            id="exampleFormControlTextarea1"
                            rows="8"
                            placeholder="Your structure information"
                            value={
                                "structure information: {" +
                                Object.entries(values).map(
                                    ([k, v]) => "\n" + k + ": " + v
                                )
                            }
                        />
                        <button onClick={handleSubmit}>Check2</button>
                    </div>
                </div>
            </form>

            {/* form-control blockw-fullpx-3py-1.5text-basefont-normaltext-gray-700bg-white bg-clip-paddingborder border-solid border-gray-300roundedtransitionease-in-outm-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none */}
        </div>
    );
};

export default InputStructure;
