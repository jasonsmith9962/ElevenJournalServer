const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://postgres:apex@localhost:5432/eleven-journal");

module.exports = sequelize;