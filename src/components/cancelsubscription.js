import React, { useState } from 'react';

const CancelSubscription = () => {
  const [subscriptionId, setSubscriptionId] = useState('');

  const handleChange = (e) => {
    setSubscriptionId(e.target.value);
  };

  const handleSubmit = async (e) => {
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
    <div>
      <h2>Cancel Subscription</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Subscription ID:</label>
          <input type="text" value={subscriptionId} onChange={handleChange} required />
        </div>
        <button type="submit">Cancel Subscription</button>
      </form>
    </div>
  );
};

export default CancelSubscription;
