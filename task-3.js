const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"],
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = Object.keys(product);

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = product[key];
  console.log(`${key}: ${Array.isArray(value) ? value.join(",") : value}`);
}
