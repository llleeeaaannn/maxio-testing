// import styles from '../styles/addsubscription.module.css';
import { useState } from 'react';

const AddSubscription = () => {

  const [form, setForm] = useState({
    product_handle: 'membership',
    first_name: '',
    last_name: '',
    email: '',
    full_number: '',
    expiration_month: '',
    expiration_year: '',
  });

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const createSubscription = async (e) => {
    e.preventDefault();

    const formData = {
      subscription: {
        product_handle: form.product_handle,
        customer_attributes: {
          first_name: form.first_name,
          last_name: form.last_name,
          email: form.email,
        },
        credit_card_attributes: {
          full_number: form.full_number,
          expiration_month: form.expiration_month,
          expiration_year: form.expiration_year,
        },
      },
    };

    try {
      const response = await fetch('https:///frank-test.chargify.com/subscriptions.json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Basic ' + btoa('7ctFDGmlwi7j4ozwfGnnZIstPydLKTuBVKTfv3zgGA:x'),
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>

      <div>
        <button type="button">Use Random Data</button>
      </div>

      <div>
        <form onSubmit={createSubscription}>

          <h2>Create Subscription</h2>

          <div>
            <label>First Name:</label>
            <input name="first_name" value={form.first_name} onChange={updateForm} required />
          </div>

          <div>
            <label>Last Name:</label>
            <input name="last_name" value={form.last_name} onChange={updateForm} required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" value={form.email} onChange={updateForm} required />
          </div>

          <div>
            <label>Credit Card Number:</label>
            <input name="full_number" value={form.full_number} onChange={updateForm} required />
          </div>

          <div>
            <label>Credit Card Expiration Month:</label>
            <input name="expiration_month" value={form.expiration_month} onChange={updateForm} required />
          </div>

          <div>
            <label>Credit Card Expiration Year:</label>
            <input name="expiration_year" value={form.expiration_year} onChange={updateForm} required />
          </div>

          <button type="submit">Create Subscription</button>

        </form>
      </div>
    </div>
  )
}

export default AddSubscription;
