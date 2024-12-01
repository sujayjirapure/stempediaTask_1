import React from 'react';
import { useDispatch } from 'react-redux';
import { setValue } from '../redux/valueSlice';

const ComponentB = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setValue(e.target.value));
  };

  return (
    <div>
      <h2>Component B</h2>
      <input type="text" onChange={handleChange} placeholder="Type something..." />
    </div>
  );
};

export default ComponentB;
