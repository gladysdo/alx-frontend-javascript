function cleanSet(set, startString) {
  // Filter the set values that start with the specified string
  const filteredValues = Array.from(set).filter(value => value.startsWith(startString));

  // Concatenate the filtered values with '-' separator
  const resultString = filteredValues.join('-');

  // Return the final string
  return resultString;
}

export default cleanSet;
