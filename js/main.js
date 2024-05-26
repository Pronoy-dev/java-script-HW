function work() {
  const fetchPromise = new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products")
      .then((Response) => {
        return Response.json();
      })
      .then((returnData) => {
        return returnData.products;
      })
      .then((finalProduct) => {
        resolve(finalProduct);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return fetchPromise;
}

work()
  .then((data) => {
    return data.splice(0, 10);
  })
  .then((data) => {
    console.log(data);
  });
