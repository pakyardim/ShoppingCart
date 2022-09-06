import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = ( {children, amountInCart} ) => {

  return <div className="app">
    <Header amountInCart={amountInCart} />
    {children}
    <Footer/>
  </div>;
};

export default App;   
