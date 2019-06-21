const Product = require("../database/models/product.model");

exports.getProductsByCustomer = function(req, res) {
  const { customer_id } = req.query;
  Product.find({ customer_id }, (error, products) => {
    if (error || products === null) {
      res.sendStatus(404);
    } else {
      res.json(products);
    }
  });
};

exports.addProduct = (req, res) => {
  const { name, avatar, customer_id } = req.body;
  new Product({ name, avatar, customer_id }).save((error, product) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json(product);
    }
  });
};
