const userService = require('../repos/UserRepos');

class UserController {

    getUser(req, res) {
        userService.getUsers()
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                console.log("Promise rejection error: " + err);
            })
    }

    addNewUser(dataUser, res) {
        console.log(dataUser.body);
        userService.addNewUser(dataUser.body)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                console.log("" + err);
            })
    }

    deleteUser(id, res) {
        userService.deleteUser(id)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                console.log("" + err);
            })
    }

    updateUser(employeeObjectForUpdate, res) {
        userService.updateUser(employeeObjectForUpdate)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                res.send(err);
            })
    }

    getUserById(idUser, res) {
        userService.getUserById(idUser)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                res.send(err);
            })
    }
    filterUserByName(name, res) {
        userService.filterUserByName(name)
            .then(function (result) {
                res.send(result);
            })
            .catch(function (err) {
                res.send(err);
            })
    }
}

module.exports = new UserController();
