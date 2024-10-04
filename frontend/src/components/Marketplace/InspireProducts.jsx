'use client';

import { useState } from 'react';

export default function InspireProducts() {
  const [userQuery, setUserQuery] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleQueryChange = (e) => {
    setUserQuery(e.target.value);
  };

  const fetchRecommendations = async () => {
    try {
      const [listings, setListings] = useState('');

    useEffect(() => {
        const getListings = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products/')
                setListings(response?.data.products);
                console.log(response?.data.products);
            } catch (error) {
                toast.error(error);
            }
        }
      getListings()
    }, [])
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching recommendations:', error);
    }
  };

  return (
    <div>
      <h1>Inspire Products</h1>
      <input
        type="text"
        placeholder="What can I get for my 6-year-old?"
        value={userQuery}
        onChange={handleQueryChange}
      />
      <button onClick={fetchRecommendations}>Ask</button>

      <div>
        <h2>Recommendations</h2>
        {recommendations.length === 0 ? (
          <p>No products found</p>
        ) : (
          recommendations.map((product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
