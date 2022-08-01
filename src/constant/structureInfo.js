import { MathJax } from "better-react-mathjax";

// const M = ({a, a1, a2}) =>   <span className="nobr">{a}<span className="supsub">{a2}<br />{a1}</span></span>

const inputsInfos = [
    { id: 1, name: 'Vyl', label: <MathJax inline={true}>{"`V_(yl)`"}</MathJax>, defaultValue:720,
        placeholder: "design force of lower SPD" },
    { id: 2, name: 'Vyu', label: <MathJax inline={true}>{"`V_(yu)`"}</MathJax>, defaultValue:600,
        placeholder: "design force of upper SPD" },
    ]

const infoDefaults = {
    Vyl: "600",
    Vyu: "600",
}

export {inputsInfos, infoDefaults}