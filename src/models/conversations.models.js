const { DataTypes } = require('sequelize')
const db = require('../utils/database')
// const Users = require('../models/users.models')

const Conversations = db.define("conversations",{
  id:{
    type: DataTypes.UUID,
    primaryKey: true
  },
  profileImage:{
    type: DataTypes.STRING,
  },
  name:{
    type: DataTypes.STRING
  },
  // createdBy:{
  //   type: DataTypes.UUID,
  //   allowNull: false,
  //   references: {
  //     model: Users,
  //     key: 'id'
  //   }
  // },
  isGroup:{
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Conversations