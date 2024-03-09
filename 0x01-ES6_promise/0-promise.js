export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Your asynchronous API call or logic here

    // For example, resolving with a sample response
    resolve({ status: 200, body: 'Success' });
  });
}
