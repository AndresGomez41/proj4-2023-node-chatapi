const router = require('express').Router()

const conversationServices = require('./conversations.services')
const messageServices = require('../messages/messages.services')

const passportJwt = require('../middlewares/auth.middleware')

router.route('/')
    .get(passportJwt, conversationServices.getAllConversationsByUser)
    .post(passportJwt, conversationServices.postNewConversation)

// router.route('/:id')
//   .get()
//   .patch()
//   .delete()

// router.route('/:id/messages')
//   .get()
//   .post()

module.exports = router