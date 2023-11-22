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
  