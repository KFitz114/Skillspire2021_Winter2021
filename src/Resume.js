import './Resume.css';
import Info from './Personal.js';
import Objectives from './Objectives.js';
import About from './Aboutme.js';
import Experience from './Experience.js';
import Education from './Education.js';
import React, { Component} from 'react';
class Resume extends Component {
  render()  {
    return(
//function App() {
 // return (
    <div className="Resume">
      <header>
      </header>
        <div className="flex">
          <div className="title">
            <h1><u>My Resume</u></h1>
            <h6> (created in React)</h6>
          </div>
          <div className="personal-info">
            <Info name="Keegan FitzGerald" email="Keegan.fitzgerald@yahoo.com" cell="484-213-0234" />
          </div>
          <div className="objectives">
            <Objectives objectiveOne="To get a job that will improve my skills" objectiveTwo="To work in a place that will encourage my growth as a developer" objectiveThree="Diversify my portfolio and increase amount of coding languages I know" />
          </div>
          <div className="about-me">
            <About aboutMeOne="Originally, California but currently live and work in Connecticut" aboutMeTwo="Spent the last decade as a submarine IT Specialist in the U.S. Navy" aboutMeThree="Hobbyist homesteader raising two kids, dogs, and thirteen ducks"/>
          </div>
          <div className="experience">
            <Experience experienceOne="for JP automive. Worked six months before leaving for Navy" experienceTwo="onboard USS Kentucky for three years, specialized in electronics and computers" experienceThree="on board USS South Dakota for 2 years, specialized in server management, trouble tickets, and cyber security" />
          </div>
          <div className="education">
            <Education educationOne="Liberty High School with a diploma in 2009" educationTwo="Coastline Community College with an AA in Electronics in 2018" educationThree="Southern New Hampshire University for a BS in Cybersecurity" />
          </div>
        </div>
    </div>
    );
    }
}

export default Resume;
