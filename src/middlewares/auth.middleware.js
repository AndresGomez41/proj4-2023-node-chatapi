
const { ExtractJwt, Strategy } = require('passport-jwt')
const passport = require('passport')
const { findUserById } = require('../users/users.controllers')

// configuraciones basicas para manejar passport con jwt
const passportConfigs = {
  // esta configuracion permite extrar el bearer token de la peticion
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'academlo' 
}

// tokenDecoded coge el token y lo decodifica, toma el payload del token 
// done( error, usuario)
// la estrategia es la que determina como acceder por google, facebook, jwt , etc
passport.use( new Strategy( passportConfigs, ( tokenDecoded, done) => {
  findUserById(tokenDecoded.id)
    .then( data =>{
      if(data){
        done( null, tokenDecoded ) // el usuario si existe y es valido
      }else{
        done( null, false ) // el usuario no existe
      }
    })
    .catch( err => {
      done( err, false ) //error en la base de datos
    })
}))

module.exports = passport.authenticate('jwt',{session:false})