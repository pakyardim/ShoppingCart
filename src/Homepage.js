import React from "react";
import cheese from "./assets/cheese.jpg";

const Homepage = () => {
  return (
    <main>
        <img className="cheese" src={cheese} alt="logo" />
        <h2>Marsüt Love of Milk and yeast</h2>
    </main>
  );
};

export default Homepage;
