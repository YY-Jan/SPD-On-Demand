import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Canvas/Intro";
import Skill from "../components/Canvas/Skill";

const HomePage = (props) => {
  const [res, setRes] = useState(100);

  useEffect(() => {
    fetch("/optimize")
      .then((res) => res.json())
      .then((data) => {
        setRes(data.weight);
      });
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Home Page: check Weight?</h1>
			<div className="dark-mode">
			<Intro/>
			<Intro/> 
			<Intro/> 
			<Intro/> 
			<Intro/> 
			<Skill/>
			</div>

    </div>
  );
};

export default HomePage;
