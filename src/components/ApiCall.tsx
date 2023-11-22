import React, { useEffect, useState } from 'react';
import { apiKey } from '../assets/myKey';
import { StartButton } from '../utils/Buttons.styles';

interface Recipe {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  title: string;
}

interface Data {
  recipes: Recipe[];
}

const ApiCall: React.FC = () => {
  const [apiData, setApiData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${apiKey}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data: Data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to ensure the effect runs only once

  const handleReloadClick = () => {
    setLoading(true);
    fetchData();
  };

  return (
    <div>
      <StartButton onClick={handleReloadClick} disabled={loading}/>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {/* Loop through recipes and display their titles */}
          {apiData?.recipes.map((recipe, index) => (
            <p key={index}>Recipe Title: {recipe.title}</p>
          ))}
          {/* Add more components to display other recipe properties if needed */}
        </div>
      )}
    </div>
  );
};

export default ApiCall;
