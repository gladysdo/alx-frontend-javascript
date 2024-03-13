function cleanSet(inputSet, startString) {
  // Check if the input is a Set
  if (!(inputSet instanceof Set)) {
    throw new Error('Invalid input. Expected a Set.');
  }

  // Filter set values that start with the specified string
  const filteredValues = Array.from(inputSet).filter(value => value.startsWith(startString));

  // Concatenate filtered values with '-' separator
  const resultString = filteredValues.join('-');

  // Return the final string
  return resultString;
}

export default cleanSet;
