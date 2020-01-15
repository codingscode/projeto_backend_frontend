module.exports = app => {
  app.route('/users')
   .post(app.api.user.save)
   .get(app.api.user.get)

  app.route('/users/:id')
   .put(app.api.user.save)
   .get(app.api.user.getById)
 
}


// se get, localhost:3000/users
//testar com post no postman