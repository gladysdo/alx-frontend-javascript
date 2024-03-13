function updateUniqueItems(inputMap) {
  // Check if the input is a Map
  if (!(inputMap instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over the entries of the map
  for (const [key, value] of inputMap.entries()) {
    // Check if the quantity is 1, and update it to 100
    if (value === 1) {
      inputMap.set(key, 100);
    }
  }
}

export default updateUniqueItems;
