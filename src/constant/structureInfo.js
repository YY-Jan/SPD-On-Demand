import { MathJax } from "better-react-mathjax";

// const M = ({a, a1, a2}) =>   <span className="nobr">{a}<span className="supsub">{a2}<br />{a1}</span></span>
var id = 0;
const inputsInfos = [
  {
    id: id++,
    name: "Vyl",
    label: <MathJax inline={true}>{"`V_(yl)`"}</MathJax>,
    defaultValue: 600,
    placeholder: "design force of lower SPD",
  },
  {
    id: id++,
    name: "Vyu",
    label: <MathJax inline={true}>{"`V_(yu)`"}</MathJax>,
    defaultValue: 600,
    placeholder: "design force of upper SPD",
  },
  {
    id: id++,
    name: "lb",
    label: <MathJax inline={true}>{"`L_(b)`"}</MathJax>,
    defaultValue: 8000,
    placeholder: "Length of boundary beam",
  },
  {
    id: id++,
    name: "lub",
    label: <MathJax inline={true}>{"`L_(ub)`"}</MathJax>,
    defaultValue: 3000,
    placeholder: "Unbraced Length of boundary beam",
  },
  {
    id: id++,
    name: "hl",
    label: <MathJax inline={true}>{"`h_(l)`"}</MathJax>,
    defaultValue: 3600,
    placeholder: "lower story height",
  },
  {
    id: id++,
    name: "hu",
    label: <MathJax inline={true}>{"`h_(u)`"}</MathJax>,
    defaultValue: 3600,
    placeholder: "upper story height",
  },
  {
    id: id++,
    name: "e",
    label: <MathJax inline={true}>{"`e`"}</MathJax>,
    defaultValue: 0,
    placeholder: "Eccentricity of SPD location",
  },
  {
    id: id++,
    name: "story_drift",
    label: <MathJax inline={true}>{"`theta_(u)`"}</MathJax>,
    defaultValue: 0.1,
    placeholder: "Story drift when SPD yielding",
  },

];

const materials = [
  {
    id: id++,
    name: "E",
    label: <MathJax inline={true}>{"`E`"}</MathJax>,
    defaultValue: 200,
    placeholder: "Yonug's Module of material",
  },
  {
    id: id++,
    name: "Fyb",
    label: <MathJax inline={true}>{"`F_(y,b)`"}</MathJax>,
    defaultValue: 0.325,
    placeholder: "Steel yielding trength of boundary beam",
  },
  {
    id: id++,
    name: "FyIC",
    label: <MathJax inline={true}>{"`F_(y,IC)`"}</MathJax>,
    defaultValue: 0.235,
    placeholder: "Steel yielding trength of IC",
  },
  {
    id: id++,
    name: "FyEJ",
    label: <MathJax inline={true}>{"`F_(y,EJ)`"}</MathJax>,
    defaultValue: 0.325,
    placeholder: "Steel yielding trength of EJ",
  },
  {
    id: id++,
    name: "Fys",
    label: <MathJax inline={true}>{"`F_(y,s)`"}</MathJax>,
    defaultValue: 0.325,
    placeholder: "Steel yielding trength of stiffeners",
  },
]

const infoDefaults = 0;


export { inputsInfos, infoDefaults, materials };

// 'i_Story', 'xi', 'lb', 'Vyratio', 'type', 'opt_type',
// 'e', 'e1', 'e2',
// 'E', 'w', 'Ry', 'Fy_IC', 'Fy_EJ', 'Fy_s', 'Fy_b',
// 'nK', 'stiffiner_design', 'theta_u', 'story_drift',
// # 'n_stiffeners',
// 'SVy', 'Shl', 'Shu', 'SdcL', 'SdcR'
