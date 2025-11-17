function getAffordableProductNames(products, maxPrice) {
  const result = [];
  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.price <= maxPrice) {
      result.push(p.name);
    }
  }
  return result;
}

function getAverageRatingForCategory(products, category) {
  let total = 0;
  let count = 0;

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    if (p.category === category) {
      total += p.rating;
      count++;
    }
  }

  if (count === 0) return null;
  return total / count;
}

function getInventoryValueByCategory(products) {
  const result = {};

  for (let i = 0; i < products.length; i++) {
    const p = products[i];
    const value = p.price * p.stock;

    if (!result[p.category]) {
      result[p.category] = 0;
    }
    result[p.category] += value;
  }

  return result;
}

// Example usage:
const products = [
  { name: "Laptop",   price: 1200, category: "electronics", stock: 3,  rating: 4.5 },
  { name: "Mouse",    price: 25,   category: "electronics", stock: 50, rating: 4.2 },
  { name: "Desk",     price: 300,  category: "furniture",   stock: 10, rating: 4.8 },
  { name: "Chair",    price: 150,  category: "furniture",   stock: 20, rating: 4.1 },
  { name: "Notebook", price: 3,    category: "stationery",  stock: 200,rating: 4.0 },
];

console.log(getAffordableProductNames(products, 200));
console.log(getAverageRatingForCategory(products, "electronics"));
console.log(getInventoryValueByCategory(products));
