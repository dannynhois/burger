var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", data => {
      cb(data);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, data => {
      cb(data);
    });
  },
  update: function(col, val, cb) {
    orm.update("burgers", col, val, data => {
      cb(data);
    });
  }
};

module.exports = burger;
