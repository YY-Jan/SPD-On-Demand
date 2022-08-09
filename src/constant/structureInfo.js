import { MathJax } from "better-react-mathjax";

// const M = ({a, a1, a2}) =>   <span className="nobr">{a}<span className="supsub">{a2}<br />{a1}</span></span>
var id = 0;
const structure_1 = [
  {
    id: id++,
    name: "Vyl",
    label: <MathJax inline={true}>{"`V_(yl)`"}</MathJax>,
    defaultValue: 600,
    placeholder: "design force of lower SPD",
    unit: "kN",
  },
  {
    id: id++,
    name: "SVy",
    label: <MathJax inline={true}>{"`V_(yu)`"}</MathJax>,
    defaultValue: 600,
    placeholder: "design force of upper SPD",
    unit: "kN",
  },
  {
    id: id++,
    name: "e",
    label: <MathJax inline={true}>{"`e`"}</MathJax>,
    defaultValue: 0,
    placeholder: "Eccentricity of SPD location",
    unit: "mm",
  },
  {
    id: id++,
    name: "xi",
    label: <MathJax inline={true}>{"`xi`"}</MathJax>,
    defaultValue: 0,
    placeholder: "Vertical load effect",
    unit: "",
  },
  {
    id: id++,
    name: "theta_u",
    label: <MathJax inline={true}>{"`theta_(u)`"}</MathJax>,
    defaultValue: 0.025,
    placeholder: "Target Story drift",
    unit: "",
  },
  {
    id: id++,
    name: "story_drift",
    label: <MathJax inline={true}>{"`theta_(y)`"}</MathJax>,
    defaultValue: 0.01,
    placeholder: "Story drift when SPD yielding",
    unit: "",
  },
];

const structure_2 = [
  {
    id: id++,
    name: "lb",
    label: <MathJax inline={true}>{"`L_(b)`"}</MathJax>,
    defaultValue: 8000,
    placeholder: "Length of boundary beam",
    unit: "mm",
  },
  {
    id: id++,
    name: "lub",
    label: <MathJax inline={true}>{"`L_(ub)`"}</MathJax>,
    defaultValue: 3000,
    placeholder: "Unbraced Length of boundary beam",
    unit: "mm",
  },
  {
    id: id++,
    name: "Shl",
    label: <MathJax inline={true}>{"`h_(l)`"}</MathJax>,
    defaultValue: 3600,
    placeholder: "lower story height",
    unit: "mm",
  },
  {
    id: id++,
    name: "Shu",
    label: <MathJax inline={true}>{"`h_(u)`"}</MathJax>,
    defaultValue: 3600,
    placeholder: "upper story height",
    unit: "mm",
  },
  {
    id: id++,
    name: "SdcL",
    label: <MathJax inline={true}>{"`d_(c,L)`"}</MathJax>,
    defaultValue: 700,
    placeholder: "Depth of left column",
    unit: "mm",
  },
  {
    id: id++,
    name: "SdcR",
    label: <MathJax inline={true}>{"`d_(c,R)`"}</MathJax>,
    defaultValue: 700,
    placeholder: "Depth of right column",
    unit: "mm",
  },
];

const materials = [
  {
    id: id++,
    name: "E",
    label: <MathJax inline={true}>{"`E`"}</MathJax>,
    defaultValue: 200,
    placeholder: "Yonug's Module of material",
    unit: "kN/mm2",
  },
  {
    id: id++,
    name: "Fy_b",
    label: <MathJax inline={true}>{"`F_(y,b)`"}</MathJax>,
    defaultValue: 0.325,
    placeholder: "Steel yielding trength of boundary beam",
    unit: "kN/mm2",
  },
  {
    id: id++,
    name: "Fy_IC",
    label: <MathJax inline={true}>{"`F_(y,IC)`"}</MathJax>,
    defaultValue: 0.235,
    placeholder: "Steel yielding trength of IC",
    unit: "kN/mm2",
  },
  {
    id: id++,
    name: "Fy_EJ",
    label: <MathJax inline={true}>{"`F_(y,EJ)`"}</MathJax>,
    defaultValue: 0.325,
    placeholder: "Steel yielding trength of EJ",
    unit: "kN/mm2",
  },
  {
    id: id++,
    name: "Fy_s",
    label: <MathJax inline={true}>{"`F_(y,s)`"}</MathJax>,
    defaultValue: 0.325,
    placeholder: "Steel yielding trength of stiffeners",
    unit: "kN/mm2",
  },
]

const infoDefaults = 0;
const inputsInfos = structure_1.concat(structure_2)

export { inputsInfos, infoDefaults, structure_1, structure_2, materials };


