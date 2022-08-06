import { MathJax } from "better-react-mathjax";
var id = 0;

const DCRs = [
    {
      id: id++,
      name: "MEJl",
      label: <MathJax inline={true}>{"`M_(EJ,l)`"}</MathJax>,
      defaultValue: null,
      description: "Moment Capacity of lower EJ",
      precision: 2,
    },
    
]

export default DCRs;