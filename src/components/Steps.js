import React from 'react';
import './../css/App.css';
import'./../css/Steps.css';
import Step from './Step';


export default function() {
  var steps = [
    {
      icon:"https://scessila.sirv.com/resume-builder/icons/edit-column.png",
      id: 1,
      title: 'Supply Your Details',
      content: 'Fill the form correctly with details about you and your work experiences. We provide you with example to make sure you use the best industry practice'
    },
    {
      icon:"https://scessila.sirv.com/resume-builder/icons/edit-column.png",  
      id: 2,                
      title: 'Choose A Template',
      content: "Make a selection from a full list of templates for your resume"
    },
    {
      icon:"https://scessila.sirv.com/resume-builder/icons/edit-column.png",   
      id: 3,                
      title: "Download",
      content: "And in less than 4 steps you have successfully and painlessly created your resume. Download it!"
    }
  ]

  steps = steps.map(x => 
    <Step key={x.id} obj={x} />
  )

  return (
    <div className='steps containn'>
      <div className='high'>
        <div className="highlight">
          Step By Step
        </div>
      </div>
      <h2 className='title'>
        Just In 3 Steps
      </h2>
      <div>
        {steps}
      </div>
    </div>
  )
}
