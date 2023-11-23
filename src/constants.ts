export interface Recipe {
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    extendedIngredients: ExtendedIngredient[];
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    imageType: string;
    summary: string;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    instructions: string;
    analyzedInstructions: AnalyzedInstruction[];
  }
  
 export interface AnalyzedInstruction {
    name: string;
    steps: RecipeStep[];
  }
  
 export interface RecipeStep {
    number: number;
    step: string;
    ingredients: RecipeIngredient[];
    equipment: RecipeEquipment[];
    length?: {
      number: number;
      unit: string;
    };
  }
  
 export interface RecipeIngredient {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }
  
 export interface RecipeEquipment {
    id: number;
    name: string;
    localizedName: string;
    image: string;
  }
  
 export interface ExtendedIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: {
      us: {
        amount: number;
        unitShort: string;
        unitLong: string;
      };
      metric: {
        amount: number;
        unitShort: string;
        unitLong: string;
      };
    };
  }
  

  export interface DummyIngredient {
    id: number;
    aisle: string;
    image: string;
    consistency: string;
    name: string;
    nameClean: string;
    original: string;
    originalName: string;
    amount: number;
    unit: string;
    meta: string[];
    measures: {
      us: {
        amount: number;
        unitShort: string;
        unitLong: string;
      };
      metric: {
        amount: number;
        unitShort: string;
        unitLong: string;
      };
    };
  }
  
  export interface DummyRecipe {
    id: number;
    title: string;
    readyInMinutes: number;
    servings: number;
    sourceUrl: string;
    image: string;
    summary: string;
    extendedIngredients: DummyIngredient[];
    instructions: string;
    vegetarian: boolean;
    vegan: boolean;
    glutenFree: boolean;
    dairyFree: boolean;
    veryHealthy: boolean;
    cheap: boolean;
    veryPopular: boolean;
    sustainable: boolean;
    lowFodmap: boolean;
    weightWatcherSmartPoints: number;
    gaps: string;
    preparationMinutes: number;
    cookingMinutes: number;
    aggregateLikes: number;
    healthScore: number;
    creditsText: string;
    sourceName: string;
    pricePerServing: number;
    cuisines: string[];
    dishTypes: string[];
    diets: string[];
    occasions: string[];
    analyzedInstructions: AnalyzedInstruction[]; 
    originalId: number | null;
    spoonacularScore: number;
    spoonacularSourceUrl: string;
  }
  
  export interface DummyData {
    recipes: DummyRecipe[];
  }
  
  export const DummyData: DummyData = {
    "recipes": [
    {
    "vegetarian": false,
    "vegan": false,
    "glutenFree": true,
    "dairyFree": true,
    "veryHealthy": false,
    "cheap": false,
    "veryPopular": false,
    "sustainable": false,
    "lowFodmap": false,
    "weightWatcherSmartPoints": 18,
    "gaps": "no",
    "preparationMinutes": -1,
    "cookingMinutes": -1,
    "aggregateLikes": 2,
    "healthScore": 46,
    "creditsText": "foodista.com",
    "sourceName": "foodista.com",
    "pricePerServing": 480.18,
    "extendedIngredients": [
    {
    "id": 11124,
    "aisle": "Produce",
    "image": "sliced-carrot.png",
    "consistency": "SOLID",
    "name": "carrots",
    "nameClean": "carrot",
    "original": "•2 carrots, cut into thin matchsticks",
    "originalName": "carrots, cut into thin matchsticks",
    "amount": 2,
    "unit": "",
    "meta": [
    "cut into thin matchsticks"
    ],
    "measures": {
    "us": {
    "amount": 2,
    "unitShort": "",
    "unitLong": ""
    },
    "metric": {
    "amount": 2,
    "unitShort": "",
    "unitLong": ""
    }
    }
    },
    {
    "id": 10220445,
    "aisle": "Pasta and Rice",
    "image": "cooked-white-rice.png",
    "consistency": "SOLID",
    "name": "rice",
    "nameClean": "cooked rice",
    "original": "•4 cups cooked white rice",
    "originalName": "cooked white rice",
    "amount": 4,
    "unit": "cups",
    "meta": [
    "white",
    "cooked"
    ],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "cups",
    "unitLong": "cups"
    },
    "metric": {
    "amount": 632,
    "unitShort": "g",
    "unitLong": "grams"
    }
    }
    },
    {
    "id": 10220445,
    "aisle": "Pasta and Rice",
    "image": "uncooked-white-rice.png",
    "consistency": "SOLID",
    "name": "rice",
    "nameClean": "cooked rice",
    "original": "•4 cups cooked white rice",
    "originalName": "cooked white rice",
    "amount": 4,
    "unit": "cups",
    "meta": [
    "white",
    "cooked"
    ],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "cups",
    "unitLong": "cups"
    },
    "metric": {
    "amount": 632,
    "unitShort": "g",
    "unitLong": "grams"
    }
    }
    },
    {
    "id": 10220445,
    "aisle": "Pasta and Rice",
    "image": "rice-white-long-grain-or-basmatii-cooked.jpg",
    "consistency": "SOLID",
    "name": "rice",
    "nameClean": "cooked rice",
    "original": "•4 cups cooked white rice",
    "originalName": "cooked white rice",
    "amount": 4,
    "unit": "cups",
    "meta": [
    "white",
    "cooked"
    ],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "cups",
    "unitLong": "cups"
    },
    "metric": {
    "amount": 632,
    "unitShort": "g",
    "unitLong": "grams"
    }
    }
    },
    {
    "id": 1123,
    "aisle": "Milk, Eggs, Other Dairy",
    "image": "egg.png",
    "consistency": "SOLID",
    "name": "eggs",
    "nameClean": "egg",
    "original": "6 eggs",
    "originalName": "eggs",
    "amount": 6,
    "unit": "",
    "meta": [],
    "measures": {
    "us": {
    "amount": 6,
    "unitShort": "",
    "unitLong": ""
    },
    "metric": {
    "amount": 6,
    "unitShort": "",
    "unitLong": ""
    }
    }
    },
    {
    "id": 10111205,
    "aisle": "Produce",
    "image": "english-cucumber.png",
    "consistency": "SOLID",
    "name": "cucumber",
    "nameClean": "english cucumber",
    "original": "•1 English cucumber, cut into thin matchsticks (mixed with gochugaru)",
    "originalName": "English cucumber, cut into thin matchsticks (mixed with gochugaru)",
    "amount": 1,
    "unit": "",
    "meta": [
    "mixed",
    "english",
    "with gochugaru)",
    "cut into thin matchsticks ( "
    ],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "",
    "unitLong": ""
    },
    "metric": {
    "amount": 1,
    "unitShort": "",
    "unitLong": ""
    }
    }
    },
    {
    "id": 10211215,
    "aisle": "Produce",
    "image": "garlic.jpg",
    "consistency": "SOLID",
    "name": "garlic clove",
    "nameClean": "whole garlic cloves",
    "original": "•1 garlic clove, minced",
    "originalName": "garlic clove, minced",
    "amount": 1,
    "unit": "",
    "meta": [
    "minced"
    ],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "",
    "unitLong": ""
    },
    "metric": {
    "amount": 1,
    "unitShort": "",
    "unitLong": ""
    }
    }
    },
    {
    "id": 1032009,
    "aisle": "Spices and Seasonings",
    "image": "red-pepper-flakes.jpg",
    "consistency": "SOLID",
    "name": "sprinkle gochugaru",
    "nameClean": "red pepper flakes",
    "original": "•sprinkle gochugaru (red chili flakes; garnish)",
    "originalName": "sprinkle gochugaru (red chili flakes; garnish)",
    "amount": 4,
    "unit": "servings",
    "meta": [
    "red",
    "( chili flakes; garnish)"
    ],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "servings",
    "unitLong": "servings"
    },
    "metric": {
    "amount": 4,
    "unitShort": "servings",
    "unitLong": "servings"
    }
    }
    },
    {
    "id": 1016973,
    "aisle": "Ethnic Foods",
    "image": "chili-paste.png",
    "consistency": "LIQUID",
    "name": "gochujang",
    "nameClean": "gochujang",
    "original": "•4 tbsp gochujang (Korean red pepper paste; Sriracha sauce okay too)",
    "originalName": "gochujang (Korean red pepper paste; Sriracha sauce okay too)",
    "amount": 4,
    "unit": "tbsp",
    "meta": [
    "red",
    "(Korean pepper paste; Sriracha sauce okay too)"
    ],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "Tbsps",
    "unitLong": "Tbsps"
    },
    "metric": {
    "amount": 4,
    "unitShort": "Tbsps",
    "unitLong": "Tbsps"
    }
    }
    },
    {
    "id": 4053,
    "aisle": "Oil, Vinegar, Salad Dressing",
    "image": "olive-oil.jpg",
    "consistency": "SOLID",
    "name": "olive oil",
    "nameClean": "olive oil",
    "original": "1 tablespoon olive oil",
    "originalName": "olive oil",
    "amount": 1,
    "unit": "tablespoon",
    "meta": [],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "Tbsp",
    "unitLong": "Tbsp"
    },
    "metric": {
    "amount": 1,
    "unitShort": "Tbsp",
    "unitLong": "Tbsp"
    }
    }
    },
    {
    "id": 4058,
    "aisle": "Ethnic Foods",
    "image": "sesame-oil.png",
    "consistency": "SOLID",
    "name": "sesame oil",
    "nameClean": "sesame oil",
    "original": "•4 tsp sesame oil",
    "originalName": "sesame oil",
    "amount": 4,
    "unit": "tsp",
    "meta": [],
    "measures": {
    "us": {
    "amount": 4,
    "unitShort": "tsps",
    "unitLong": "teaspoons"
    },
    "metric": {
    "amount": 4,
    "unitShort": "tsps",
    "unitLong": "teaspoons"
    }
    }
    },
    {
    "id": 12023,
    "aisle": "Ethnic Foods",
    "image": "sesame-seeds.png",
    "consistency": "SOLID",
    "name": "sesame seeds",
    "nameClean": "sesame seeds",
    "original": "•1 tsp sesame seeds (garnish)",
    "originalName": "sesame seeds (garnish)",
    "amount": 1,
    "unit": "tsp",
    "meta": [
    "(garnish)"
    ],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "tsp",
    "unitLong": "teaspoon"
    },
    "metric": {
    "amount": 1,
    "unitShort": "tsp",
    "unitLong": "teaspoon"
    }
    }
    },
    {
    "id": 16124,
    "aisle": "Condiments",
    "image": "soy-sauce.jpg",
    "consistency": "LIQUID",
    "name": "soy sauce",
    "nameClean": "soy sauce",
    "original": "•1 tbsp soy sauce",
    "originalName": "soy sauce",
    "amount": 1,
    "unit": "tbsp",
    "meta": [],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "Tbsp",
    "unitLong": "Tbsp"
    },
    "metric": {
    "amount": 1,
    "unitShort": "Tbsp",
    "unitLong": "Tbsp"
    }
    }
    },
    {
    "id": 10011457,
    "aisle": "Produce",
    "image": "spinach.jpg",
    "consistency": "SOLID",
    "name": "spinach",
    "nameClean": "spinach",
    "original": "•1 bunch fresh spinach (or pre-packaged spinach)",
    "originalName": "fresh spinach (or pre-packaged spinach)",
    "amount": 1,
    "unit": "bunch",
    "meta": [
    "fresh",
    "(or pre-packaged spinach)"
    ],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "bunch",
    "unitLong": "bunch"
    },
    "metric": {
    "amount": 1,
    "unitShort": "bunch",
    "unitLong": "bunch"
    }
    }
    },
    {
    "id": 23232,
    "aisle": "Meat",
    "image": "ribeye-raw.jpg",
    "consistency": "SOLID",
    "name": "sandwich steaks",
    "nameClean": "steak",
    "original": "•1 lb sandwich steaks, thin cut (any thin cut will work though)",
    "originalName": "sandwich steaks, thin cut (any thin cut will work though)",
    "amount": 1,
    "unit": "lb",
    "meta": [
    "thin cut",
    "(any will work though)"
    ],
    "measures": {
    "us": {
    "amount": 1,
    "unitShort": "lb",
    "unitLong": "pound"
    },
    "metric": {
    "amount": 453.592,
    "unitShort": "g",
    "unitLong": "grams"
    }
    }
    }
    ],
    "id": 634965,
    "title": "Bibimbab (Korean Rice w Vegetables & Beef)",
    "readyInMinutes": 45,
    "servings": 4,
    "sourceUrl": "http://www.foodista.com/recipe/7SFVMHXW/bibimbab-korean-rice-w-vegetables-beef",
    "image": "https://spoonacular.com/recipeImages/634965-556x370.jpg",
    "summary": "Forget going out to eat or ordering takeout every time you crave Korean food. Try making Bibimbab (Korean Rice w Vegetables & Beef) at home. This gluten free and dairy free recipe serves 4 and costs <b>$4.8 per serving</b>. This main course has <b>680 calories</b>, <b>40g of protein</b>, and <b>32g of fat</b> per serving. If you have garlic clove, sesame oil, sesame seeds, and a few other ingredients on hand, you can make it. This recipe from Foodista has 2 fans. From preparation to the plate, this recipe takes roughly <b>45 minutes</b>. Taking all factors into account, this recipe <b>earns a spoonacular score of 83%</b>, which is great. <a href=\"https://spoonacular.com/recipes/bibimbab-korean-rice-w-vegetables-beef-1297907\">Bibimbab (Korean Rice w Vegetables & Beef)</a>, <a href=\"https://spoonacular.com/recipes/korean-bibimbab-rice-w-vegetables-beef-1507229\">Korean Bibimbab (Rice w Vegetables & Beef)</a>, and <a href=\"https://spoonacular.com/recipes/korean-bibimbab-rice-w-vegetables-beef-649031\">Korean Bibimbab (Rice w Vegetables & Beef)</a> are very similar to this recipe.",
    "cuisines": [
    "Korean",
    "Asian"
    ],
    "dishTypes": [
    "lunch",
    "main course",
    "main dish",
    "dinner"
    ],
    "diets": [
    "gluten free",
    "dairy free"
    ],
    "occasions": [],
    "instructions": "<ol><li>1.Cook rice according to package directions.</li><li>2.Cut vegetables into matchstick pieces and set aside for sauteing.</li><li>3.In a large non-stick pan/skillet, bring 2 cups water to a boil. Add spinach and cook, stirring constantly until wilted; drain. When cool enough to handle, squeeze spinach dry into a ball.</li><li>4.Wipe out skillet; heat 1 tsp olive oil over medium-high. Add carrots and cook until soft, 3 minutes. Add garlic and cook until fragrant or semi-browned, 1 minute. Add cucumber slices mixed with gochugaru (red pepper flakes). Combine spinach and soy sauce; set aside until serving.</li><li>5.Add thinly sliced beef to non-stick pan and heat until browned. Wipe down with napkin.</li><li>6.Heat 1 tsp olive oil in non-stick pan over medium-high. Add eggs and cook until whites are set and yolks are still runny, about 5 minutes.</li><li>7.Divide rice among four bowls; top with vegetables and eggs. Drizzle each with sesame oil, sprinkle with sesame seeds. Top with gochujang (red pepper paste) or Sriracha sauce as substitute.</li><li>*Bibimbab and its main ingredients (usually rice and vegetables) can be chosen at one's preference. This is the main reason why bibimbab is so appealing; it suits vegetarians, dieters, health-conscience eaters, and even meat-lovers, who are more than welcome to add beef to their liking. For us, since we usually have rice available to eat at all times, we simply slice up any available vegetables or lettuce leaf varieties in the fridge for an \"instant\" and very satisfying bibimbab meal. So feel free to deviate from the original recipe!</li></ol>",
    "analyzedInstructions": [],
    "originalId": null,
    "spoonacularScore": 83.95484924316406,
    "spoonacularSourceUrl": "https://spoonacular.com/bibimbab-korean-rice-w-vegetables-beef-634965"
    }
    ]
    }
  