import { RecipeType } from "./RecipeType";
import Recipe from "./Recipe";

interface RecipesProps {
  recipes: RecipeType[];
  resetTrigger: boolean;
}

const Recipes = ({ recipes, resetTrigger }: RecipesProps): JSX.Element => {
  return (
    <div
      style={{
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "whitesmoke",
          borderWidth: "10px",
          borderColor: "black",
          maxWidth: "800px",
        }}
      >
        {recipes.map(recipe => (
          <Recipe key={recipe.nom} recipe={recipe} resetTrigger={resetTrigger} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
