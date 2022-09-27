import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All");

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoods = [...foods, newFood];
    setFoods(newFoods);
    console.log(newFood);
  }
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") return true;
    return food.cuisine === filterBy;
  });
  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id}>{food.name}</li>
  ));

  return (
    <div>
      <select name="filter" onChange={handleFilterChange}>
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>

    </div>
  );
}

export default SpicyFoodList;