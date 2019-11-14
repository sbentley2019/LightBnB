const db = require('../db/database');

/// Users

/**
 * Get a single user from the database given their email.
 * @param {String} email The email of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithEmail = function(email) {
  return db.query(`
  SELECT * 
  FROM users 
  WHERE users.email ILIKE $1;`, [`${email}`])
  .then(res => {
    return res.rows ? res.rows[0] : null;
  })
}
exports.getUserWithEmail = getUserWithEmail;

/**
 * Get a single user from the database given their id.
 * @param {string} id The id of the user.
 * @return {Promise<{}>} A promise to the user.
 */
const getUserWithId = function(id) {
  return db.query(`
  SELECT *
  FROM users
  WHERE users.id = $1;`, [`${id}`])
  .then(res => res.rows[0]);
}
exports.getUserWithId = getUserWithId;


/**
 * Add a new user to the database.
 * @param {{name: string, password: string, email: string}} user
 * @return {Promise<{}>} A promise to the user.
 */
const addUser =  function(user) {
  return db.query(`
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *;
  `, [user.name, user.email, user.password]);
}
exports.addUser = addUser;
