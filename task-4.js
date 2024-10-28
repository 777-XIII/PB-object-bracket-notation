const product = {
  type: "t-shirt",
  brand: "Awesome Tees",
  price: 19.99,
  colors: ["green", "yellow", "pink"],
  sizes: ["S", "M", "L"],
  material: "organic cotton",
};

const keys = ["type", "brand", "id", "material", "details"];

for (let i = 0; i < keys.length; i++) {
  const key = keys[i];
  const value = product[key];
  if (value) {
    console.log(`${key}: ${Array.isArray(value) ? value.join(",") : value}`);
  } else {
    console.log(`The product doesn't have a "${key}" property`);
  }
}
