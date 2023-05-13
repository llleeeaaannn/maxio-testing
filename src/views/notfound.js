import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const NotFound = () => {

  const { random } = useContext(AppContext);

  return (
    <div>
      404
    </div>
  )
}

export default NotFound;