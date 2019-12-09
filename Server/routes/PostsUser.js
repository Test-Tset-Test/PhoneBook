const express = require('express');
const router = express.Router();
const postController = require('../controllers/UserController');

router.get('/userList', function (req, res) {
    postController.getUser(req, res);
});

router.post('/addUser', function (req, res) {
    postController.addNewUser(req, res);
});

router.delete('/userDelete/:id', function (req, res) {
    postController.deleteUser(req, res);
});

router.put('/updateUser', function (req, res) {
    postController.updateUser(req, res);
});

router.get('/userById/:id', function (req, res) {
    postController.getUserById(req, res);
});

router.get('/filterUser/:dataForFilter', function (req, res) {
    postController.filterUserByName(req.params.dataForFilter, res);
})

module.exports = router;
