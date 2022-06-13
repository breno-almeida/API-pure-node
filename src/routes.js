const UserController = require('./controllers/UserController');

module.exports = [
    {
        method: 'GET',
        endpoint: '/users',
        handler: UserController.listUsers
    },
    {
        endpoint: '/users/:id',
        method: 'GET',
        handler: UserController.getUser
    },
    {
        endpoint: '/users',
        method: 'POST',
        handler: UserController.createUser
    },
    {
        endpoint: '/users/:id',
        method: 'PUT',
        handler: UserController.updateUser
    },
    {
        endpoint: '/users/:id',
        method: 'DELETE',
        handler: UserController.deleteUser
    }

]
