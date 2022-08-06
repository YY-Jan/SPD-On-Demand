import { MathJax } from "better-react-mathjax";


var id = 0;
const weights = [
  {
    id: id++,
    name: "W_total",
    label: <MathJax inline={true}>{"`W_(t otal)`"}</MathJax>,
    description: "Total subassembly weight",
  },
  {
    id: id++,
    name: "W_b",
    label: <MathJax inline={true}>{"`W_(beam)`"}</MathJax>,
    description: "Boundary beam weight",
  },
  {
    id: id++,
    name: "W_PZ",
    label: <MathJax inline={true}>{"`W_(PZ)`"}</MathJax>,
    description: "Panel Zone weight",
  },
  {
    id: id++,
    name: "W_SPD_l",
    label: <MathJax inline={true}>{"`W_(SPDl)`"}</MathJax>,
    description: "Lower SPD weight",
  },
  {
    id: id++,
    name: "W_SPD_u",
    label: <MathJax inline={true}>{"`W_(SPDu)`"}</MathJax>,
    description: "Upper SPD weight",
  },
];

export default weights;
