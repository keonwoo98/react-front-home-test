import { useEffect, useState } from "react";
import { RecipeType } from "./RecipeType";
import Steps from "../Steps/Steps";
import IngredientsWithQuantity from "../Ingredients/IngredientsWithQuantity";
import { Tags } from "../Tags/Tags";

interface RecipeProps {
  recipe: RecipeType;
  resetTrigger: boolean;
}

export const Recipe = ({ recipe, resetTrigger }: RecipeProps) => {
  const [showSteps, setShowSteps] = useState<boolean>(false);
  const [showIngredients, setShowIngredients] = useState<boolean>(false);

  useEffect(() => {
    setShowSteps(false);
    setShowIngredients(false);
  }, [resetTrigger]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        padding: "10px",
        boxShadow: "5px 5px 7px 2px rgba(0,0,0,0.76)",
        marginTop: "20px",
        minWidth: "800px",
        width: "100%",
        boxSizing: "border-box",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          flex: "0 0 50%",
          height: "350px",
          backgroundImage: `url(${recipe.imageURL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div
        style={{
          flex: "1 1 50%",
          padding: "10px",
          backgroundColor: "lightblue",
          boxSizing: "border-box",
        }}
      >
        <h2>Nom de la recette: {recipe.nom}</h2>
        <div
          style={{
            padding: "10px",
          }}
        >
          {recipe.description}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Tags tags={recipe.tags} selectedTags={[]} isClickable={false} />
        </div>
        <div
          style={{
            backgroundColor: "blanchedalmond",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          Ingrédients:
          <button onClick={() => setShowIngredients(!showIngredients)}>
            {showIngredients ? "Masquer" : "Afficher"}
          </button>
          {showIngredients && (
            <IngredientsWithQuantity
              ingredientsWithQuantity={recipe.ingredientsWithQuantity}
            />
          )}
        </div>
        <div
          style={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignContent: "flex-start",
            alignItems: "flex-start",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              padding: "10px",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
          >
            Etapes de la recette:
            <button onClick={() => setShowSteps(!showSteps)}>
              {showSteps ? "Masquer" : "Afficher"}
            </button>
          </div>
          {recipe.etapes && showSteps && <Steps steps={recipe.etapes} />}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
