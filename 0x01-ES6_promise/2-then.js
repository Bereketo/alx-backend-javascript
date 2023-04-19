export default function handleResponseFromAPI(promise) {
  const body = { status: 200, body: 'success' };
  promise.then(() => body);
  promise.catch((error) => error);
  promise.finally(() => console.log('Got a response from the API'));
}
