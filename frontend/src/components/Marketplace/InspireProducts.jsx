'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function InspireProducts() {
  const [userQuery, setUserQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleQueryChange = (e) => {
    setUserQuery(e.target.value);
  };

  const fetchRecommendations = async () => {
    try {
      // Replace with your OpenAI API key and endpoint
      const openaiApiKey = 'YOUR_OPENAI_API_KEY';
      const openaiEndpoint = 'https://api.openai.com/v1/chat/completions';

      const prompt = `Recommend products for a ${userQuery}. The products should be in the price range of $13 to $15.`;

      const response = await axios.post(
        openaiEndpoint,
        {
          model: 'gpt-3.5-turbo', // or any other model you're using
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Authorization': `Bearer ${openaiApiKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const recommendationText = response.data.choices[0].message.content;
      setRecommendations(recommendationText.split('\n').filter(Boolean)); // Assuming each recommendation is on a new line
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      toast.error('Error fetching recommendations');
    }
  };

  return (
    <div className='flex w-full flex-col'>
      <h1 className='text-xl font-semibold'>Use PadiAi to Shop</h1>
      <h1 className='font-medium'>PadiAI can help you get all you want </h1>
      <div className='w-full flex justify-between mt-5'>
      <textarea
        type="text"
        placeholder="What can I get for a 13-year-old boy?"
        value={userQuery}
        className='w-[80%] p-2 border-b placeholder:text-gray bg-gray-500 outline-none'
        onChange={handleQueryChange}
      />
      <button className='bg-black text-white rounded-2xl font-semibold py-2 px-4 w-[18%]' onClick={fetchRecommendations}>Ask</button>
      </div>
      {/* <h2 className='text-xl font-semibold mt-4'>Your Recommendations</h2> */}
      <div className='flex flex-col '>
        {recommendations.length === 0 ? (
          <p>No products found</p>
        ) : (
          recommendations.map((product, index) => (
            <div key={index}>
              <p>{product}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
