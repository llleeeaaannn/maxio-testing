import React, { useState, useEffect } from 'react';

const CancelSubscription = () => {
  const [subscriptionId, setSubscriptionId] = useState('');
  const [subscriptionIds, setSubscriptionIds] = useState([]);

  const fetchSubscriptionIds = async () => {
    try {
      const response = await fetch('http://localhost:3001/getsubscriptionids');
      const data = await response.json();

      console.log(data);

      if (Array.isArray(data)) {
        setSubscriptionIds(data);
      } else {
        throw new Error('Invalid response');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchSubscriptionIds();
  }, []);

  const cancelSubscription = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3001/cancelsubscription`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ subscriptionId })
      });

      if (response.ok) {
        console.log('Subscription cancelled successfully.');
      } else {
        console.error('Failed to cancel subscription.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="cancel-subscription">

      <h2>Cancel Subscription</h2>

      <form onSubmit={cancelSubscription}>
        <label htmlFor="subscriptionId">Subscription ID:</label>
        <select
          id="subscriptionId"
          value={subscriptionId}
          onChange={(e) => setSubscriptionId(e.target.value)}
          required
        >
          {subscriptionIds.map((id, index) => (
            <option key={index} value={id}>
              {id}
            </option>
          ))}
        </select>
        <button type="submit">Cancel Subscription</button>
      </form>
    </div>
  );
};

export default CancelSubscription;
