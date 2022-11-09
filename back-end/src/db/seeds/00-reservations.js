const reservations = require("./00-reservations.json");

//module 35.5 seeding data with knex
exports.seed = function (knex) {
  return knex
    .raw("TRUNCATE TABLE reservations RESTART IDENTITY CASCADE")
    .then(function () {
      return knex("reservations").insert(reservations);
    });
};
