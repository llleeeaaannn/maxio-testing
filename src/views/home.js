import { useState, useEffect, useContext } from 'react';
import { AppContext } from '../App';
import CreateSubscription from '../components/createsubscription';
import CancelSubscription from '../components/cancelsubscription';

const Home = () => {

  return (
    <div id="homepage">

      <CreateSubscription />

      <CancelSubscription />

    </div>
  )
}

export default Home;
