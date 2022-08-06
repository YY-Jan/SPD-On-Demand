import { MathJax } from "better-react-mathjax";
var id = 0;

const DELTAS = [
    {
      id: id++,
      name: "total",
      label: <MathJax inline={true}>{"`Delta_(t otal)`"}</MathJax>,
      defaultValue: null,
      description: "total drift",
      precision: 1,
      unit: "mm",
    },
    {
      id: id++,
      name: "drift",
      label: <MathJax inline={true}>{"`theta_(y)`"}</MathJax>,
      defaultValue: null,
      description: "yielding story drift",
      precision: 4,
      unit: "",
    },
]

export default DELTAS;