import React from "react";
import './ValidationComponent.css';

const ValidationComponent = (props) => {
  let validationMessage = '';
  let classes = [];
  if (props.length <= 5) {
    validationMessage = 'Text too short';
    classes.push('short');
  }
  if (props.length > 5) {
    validationMessage = 'Text long enough';
    classes.push('long')
  }
  
  return (
    <div>
      <p className={classes.join(' ')}>{validationMessage}</p>
    </div>
  );
};

export default ValidationComponent;
