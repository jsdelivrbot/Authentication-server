const Authentication = require('./controllers/Authentication');
const passportService = require('./services/passport');
const passport = require('passport');
// this is the way to export functions in NODE ENV
// module.exports = function(app){
//   // Creating the routes of the app. We are defining the root, here it's ok to use fat arrow
//   // req -> request to represent the http request that they ar doing
//   // res -> Argument thast we have access to represent the response
//   // next -> Error handling way
//   // app.get('/', (req,res,next)=> {
//   //     // res.send(['watterbottle','phone','paper']);
//   // });
// }
//

const requireAuth = passport.authenticate('jwt',{session: false});
const requireSignin = passport.authenticate('local', {session: false});

module.exports = (app) => {
  app.get('/', requireAuth, (req,res) =>{
    res.send({message: 'Super secret code is ABC123'});
  });
  app.post('/signin',requireSignin, Authentication.signin);

  app.post('/signup',Authentication.signup);


}
