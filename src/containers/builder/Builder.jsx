import React from 'react'
import Feature from '../../components/feature/Feature';
import './builder.css'

const Builder = () => (
    <div className="builder section__margin" >
    <div className="builder-feature">
      <Feature title="Why You Need Cover Letter Builder" text="A Cover Letter Builder streamlines your job application by helping you create a compelling narrative that showcases your unique skills and passion, making you stand out in the competitive job market." />
    </div>
    <div className="builder-heading">
      <h1 className="gradient__text">Land Your Dream Job: Optimise Your Application with a Customised Cover Letter!</h1>
      <p>Explore the Cover Letter Builder</p>
    </div>
    <div className="builder-container">
      <Feature title="Intuitive Resume Builder" text="Create impactful resumes effortlessly with our intuitive builder, which guides you through every step of crafting a professional resume that stands out." />
      <Feature title="Customized Cover Letter Assistant" text="Our intelligent assistant crafts personalized cover letters that highlight your resume and experiences, ensuring your application captures attention and resonates with employers." />
      <Feature title="Career Development Tools" text="Access a suite of tools designed to propel your career forward, including personalized coaching, skills assessments, and professional development courses." />
    </div>
  </div>
);

export default Builder
