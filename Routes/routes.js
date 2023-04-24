const router = require('express').Router();

const userController = require('../controllers/userController');


router.get('/', userController.getAllUsers);
router.get('/get-user/:id', userController.getUser);
router.post('/add-new-user', userController.addNewUser);
router.delete('/delete-user/:id', userController.deleteUser);
router.put('/update-user/:id', userController.updateUser);

module.exports = router;