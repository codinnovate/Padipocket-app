'use client';
import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { server } from '../../../../server';
import Loader from '@/components/Loader';
import { UserContext } from '@/context';
import Button from '@/components/ui/button';
import FormInput from '@/components/ui/FormInput';

const Profile = () => {
  const { userAuth: { access_token } } = useContext(UserContext);

  const [addressData, setAddressData] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: '',
    country: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch current user address to populate the form (optional)
  const fetchUserAddress = async () => {
    try {
      const response = await axios.get(
        `${server}/profile`, // Assuming this route fetches user profile including the address
        {
          headers: {
            Authorization: `Bearer ${access_token}` // Add authorization header
          }
        }
      );
      setAddressData(response?.data?.user?.address);
      console.log(response);
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Could not fetch address data');
    }
  };

  useEffect(() => {
    fetchUserAddress();
  }, [access_token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.put(
        `${server}/profile`, // Ensure your backend route is designed to accept only address updates
        { address: addressData },
        {
          headers: {
            Authorization: `Bearer ${access_token}` // Add authorization header
          }
        }
      );
      setSuccess('Address updated successfully!');
      setLoading(false);
    } catch (err) {
      console.log(err);
      setError('An error occurred while updating address');
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  
  return (
    <div className="flex flex-col gap-3 p-2">
      <h1 className='text-primary font-medium text-xl uppercase'>Update Address</h1>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <FormInput
          label='Street'
          type="text"
          placeholder="41, joel Akinson road"
          name="street"
          value={addressData.street}
          onChange={handleChange}
          required
        />
        <FormInput
          label='City'
          type="text"
          name="city"
          value={addressData.city}
          onChange={handleChange}
          required
        />
        <FormInput
          label='State'
          type="text"
          name="state"
          value={addressData.state}
          onChange={handleChange}
          required
        />
        <FormInput
          label='Postal Code'
          type="text"
          name="postalCode"
          value={addressData.postalCode}
          onChange={handleChange}
        />
        <FormInput
          label='Country'
          type="text"
          placeholder='e.g Nigeria'
          name="country"
          value={addressData.country}
          onChange={handleChange}
        />
        <Button
          onClick={handleSubmit}
          type="submit" disabled={loading}
          title={loading ? 'Updating...' : 'Update Address'}
        />
      </form>
    </div>
  );
};

export default Profile;
