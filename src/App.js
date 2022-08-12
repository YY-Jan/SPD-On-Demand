import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home";
import Tabs from "./components/Input/Tabs";

const App = () => {
  return (
    <>
      <HashRouter basename="">
        <Routes>
          <Route exact path="/tabs" element={<Tabs />} />
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
