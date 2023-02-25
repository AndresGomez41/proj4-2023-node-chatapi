const { findUserByEmail } =require('../users/users.controllers')
const { comparePassword } = require('../utils/crypto')

const checkUserCredentials = async (email, password) => {
  try {
    const user = await findUserByEmail(email)
    const verifyPassword = comparePassword(password, user.password)
    if(verifyPassword){
      return user
    }else{
      return false
    }
  } catch (error) {
    return false
  }
}

// checkUserCredentials ('asdf@example.com','asdf')
//   .then( data => console.log(data))
//   .catch( err => console.log(err))

module.exports = checkUserCredentials
