import { useState } from "react";
import "./styles.css";
import Recipes from "./Recipes/Recipes";
import {
  allRecipes,
  sugarRecipes,
  summerRecipes,
  dessertRecipes,
  noEggsRecipes,
  chocolateRecipes,
  autumnRecipes,
  veganRecipes,
  chocolateDessertRecipes,
} from "./Recipes/RecipeData";
import { TagList } from "./Tagfilter/ListeDesTags";
import { tagList } from "./Tags/TagData";

export default function App() {
  const [filter, setFilter] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [resetTrigger, setResetTrigger] = useState<boolean>(false);

  const filterButtons = [
    { label: "Tous", type: "all" },
    { label: "Chocolat", type: "chocolate" },
    { label: "Sucre", type: "sugar" },
    { label: "Été", type: "summer" },
    { label: "Dessert", type: "dessert" },
    { label: "Dessert Chocolat", type: "chocolate dessert" },
    { label: "Sans Oeufs", type: "eggs free" },
    { label: "Automne", type: "autumn" },
    { label: "Vegan", type: "vegan" },
  ];

  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(tag => tag !== tagId) : [...prev, tagId]
    );
    setFilter("all");
    setResetTrigger(prev => !prev);
  };

  const handleFilterButtonClick = (filterType: string) => {
    setFilter(filterType);
    setSelectedTags([]);
    setResetTrigger(prev => !prev);
  };

  const getFilteredRecipes = () => {
    if (selectedTags.length > 0) {
      return allRecipes.filter(recipe =>
        selectedTags.every(tagId =>
          recipe.tags.some(tag => tag.id === tagId)
        )
      );
    }

    switch (filter) {
      case "chocolate":
        return chocolateRecipes;
      case "sugar":
        return sugarRecipes;
      case "summer":
        return summerRecipes;
      case "dessert":
        return dessertRecipes;
      case "chocolate dessert":
        return chocolateDessertRecipes;
      case "eggs free":
        return noEggsRecipes;
      case "autumn":
        return autumnRecipes;
      case "vegan":
        return veganRecipes;
      default:
        return allRecipes;
    }
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="App">
      <h1>Liste des recettes</h1>
      <TagList tags={tagList} selectedTags={selectedTags} setFilter={handleTagToggle} />
      <div>
        {filterButtons.map(button => (
          <button key={button.type} onClick={() => handleFilterButtonClick(button.type)}>
            {button.label}
          </button>
        ))}
      </div>
      <Recipes recipes={filteredRecipes} resetTrigger={resetTrigger} />
    </div>
  );
}
