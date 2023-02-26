const conversationControllers = require('../conversations/conversations.controllers')
const responses = require('../utils/handleResponses')

const getAllConversationsByUser =  (req, res) => {
  const userId = req.user.id 
  conversationControllers.findAllConversationsByUser(userId)
    .then( data => {
      responses.success({
        res,
        status:200,
        message: data.length ? 'Showing all your conversations':'No conversations to show' ,
        data
      })
    })
    .catch( err => {
      responses.error({
        res,
        status:400,
        message: 'something went wrong',
        data: err,
        fields:{}
      })
    })
}

const postNewConversation = (req,res) => {

  const ownerId = req.user.id
  const {guestId, ...conversationObj} = req.body

  conversationControllers.createConversation(conversationObj, ownerId, guestId)
    .then( data => {
      if( data ){
        responses.success({
          res,
          status:201,
          message: 'Conversation created succesfully',
          data
        })
      } else {
        responses.error({
          res,
          status: 400,
          message: `User with id: ${guestId} not found`,
          data,
          fields:{}
        })

      }
    }).catch( err => {
      responses.error({
        res,
        status:400,
        message: err.message || 'something went wrong',
        data: err,
        fields:{
          guestId: 'uuid',
          name: 'string',
          profileImage: 'string',
          isGroup: 'boolean'
        }
      })
    })
}



module.exports = {
  getAllConversationsByUser,
  postNewConversation
}