import React from "react";
import { useState, useEffect } from "react";

import AnimationRevealPage from "./helpers/AnimationRevealPage.js";
import Footer from "./components/Footer";
import ContactUsForm from "./components/ContactUs";
import Blogs from "./components/BlogIndex"; 
import JsonData from "./components/data.json";


export default () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <AnimationRevealPage>
      <div id="property">
        <Blogs data ={landingPageData.Property} />
      </div>
      <div id="contact">
        <ContactUsForm/>
      </div>
      <Footer />
    </AnimationRevealPage>
  );
};
