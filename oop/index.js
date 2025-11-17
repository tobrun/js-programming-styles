class Product {
  constructor(name, price, category, stock, rating) {
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
    this.rating = rating;
  }
}

class Inventory {
  constructor(products = []) {
    this.products = products;
  }

  getAffordableProductNames(maxPrice) {
    const result = [];
    for (const p of this.products) {
      if (p.price <= maxPrice) {
        result.push(p.name);
      }
    }
    return result;
  }

  getAverageRatingForCategory(category) {
    let total = 0;
    let count = 0;
    for (const p of this.products) {
      if (p.category === category) {
        total += p.rating;
        count++;
      }
    }
    return count === 0 ? null : total / count;
  }

  getInventoryValueByCategory() {
    const result = {};
    for (const p of this.products) {
      const value = p.price * p.stock;
      if (!result[p.category]) {
        result[p.category] = 0;
      }
      result[p.category] += value;
    }
    return result;
  }
}

// Example usage:
const inv = new Inventory([
  new Product("Laptop", 1200, "electronics", 3, 4.5),
  new Product("Mouse", 25, "electronics", 50, 4.2),
  new Product("Desk", 300, "furniture", 10, 4.8),
  new Product("Chair", 150, "furniture", 20, 4.1),
  new Product("Notebook", 3, "stationery", 200, 4.0),
]);

console.log(inv.getAffordableProductNames(200));
console.log(inv.getAverageRatingForCategory("electronics"));
console.log(inv.getInventoryValueByCategory());
