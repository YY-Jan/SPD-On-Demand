import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Intro from "../components/Canvas/Intro";
import Skill from "../components/Canvas/Skill";
import HomeHeader from "../components/Header/HomeHeader";

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
      <HomeHeader/>
      <h1>Home Page: check Weight?</h1>
			<div className="dark-mode">
			<Intro/> 
			<Skill/>
			</div>

    </div>
  );
};

export default HomePage;
