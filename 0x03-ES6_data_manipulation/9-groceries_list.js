function groceriesList() {
  // Create a new Map with groceries and quantities
  const groceryMap = new Map([
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ]);

  // Return the Map
  return groceryMap;
}

export default groceriesList;
