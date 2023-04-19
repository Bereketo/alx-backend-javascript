function getFullResponseFromAPI(success) {
  const myPromise = new Promise((resolve, reject) => {
    if (success) {
      const obj = { status: 200, body: 'success' };
      resolve(obj);
    } else {
      const err = 'The fake API is not working currently';
      reject(err);
    }
  });

  myPromise
    .then((obj) => {
      return ob;
    })
    .catch((err) => {
      return err;
    });
  return myPromise;
}

export default getFullResponseFromAPI;

