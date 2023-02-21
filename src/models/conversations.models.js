const { DataTypes } = require('sequelize')
const db = require('../utils/database')

const Conversations = db.define("conversations",{
  id:{
    type: DataTypes.UUID,
    primaryKey: true
  },
  profileImage:{
    type: DataTypes.STRING,
  },
  Name:{
    type: DataTypes.STRING
  },
  createdBy:{
    type: DataTypes.UUID
  },
  isGroup:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Conversations