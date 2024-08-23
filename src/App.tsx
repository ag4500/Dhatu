import React from "react";
import DhaatuWebsite from "./landingPage";
import Navbar from "./navbar";
import ProductPage from "./productPage";

export default function App() {
  return (
    <div>
        <Navbar/>
        <DhaatuWebsite/>
        {/* <ProductPage/> */}
    </div>
  );
}
