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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>

      <div>

      </div>

      <div>
        <button type="button">Create Subscription with random data</button>
      </div>

    </div>
  )
}

export default AddSubscription;
