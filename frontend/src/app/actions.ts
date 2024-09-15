import axios from "axios";
import { server } from "../../server";

export const getEscrows = async ( email, access_token) => {
    try {
      const response = await axios.post(`${server}/escrows`, { email }, // Send the email in the request body
        {
          headers: {
            Authorization: `Bearer ${access_token}` // Add authorization header
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching escrow details:', error);
      throw error?.response?.data?.message || 'Failed to fetch escrow details';
    }
  };