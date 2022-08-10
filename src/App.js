import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Tabs from "./components/Input/Tabs";

const App = () => {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p>Run Me -{'>'} {res}</p>
    //   </header>
    // basename={process.env.PUBLIC_URL}
    <>
      <HashRouter basename="/">
        <Routes>
          <Route exact path="/tabs" element={<Tabs />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
    // </div>
  );
};

export default App;
