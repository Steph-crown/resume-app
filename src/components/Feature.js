import React from 'react';
import './../css/Feature.css';


export default function Feature(props) {
  return (
    <div className='feature'>
      <div className='feature-icon'>
	<img src={props.obj.icon} />
      </div>
      <h3>{props.obj.title}</h3>
      <p>{props.obj.content}</p>
    </div>
  )
}
