const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10)
}

// retorna un boolean
const comparePassword = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword)
}

module.exports = {
  hashPassword,
  comparePassword
}

