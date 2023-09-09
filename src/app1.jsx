import React from "react";
function But(props) {
    
  
    return (
      <div>
       <button onClick={props.onclick}>{props.name}</button>
      </div>
    );
  }
  export default But 


    