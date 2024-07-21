import React, { useState } from "react";
import "../../../assets/BlogPostForm.css";
import Topic from "./Topic";
import Title from "./Title";
const BlogPostForm: React.FC = () => {
  const steps = [
    { title: "Topic" },
    { title: "Title" },
    { title: "Outline" },
    { title: "Blog Post" },
  ];
  const [activeStep, setActiveStep] = useState(2);


  return (
    <div className="blog-post-form">
      <h2 className="blog-post-header">Create Blog Post</h2>
      <div className="steps">
        {steps.map((step, index) => {
          return (
            <div className={
              steps.length > index+1
                ? "step nomal-step"
                : "step"
            }>

              <div
                onClick={()=>{setActiveStep(index+1)}}
                className={
                  activeStep >= index + 1
                    ? "step-index step-index-active"
                    : "step-index"
                }
              >
                {index + 1}
              </div>
              <div
                className={
                  activeStep >= index + 1
                    ? "step-title step-title-active"
                    : "step-title"
                }
              >
                {step.title}
              </div>
              {index < steps.length - 1 && (
                <div className="step-bar-box">
                  <div
                    className={
                      activeStep > index + 1
                        ? "step-bar step-bar-active"
                        : "step-bar"
                    }
                  ></div>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {activeStep==1&&<Topic startWriting={()=>{setActiveStep(2)}}></Topic>}
      {activeStep==2&&<Title></Title>}
    </div>
  );
};

export default BlogPostForm;
