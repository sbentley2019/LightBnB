// user
const { getUserWithEmail, getUserWithId, addUser } = require('./user');

// properties
const { getAllProperties, addProperty } = require('./property');

// reservations
const { getAllReservations } = require('./reservation');

module.exports = {
  getUserWithEmail,
  getUserWithId,
  addUser,
  getAllProperties,
  addProperty,
  getAllReservations
};