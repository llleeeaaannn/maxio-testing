import styles from '../styles/addsubscription.module.css';

const AddSubscription = () => {

  const [subscriptionData, setSubscriptionData] = useState({
    product_handle: 'membership',
    first_name: '',
    last_name: '',
    email: '',
    full_number: '',
    expiration_month: '',
    expiration_year: '',
  });

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
