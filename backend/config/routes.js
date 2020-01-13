module.exports = app => {
  app.route('/users')
   .post(app.api.user.save)
}


// se get, localhost:3000/users
//testar com post no postman