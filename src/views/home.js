import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import AddSubscription from '../components/addsubscription';

const Home = () => {

  const { random } = useContext(AppContext);

  return (
    <div>

      <AddSubscription />

    </div>
  )
}

export default Home;
