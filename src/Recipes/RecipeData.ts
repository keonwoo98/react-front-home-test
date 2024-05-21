import { RecipeType } from "./RecipeType";
import { ListOfRecipes } from "./RecipeType";

import {
  sugar,
  flour,
  redFruits,
  chocolate,
  egg,
  butter,
  almondPowder,
  pear,
  cream,
  salad,
  cucumber,
  feta,
  lobster,
  rice,
  whiteWine,
  chickenBroth,
  parmesan,
  onion,
  garlic,
  oliveOil,
  salt,
  pepper,
  parsley,
} from "../Ingredients/IngredientData";

import {
  stepsFondantChocolat,
  stepsPavlova,
  stepsTarteAuxPoires,
  stepsWaldorfSalad,
  stepsLobsterRisotto,
} from "../Steps/StepData";

import {
  appetizer,
  autumn,
  dessert,
  summer,
  vegan,
  winter,
  seafood,
  elegant,
} from "../Tags/TagData";

const pavlova: RecipeType = {
  nom: "Pavlova",
  description: "La pavlova est un dessert à base de meringue et de fruits",
  imageURL:
    "https://www.mycake.fr/wp-content/uploads/2019/10/rs_Pavlova_4x3.jpg",
  ingredients: [sugar, flour, redFruits, egg, cream],
  etapes: stepsPavlova,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 100, unit: "g" },
    { ingredient: egg, quantity: 3 },
    { ingredient: redFruits, quantity: 100, unit: "g" },
    { ingredient: cream, quantity: 20, unit: "cl" },
  ],
  tags: [summer, dessert],
};

const fondantChocolat: RecipeType = {
  nom: "Fondant au chocolat",
  description:
    "Le fondant au chocolat est un gâteau au chocolat qui fond en bouche",
  imageURL:
    "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/099F9C9F-D0A5-44DD-9652-3577F0699632/Derivates/8B542DBC-F14E-4022-AF91-1344695F5493.jpg",
  ingredients: [chocolate, egg, flour, butter, sugar],
  etapes: stepsFondantChocolat,
  ingredientsWithQuantity: [
    { ingredient: sugar, quantity: 200, unit: "g" },
    { ingredient: flour, quantity: 50, unit: "g" },
    { ingredient: chocolate, quantity: 200, unit: "g" },
    { ingredient: butter, quantity: 150, unit: "g" },
  ],
  tags: [dessert, winter, elegant],
};

const pearPie: RecipeType = {
  nom: "Tarte amandine aux poires",
  description:
    "La tarte au poire est une tarte faite à base d'un appareil à l'amande, d'une pâte sablée et de poires",
  imageURL:
    "https://assets.afcdn.com/recipe/20201228/116793_w1200h800c1cx1060cy707cxb2121cyb1414.webp",
  ingredients: [almondPowder, sugar, butter, flour, pear],
  etapes: stepsTarteAuxPoires,
  ingredientsWithQuantity: [
    { ingredient: pear, quantity: 2 },
    { ingredient: almondPowder, quantity: 50, unit: "g" },
    { ingredient: sugar, quantity: 150, unit: "g" },
    { ingredient: egg, quantity: 2 },
  ],
  tags: [dessert, autumn],
};

const waldorfSalad: RecipeType = {
  nom: "Salade Waldorf",
  description: "La salade greque est parfaite pour l'été",
  imageURL:
    "https://assets.afcdn.com/recipe/20190704/94666_w420h420c1cx2689cy1920cxb5378cyb3840.webp",
  ingredients: [salad, cucumber, feta],
  etapes: stepsWaldorfSalad,
  ingredientsWithQuantity: [
    { ingredient: salad, quantity: 1 },
    {
      ingredient: cucumber,
      quantity: 1,
    },
    { ingredient: feta, quantity: 150, unit: "g" },
  ],
  tags: [appetizer, summer, vegan],
};

const lobsterRisotto: RecipeType = {
  nom: "Risotto au Homard",
  description: "Un risotto crémeux et élégant avec du homard frais et du fromage Parmesan",
  imageURL: "https://www.seafoodnutrition.org/wp-content/uploads/2021/04/lobster-risotto-from-think-rice.jpg",
  ingredients: [lobster, rice, cream, whiteWine, chickenBroth, parmesan, onion, garlic, butter, oliveOil, salt, pepper, parsley],
  etapes: stepsLobsterRisotto,
  ingredientsWithQuantity: [
    { ingredient: lobster, quantity: 1, unit: " entier" },
    { ingredient: rice, quantity: 200, unit: "g" },
    { ingredient: cream, quantity: 50, unit: "ml" },
    { ingredient: whiteWine, quantity: 150, unit: "ml" },
    { ingredient: chickenBroth, quantity: 1, unit: "L" },
    { ingredient: parmesan, quantity: 50, unit: "g" },
    { ingredient: onion, quantity: 1, unit: " unit" },
    { ingredient: garlic, quantity: 2, unit: " cloves" },
    { ingredient: butter, quantity: 50, unit: "g" },
    { ingredient: oliveOil, quantity: 2, unit: " tsp" },
    { ingredient: salt, quantity: 1, unit: " tsp" },
    { ingredient: pepper, quantity: 1, unit: " tsp" },
    { ingredient: parsley, quantity: 10, unit: "g" },
  ],
  tags: [seafood, elegant],
};

export const allRecipes: ListOfRecipes = [
  pavlova,
  fondantChocolat,
  pearPie,
  waldorfSalad,
  lobsterRisotto,
];

export const summerRecipes = allRecipes.filter((recipe) => {
  const recipesTags = recipe.tags.map((tag) => tag.id);
  return recipesTags.includes("summer");
});

export const sugarRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );
  return ingredientsList && ingredientsList.includes("sucre");
});

export const chocolateRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsList: string[] | undefined = recette.ingredients?.map(
    (ingredient) => ingredient.name
  );

  return ingredientsList && ingredientsList.includes("chocolat");
});

export const dessertRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tags: string[] = recette.tags.map((tag) => tag.id);
  return tags.includes("dessert");
});

export const chocolateDessertRecipes: RecipeType[] = allRecipes.filter(
  (recette) => {
    const tagsString: string[] = recette.tags.map((tag) => tag.id);
    const ingredientString: string[] = recette.ingredients
      ? recette.ingredients.map((ingredient) => ingredient.name)
      : [];
    return (
      tagsString.includes("dessert") && ingredientString.includes("chocolat")
    );
  }
);

export const noEggsRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const ingredientsString: string[] = recette.ingredients
    ? recette.ingredients.map((ingredient) => ingredient.name)
    : [];
  return !ingredientsString.includes("oeuf");
});

export const autumnRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds = recette.tags.map((tag) => tag.id);
  return tagIds.includes("autumn");
});

export const veganRecipes: RecipeType[] = allRecipes.filter((recette) => {
  const tagIds: string[] = recette.tags.map((tag) => tag.id);
  return tagIds.includes("vegan");
});
