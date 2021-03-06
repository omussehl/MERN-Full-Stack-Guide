import React from 'react';

import Input from '../../shared/components/FormElements/input';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[]}
        errorText="Please Enter a Valid Title"
      />
    </form>
  );
};

export default NewPlace;
