import React from 'react';



export default function(props) {
  return (
    <div>
      <h1>props.obj.id</h1>
      <img src={props.obj.icon} />
    </div>
 )
}
