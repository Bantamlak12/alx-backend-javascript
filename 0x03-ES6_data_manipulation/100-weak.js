// Create a weakMap
export const weakMap = new WeakMap();

// Modifiy the function to track the number of calls for each endpoint
export function queryAPI(endpoint) {
  // Check if the endpoint is in the WeakMap or do has a value or set a value
  if (!weakMap.has(endpoint)) weakMap.set(endpoint, 0);

  //   Get the value of the count from the endpoint key
  const count = weakMap.get(endpoint);

  // Increament the counter for the endpoint
  weakMap.set(endpoint, count + 1);

  if (count >= 5) throw new Error('Endpoint load is high');
}
