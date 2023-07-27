import React, {useState, useEffect} from "react";
import "./Dashboardcontent.css";

const Dashboardcontent = () => {
    const [index , setIndex] = useState(0);
  const images = [
    "insurance.jpg",
    "health-insurance-image.jpg",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="split-page">
      <div className="image-section">
        <img src={images[index % images.length]} alt="health-insurance" width={600} height={400}/>
      </div>
      <div className="text-section">
      <h2>Health Insurance</h2>
      <p>
      Health insurance takes care of your medical expenses and ensures that out-of-pocket expenses are curtailed up to the Sum insured</p>
      <p> A health insurance policy ensures that you can avail cashless treatment at a network hospital, typically covering 30 days and 60 days pre and post hospitalization, respectively, in most of the Health Insurance plans. </p>
      <p>One can add value to the Base Health Insurance Plan by complementing them with additional benefits such as Personal Accident (PA) Cover, Critical Illness (CI) Cover, etc. These products are available at a very nominal cost adding benefits, which are not a part of the Base Health Insurance plan. For Example, A PA plan helps by providing coverage for disability, which is typically not covered under the basic health insurance plan. An individual needs not go through any waiting period and medical checkups for a PA cover </p>
      <p>One can also invest on one of the popular senior citizen health insurance policies and ensure comprehensive security for their elderly parents or secure their old age that often brings along several ailments that require expensive medical treatment. </p>
    </div>
    </div>
  );
};

export default Dashboardcontent;