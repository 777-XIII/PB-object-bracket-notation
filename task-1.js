const product = {
  type: "t-shirt",
  color: "green",
  brand: "Awesome Tees",
  price: 19.99,
};

const key = "color";

console.log(product[key]); 

// bonus

const noKey = "size";

console.log(product[noKey]); // undefined