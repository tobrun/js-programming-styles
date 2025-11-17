function getAffordableProductNamesFn(products, maxPrice) {
  return products.filter((p) => p.price <= maxPrice).map((p) => p.name);
}

function getAverageRatingForCategoryFn(products, category) {
  const ratings = products
    .filter((p) => p.category === category)
    .map((p) => p.rating);

  if (ratings.length === 0) return null;

  const total = ratings.reduce((sum, r) => sum + r, 0);
  return total / ratings.length;
}

function getInventoryValueByCategoryFn(products) {
  return products.reduce((acc, p) => {
    const value = p.price * p.stock;
    return {
      ...acc,
      [p.category]: (acc[p.category] ?? 0) + value,
    };
  }, {});
}

// Example usage:
const products = [
  { name: "Laptop",   price: 1200, category: "electronics", stock: 3,  rating: 4.5 },
  { name: "Mouse",    price: 25,   category: "electronics", stock: 50, rating: 4.2 },
  { name: "Desk",     price: 300,  category: "furniture",   stock: 10, rating: 4.8 },
  { name: "Chair",    price: 150,  category: "furniture",   stock: 20, rating: 4.1 },
  { name: "Notebook", price: 3,    category: "stationery",  stock: 200,rating: 4.0 },
];
console.log(getAffordableProductNamesFn(products, 200));
console.log(getAverageRatingForCategoryFn(products, "electronics"));
console.log(getInventoryValueByCategoryFn(products));
