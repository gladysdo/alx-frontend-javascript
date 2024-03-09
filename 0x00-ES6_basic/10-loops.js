export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = 'correctly-' + value;
  }

  return array;
}
