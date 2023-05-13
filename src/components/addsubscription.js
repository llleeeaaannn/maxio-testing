import styles from '../styles/addsubscription.module.css';

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

  return (
    <div>

      <div>

      </div>

      <div>
        <h2>Create Subscription</h2>
        <form>

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
          <button type="button">Use Random Data</button>

        </form>
      </div>
    </div>
  )
}

export default AddSubscription;
