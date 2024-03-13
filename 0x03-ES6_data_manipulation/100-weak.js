// Create a WeakMap instance
const weakMap = new WeakMap();

// Export the WeakMap instance
export { weakMap };

// Export the queryAPI function
export function queryAPI(endpoint) {
  // Initialize the count for the endpoint in the WeakMap
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }

  // Increment the count for the endpoint
  const count = weakMap.get(endpoint) + 1;
  weakMap.set(endpoint, count);

  // Check if the number of queries is >= 5
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
}
