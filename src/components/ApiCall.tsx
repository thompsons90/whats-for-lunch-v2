import React, { useEffect, useState } from 'react';
import { apiKey } from '../assets/myKey';
import { DetailsButton, StartButton } from '../utils/Buttons.styles';
import { StartButtonContainer } from './ApiCall.styles';
import { Recipe } from '../constants';


interface Data {
  recipes: Recipe[];
}

interface ApiCallProps {
  isDarkMode: boolean;
}

const ApiCall: React.FC<ApiCallProps> = () => {
  const [apiData, setApiData] = useState<Data | null>(null);
  const [loading, setLoading] = useState(true);
  const [showDetails, setShowDetails] = useState(false);
 

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

  const handleDetailsClick = () => {
    setShowDetails(!showDetails)
    console.log(showDetails)
  }

  return (
    <StartButtonContainer>
      <StartButton onClick={handleReloadClick} disabled={loading} 
      // isDarkMode={isDarkMode} 
      />
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {/* Loop through recipes and display their titles */}
            {apiData?.recipes.map((recipe, index) => (
              <div key={index}>
                <img src={recipe.image} alt={`Recipe ${index + 1}`} style={{ width: '80%', borderRadius: '15%' }}/>
                <p>Recipe: {recipe.title}</p>
                <ul style={{listStyle: 'none'}}>
                  <li>Diets: {recipe.diets.join(', ')}</li>
                  <li>Ready in: {recipe.readyInMinutes} minutes</li>
                  <li>Cheap? {recipe.cheap ? 'Yes' : 'No'}</li>
                  <li>Cuisine: {recipe.cuisines.join(', ')}</li>
                  <li>Health Score: {recipe.healthScore}</li>
                  <li>Likes: {recipe.aggregateLikes}</li>
                </ul>
                <span>Details <DetailsButton onClick={handleDetailsClick} /></span>
                <div style={{ display: showDetails ? 'block' : 'none', height: 'auto', overflow: 'auto' }}>
                <ul style={{listStyle: 'none'}}>
                  <li>Preparation Mins: {recipe.preparationMinutes}</li>
                  <li>Cooking Mins: {recipe.cookingMinutes}</li>
                  <li>Summary:
                    {recipe.summary}
                    </li>
                  <li>
                    Instructions:
                    {recipe.analyzedInstructions.map((instruction, i) => (
                      <ul key={i}>
                        <li>{instruction.name}</li>
                        <li>
                          Steps:
                          <ul>
                            {instruction.steps.map((step, j) => (
                              <li key={j}>
                                {step.number}. {step.step}
                              </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                    ))}
                  </li>
                </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </StartButtonContainer>
    // <div>
    //   <StartButton onClick={handleReloadClick} disabled={loading}/>
    //   {loading ? (
    //     <p>Loading...</p>
    //   ) : (
    //     <div>
    //       {/* Loop through recipes and display their titles */}
    //       {apiData?.recipes.map((recipe, index) => (
    //         <p key={index}>Recipe Title: {recipe.title}</p>
    //       ))}
    //       {/* Add more components to display other recipe properties if needed */}
    //     </div>
    //   )}
    // </div>
  );
};

export default ApiCall;
