import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TopSelectionPage = ({ setSelectedTop }) => {
  const [tops, setTops] = useState([]);

  const GetAllTops = () => {
    fetch('https://localhost:7215/api/Top', { // הכנסת הנתיב הנכון לפי הסינון שאעשה
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Catch Error');
        }
        return response.json();
      })
      .then(data => {
        setTops(data);
      })
      .catch(error => {
        console.error('Error during fetching tops:', error);
      });
  };

  useEffect(() => {
    GetAllTops();
  }, []);

  return (
    <div>
      <h2>Select a Top</h2>
      <div className="items-list">
        {tops.map(top => (
          <div key={top.id} className="item">
            <Link to="/manual-look" onClick={() => setSelectedTop(top)}>
              <img src={top.image} alt={top.name} />
              <p>{top.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelectionPage;
