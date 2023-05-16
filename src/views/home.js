import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import CreateSubscription from '../components/createsubscription';
import CancelSubscription from '../components/cancelsubscription';

const Home = () => {

  const { random } = useContext(AppContext);

  return (
    <div>

      <CreateSubscription />

      <br />

      <CancelSubscription />

    </div>
  )
}

export default Home;
