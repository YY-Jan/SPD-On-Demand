import { useState } from "react"
// import info from "../constant/structureInfo"
import './inputunit.css'

const InputUnit = (props) => {

    // console.log(info[props.name])
    // const designVariable = info[props.name]
    const { id, label, ...inputProps } = props
    const [v, setV] = useState("")

    return (
        <div className="InputUnit">
            <div className="varTag">
                <label>{label}</label>
                </div>
            <input {...inputProps} />
        </div>
    )
}

export default InputUnit

