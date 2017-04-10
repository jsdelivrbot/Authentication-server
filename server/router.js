const Authentication = require('./controllers/Authentication');


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

module.exports = (app) => {
  app.post('/signup',Authentication.signup);
}
