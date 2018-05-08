const Sequelize = require('sequelize')
const db = require('../db')

const Candidate = db.define('candidate', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  imageURL: {
    type: Sequelize.STRING,
    defaultValue: 'server/images/default-picture.png'
  },
  affiliation: {
    type: Sequelize.STRING
  },
  voteCount: {
    type: Sequelize.INTEGER,
    validate: {
      min: 0
    }
  }
});

module.exports = Candidate

