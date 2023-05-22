// import styles from '../styles/addsubscription.module.css';
import { useState } from 'react';

const CreateSubscription = () => {

  const [message, setMessage] = useState('');

  const [form, setForm] = useState({
    product_handle: '',
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
    setMessage('');

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
      const response = await fetch('http://localhost:3001/createsubscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        setMessage('Subscription Created');
        console.log(responseData.message);
        console.log(responseData.data);
      } else {
        setMessage('Subscription Failed to Create');
        throw new Error(responseData.error);
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setTimeout(() => {
      setMessage('');
    }, 5000);
  };

  return (
    <div className="add-subscription">

      <div>
        <form onSubmit={createSubscription}>

          <h2>Create Subscription</h2>

          <div>
            <label>Product:</label>
            <select name="product_handle" value={form.product_handle} onChange={updateForm} required>
              <option value="membership">Membership</option>
              <option value="season-ticket">Season Ticket</option>
              <option value="international-membership">International Membership</option>
            </select>
          </div>

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

        { message &&
          <p>{message}</p>
        }

      </div>
    </div>
  )
}

export default CreateSubscription;
