import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {

  const { random } = useContext(AppContext);

  return (
    <div>
      Home
    </div>
  )
}

export default Home;