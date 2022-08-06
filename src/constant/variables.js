import { MathJax } from "better-react-mathjax";

var id = 0;
const beamVariables = [
  {
    id: id++,
    name: "db",
    label: <MathJax inline={true}>{"`d_(b)`"}</MathJax>,
    defaultValue: null,
    description: "Depth of boundary beam",
  },
  {
    id: id++,
    name: "bb",
    label: <MathJax inline={true}>{"`b_(b)`"}</MathJax>,
    defaultValue: null,
    description: "Width of boundary beam",
  },
  {
    id: id++,
    name: "tfb",
    label: <MathJax inline={true}>{"`t_(f,b)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of beam flange",
  },
  {
    id: id++,
    name: "twb",
    label: <MathJax inline={true}>{"`t_(w,b)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of beam web.",
  },
  {
    id: id++,
    name: "tdp",
    label: <MathJax inline={true}>{"`t_(dp)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of doubler plate.",
  },
];

const lowerSPDVariables = [
  {
    id: id++,
    name: "dSPDl",
    label: <MathJax inline={true}>{"`d_(SPDl)`"}</MathJax>,
    defaultValue: null,
    description: "Depth of lower SPD",
  },
  {
    id: id++,
    name: "bSPDl",
    label: <MathJax inline={true}>{"`b_(SPDl)`"}</MathJax>,
    defaultValue: null,
    description: "Width of lower SPD",
  },
  {
    id: id++,
    name: "tfSPDl",
    label: <MathJax inline={true}>{"`t_(f,SPDl)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of flange of lower SPD.",
  },
  {
    id: id++,
    name: "twEJl",
    label: <MathJax inline={true}>{"`t_(w,EJl)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of EJ web of lower SPD.",
  },
  {
    id: id++,
    name: "tw_ICl",
    label: <MathJax inline={true}>{"`t_(w,ICl)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of IC web of lower SPD.",
  },
  {
    id: id++,
    name: "etal",
    label: <MathJax inline={true}>{"`alpha_(ICl)`"}</MathJax>,
    defaultValue: null,
    description: "lower IC length over SPD length.",
    precision: 1,
  },
  {
    id: id++,
    name: "bsl",
    label: <MathJax inline={true}>{"`b_(sl)`"}</MathJax>,
    defaultValue: null,
    description: "stiffeners height of lower SPD.",
  },
  {
    id: id++,
    name: "ts_Ll",
    label: <MathJax inline={true}>{"`t_(sl)`"}</MathJax>,
    defaultValue: null,
    description: "stiffeners thickness of lower SPD.",
  },
]
const upperSPDVariables = [
  {
    id: id++,
    name: "dSPDu",
    label: <MathJax inline={true}>{"`d_(SPDu)`"}</MathJax>,
    defaultValue: null,
    description: "Depth of lower SPD",
  },
  {
    id: id++,
    name: "bSPDu",
    label: <MathJax inline={true}>{"`b_(SPDu)`"}</MathJax>,
    defaultValue: null,
    description: "Width of lower SPD",
  },
  {
    id: id++,
    name: "tfSPDu",
    label: <MathJax inline={true}>{"`t_(f,SPDu)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of flange of lower SPD.",
  },
  {
    id: id++,
    name: "twEJu",
    label: <MathJax inline={true}>{"`t_(w,EJu)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of EJ web of lower SPD.",
  },
  {
    id: id++,
    name: "tw_ICu",
    label: <MathJax inline={true}>{"`t_(w,ICu)`"}</MathJax>,
    defaultValue: null,
    description: "Thickness of IC web of upper SPD.",
  },
  {
    id: id++,
    name: "etau",
    label: <MathJax inline={true}>{"`alpha_(ICu)`"}</MathJax>,
    defaultValue: null,
    description: "lower IC length over SPD length.",
    precision: 1,
  },
  {
    id: id++,
    name: "bsu",
    label: <MathJax inline={true}>{"`b_(su)`"}</MathJax>,
    defaultValue: null,
    description: "stiffeners height of lower SPD.",
  },
  {
    id: id++,
    name: "ts_Lu",
    label: <MathJax inline={true}>{"`t_(su)`"}</MathJax>,
    defaultValue: null,
    description: "stiffeners thickness of lower SPD.",
  },
];

const SPDVariables = lowerSPDVariables.concat(upperSPDVariables)

export {beamVariables, SPDVariables, lowerSPDVariables, upperSPDVariables};
