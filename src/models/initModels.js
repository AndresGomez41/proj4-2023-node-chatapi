const Conversations = require("./conversations.models")
const Messages = require("./messages.models")
const Participants = require("./participants.models")
const Users = require("./users.models")


const initModels = () => {
  Messages.belongsTo(Participants)
  Participants.hasMany(Messages)

  Participants.belongsTo(Conversations)
  Conversations.hasMany(Participants)

  Participants.belongsTo(Users)
  Users.hasMany(Participants)
}

module.exports = initModels