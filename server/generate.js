var faker = require('faker');
var database = { products: []};
for (var i = 1; i<= 10; i++) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    quantity: faker.random.number()
  });
}
