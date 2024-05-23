function work() {
  const fetchPromise = new Promise((resolve, reject) => {
    fetch("https://dummyjson.com/products").then((Response) => {
      console.log(Response);
    });
  });
  return fetchPromise;
}

work();
