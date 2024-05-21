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

const App = () => {
  const [filter, setFilter] = useState<string>("all");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [resetTrigger, setResetTrigger] = useState<boolean>(false);

  const handleTagToggle = (tagId: string) => {
    setSelectedTags(prev =>
      prev.includes(tagId) ? prev.filter(tag => tag !== tagId) : [...prev, tagId]
    );
    setFilter("all");
    setSearchTerm("");
    setResetTrigger(prev => !prev);
  };

  const handleFilterButtonClick = (filterType: string) => {
    setFilter(filterType);
    setSelectedTags([]);
    setSearchTerm("");
    setResetTrigger(prev => !prev);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    if (event.target.value) {
      setFilter("all");
      setSelectedTags([]);
      setResetTrigger(prev => !prev);
    }
  };

  const handleSearchReset = () => {
    setSearchTerm("");
  };

  const applyTagFilter = (recipes: typeof allRecipes) => {
    if (selectedTags.length === 0) return recipes;
    return recipes.filter(recipe =>
      selectedTags.every(tagId => recipe.tags.some(tag => tag.id === tagId))
    );
  };

  const applyCategoryFilter = (recipes: typeof allRecipes) => {
    switch (filter) {
      case "chocolate":
        return recipes.filter(recipe => chocolateRecipes.includes(recipe));
      case "sugar":
        return recipes.filter(recipe => sugarRecipes.includes(recipe));
      case "summer":
        return recipes.filter(recipe => summerRecipes.includes(recipe));
      case "dessert":
        return recipes.filter(recipe => dessertRecipes.includes(recipe));
      case "chocolate dessert":
        return recipes.filter(recipe => chocolateDessertRecipes.includes(recipe));
      case "eggs free":
        return recipes.filter(recipe => noEggsRecipes.includes(recipe));
      case "autumn":
        return recipes.filter(recipe => autumnRecipes.includes(recipe));
      case "vegan":
        return recipes.filter(recipe => veganRecipes.includes(recipe));
      default:
        return recipes;
    }
  };

  const applySearchFilter = (recipes: typeof allRecipes) => {
    if (!searchTerm) return recipes;
    return recipes.filter(recipe =>
      recipe.nom.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getFilteredRecipes = () => {
    let filteredRecipes = allRecipes;
    filteredRecipes = applyTagFilter(filteredRecipes);
    filteredRecipes = applyCategoryFilter(filteredRecipes);
    filteredRecipes = applySearchFilter(filteredRecipes);
    return filteredRecipes;
  };

  const filteredRecipes = getFilteredRecipes();

  return (
    <div className="App">
      <h1>Liste des recettes</h1>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Rechercher des recettes..."
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ padding: "10px", width: "200px", borderRadius: "5px", marginRight: "10px" }}
        />
        <button onClick={handleSearchReset} style={{ padding: "10px", borderRadius: "5px" }}>
          Reset
        </button>
      </div>
      <TagList tags={tagList} selectedTags={selectedTags} setFilter={handleTagToggle} />
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {filterButtons.map(button => (
          <button
            key={button.type}
            onClick={() => handleFilterButtonClick(button.type)}
            style={{
              margin: "5px",
              backgroundColor: filter === button.type ? "#DDEEFF" : "",
              border: filter === button.type ? "1px solid #000" : "1px solid #ccc",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
            {button.label}
          </button>
        ))}
      </div>
      <Recipes recipes={filteredRecipes} resetTrigger={resetTrigger} />
    </div>
  );
};

export default App;
