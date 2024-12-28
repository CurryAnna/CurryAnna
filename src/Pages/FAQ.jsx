import React, { useState } from "react";
import { faqs } from "../constants/constants";
const FAQ = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);

  const toggleVisibility = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  

  return (
    <div className="w-full flex justify-center items-center bg-black text-yellow-300">
      <div className="flex flex-col justify-center items-center w-[80vw] p-4">
        <h1 className="text-3xl font-mono">FAQ</h1>
        <hr className="w-full lg:mt-10 my-8" />

        {faqs.map((faq, index) => (
          <div className="w-full md:px-6 mb-4 font-mono" key={index}>
            <div className="mainHeading flex justify-between items-center w-full">
              <div>
                <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4">
                  <span className="lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold">
                    Q{index + 1}.
                  </span>
                  <label className="lg:text-2xl md:text-xl text-lg tracking-tighter">{faq.question}</label>
                </p>
                
              </div>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleVisibility(index)}
              >
                <img
                  className={`transform transition-transform duration-300 ${
                    visibleIndex === index ? "rotate-180" : ""
                  }`}
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                  alt="toggler"
                />
              </button>
            </div>
            <div className={`menu mt-6 w-full ${visibleIndex === index ? "" : "hidden"}`}>
              <p className="text-base leading-6 font-normal text-white tracking-tighter">{faq.answer}</p>
            </div>
            <hr />
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default FAQ;
