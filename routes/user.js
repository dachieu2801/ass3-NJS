const express = require('express');
const router = express.Router();
const isAuth = require('../middleware/isAuth')

const UserController = require('../controllers/user');

router.post('/signup', UserController.register);
router.post('/signin/admin', UserController.signinAdmin);
router.post('/signin', UserController.signin);
router.put('/editUser', UserController.editUser);
router.get('/admin/:id', isAuth.admin, UserController.detailUser);
router.get('/admin', isAuth.admin, UserController.collectUsers);
router.get('/', UserController.allUsers);


module.exports = router;
