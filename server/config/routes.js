const usersController = require('../api/controllers/users')
const AuthMiddleware = require('../api/middleware/auth')


module.exports = (app) => {
     // ME

     app.get('/me/:id',AuthMiddleware, usersController.me);


     //Operation

     app.get('/users',AuthMiddleware,  usersController.getAll);
     app.post('/users', AuthMiddleware, usersController.create);
     app.put('/users/:id', AuthMiddleware, usersController.update);
     app.delete('/users/:id', AuthMiddleware, usersController.remove);

     // Auth

     app.post('/login', usersController.login);

     //follow

     app.post('/follow/:id', AuthMiddleware, usersController.follow);
     app.delete('/follow/:id', AuthMiddleware, usersController.unfollow);
}