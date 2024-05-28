const productWrapper = document.querySelector(".productWrapper");

function fetcherProduct(api) {
  const myPromise = new Promise((resolve, reject) => {
    fetch(api)
      .then((Response) => {
        return Response.json();
      })
      .then((allData) => {
        resolve(allData.products);
      })
      .catch((err) => {
        reject(err);
      });
  });
  return myPromise;
}

// ====== display function =======

function displayAllProducts(allProducts) {
  let allProductsHtml = ``;
  for (let i = 0; i < allProducts.length; i++) {
    allProductsHtml += `<div class="eachProduct">
    <h1 class="title">${allProducts[i].title}</h1>
    <img
      src=${allProducts[i].thumbnail}
      alt=${allProducts[i].thumbnail}
      class="image"
    />
    <p>price : ${allProducts[i].price}</p>
    <p class="description">
    ${allProducts[i].description}
    </p>
  </div>`;
  }

  productWrapper.innerHTML = allProductsHtml;
}

// ====== display function =======

RmyPromise = fetcherProduct("https://dummyjson.com/products");
RmyPromise.then((data) => {
  displayAllProducts(data);
}).catch((err) => {
  console.log(err);
});

// ===== api hit done
// ==== api hit done properly
