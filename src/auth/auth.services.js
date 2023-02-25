const checkUserCredentials = require('./auth.controllers')
const response = require('../utils/handleResponses')
const jwt = require('jsonwebtoken')

const postLogin = (req,res) => {
  const {email, password} = req.body
  checkUserCredentials( email, password )
    .then( data => {
        if(data){

          const token = jwt.sign({
            id: data.id,
            email: data.email,
            firstName: data.firstName
          },
          'academlo',
          {
            expiresIn: 30
          })

          response.success({
            status:200,
            message: 'correct credentials',
            data: token,       
            res     
          })
        }else{
          response.error({
            status: 401,
            message: 'Invalid credentials',
            data,     
            res,      
          })
        }
    })
    .catch( err => {
      response.error({
        res,
        status: 400,
        data: err,
        message: 'something went wrong',
        fields:{
          email:"123@example.com",
          password: "string"
        }
      })
    })
}

module.exports = postLogin
