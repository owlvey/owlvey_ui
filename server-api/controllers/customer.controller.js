const Customer = require("../database/models/customer.model");

exports.getCustomers = function(req, res) {
  Customer.find({}, (error, customers) => {
    if (error || customers === null) {
      res.sendStatus(404);
    } else {
      res.json(customers);
    }
  });
};

exports.addCustomer = (req, res) => {
  const { name, avatar } = req.body;
  new Customer({ name, avatar }).save((error, customer) => {
    if (error) {
      res.sendStatus(500);
    } else {
      res.json(customer);
    }
  });
};
