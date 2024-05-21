import {
  butter,
  chocolate,
  cream,
  egg,
  flour,
  redFruits,
  sugar,
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
  salad,
  cucumber,
  feta,
} from "../Ingredients/IngredientData";

import { StepType as StepType } from "./StepType";

export const stepsPavlova: StepType[] = [
  {
    description: "Préparer la meringue française.",
    ingredients: [
      { ingredient: sugar, quantity: 100 },
      { ingredient: egg, quantity: 3 },
    ],
    order: 1,
  },
  {
    description: "Préparer la chantilly.",
    ingredients: [
      { ingredient: sugar, quantity: 50, unit: "g" },
      { ingredient: cream, quantity: 20, unit: "cl" },
    ],

    order: 2,
  },
  {
    description: "Recouvrir la meringue de chantilly.",
    order: 3,
  },
  {
    description: "Disposer les fruits rouges sur le dessus.",
    order: 4,
    ingredients: [{ ingredient: redFruits, quantity: 100, unit: "g" }],
  },
];

export const stepsFondantChocolat: StepType[] = [
  {
    description: "Faire fondre le chocolat avec le beurre au bain-marie.",
    order: 1,
    ingredients: [
      { ingredient: chocolate, quantity: 200, unit: "g" },
      { ingredient: butter, quantity: 150, unit: "g" },
    ],
  },
  {
    description:
      "Pendant ce temps,séparer les jaunes des blancs d'oeufs. Monter ces derniers en neige ferme.",
    order: 2,
    ingredients: [{ ingredient: egg, quantity: 3 }],
  },
  {
    description: "Ajouter les jaunes d'oeufs au mélange beurre chocolat.",
    order: 3,
  },
  {
    description: "Incorporer le sucre et la farine puis les blancs d'oeufs.",
    order: 4,
    ingredients: [
      { ingredient: flour, quantity: 50, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Verser la préparation dans un moule beurré et fariné. Enfourner 15mn à 180°.",
    order: 5,
  },
];

export const stepsTarteAuxPoires: StepType[] = [
  {
    description: "Préparer la pâte sablée.",
    order: 1,
    ingredients: [
      { ingredient: butter, quantity: 200, unit: "g" },
      { ingredient: flour, quantity: 150, unit: "g" },
      { ingredient: egg, quantity: 1 },
    ],
  },
  {
    description:
      "Pour la garniture, travailler le beurre et le sucre au batteur électrique.",
    order: 2,
    ingredients: [
      { ingredient: butter, quantity: 100, unit: "g" },
      { ingredient: sugar, quantity: 100, unit: "g" },
    ],
  },
  {
    description:
      "Incorporer les oeufs puis ajouter les amandes moulues et la farine",
    order: 3,
  },
  {
    description:
      "Verser la préparation sur le fond de la pâte. Disposer les poires. Enfourner 50 mn à 180°",
    order: 4,
  },
];

export const stepsWaldorfSalad: StepType[] = [
  {
    description: "Laver et préparer les légumes.",
    order: 1,
    ingredients: [
      { ingredient: salad, quantity: 1 },
      { ingredient: cucumber, quantity: 1 },
    ],
  },
  {
    description: "Couper le concombre en dés et émietter la feta.",
    order: 2,
    ingredients: [{ ingredient: feta, quantity: 150, unit: "g" }],
  },
  {
    description: "Mélanger tous les ingrédients dans un saladier.",
    order: 3,
  },
]

export const stepsLobsterRisotto: StepType[] = [
  {
    description: "Préparer les ingrédients : couper l'oignon et l'ail finement, et extraire la chair du homard.",
    order: 1,
    ingredients: [
      { ingredient: onion, quantity: 1, unit: " unit" },
      { ingredient: garlic, quantity: 2, unit: " clove" },
      { ingredient: lobster, quantity: 1, unit: " entier" },
    ],
  },
  {
    description: "Faire chauffer l'huile d'olive et le beurre dans une grande poêle. Ajouter l'oignon et l'ail et les faire revenir jusqu'à ce qu'ils soient translucides.",
    order: 2,
    ingredients: [
      { ingredient: oliveOil, quantity: 2, unit: "ml" },
      { ingredient: butter, quantity: 50, unit: "g" },
      { ingredient: onion, quantity: 1, unit: " unit" },
      { ingredient: garlic, quantity: 2, unit: " clove" },
    ],
  },
  {
    description: "Ajouter le riz Arborio et le faire revenir jusqu'à ce qu'il soit légèrement doré. Ensuite, ajouter le vin blanc et remuer jusqu'à absorption.",
    order: 3,
    ingredients: [
      { ingredient: rice, quantity: 300, unit: "g" },
      { ingredient: whiteWine, quantity: 150, unit: "ml" },
    ],
  },
  {
    description: "Ajouter le bouillon chaud une louche à la fois, en remuant continuellement jusqu'à ce que le riz soit crémeux et cuit al dente.",
    order: 4,
    ingredients: [
      { ingredient: chickenBroth, quantity: 1, unit: "ml" },
    ],
  },
  {
    description: "Ajouter la chair de homard, la crème, le parmesan, le sel et le poivre. Mélanger délicatement et servir avec du persil frais.",
    order: 5,
    ingredients: [
      { ingredient: lobster, quantity: 1, unit: " entier" },
      { ingredient: cream, quantity: 100, unit: "ml" },
      { ingredient: parmesan, quantity: 50, unit: "g" },
      { ingredient: salt, quantity: 1, unit: " tsp" },
      { ingredient: pepper, quantity: 1, unit: " tsp" },
      { ingredient: parsley, quantity: 10, unit: "g" },
    ],
  },
];
