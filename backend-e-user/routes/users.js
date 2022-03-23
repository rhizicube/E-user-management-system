var express = require('express');
var router = express.Router();

const controller = require('../controllers/userController')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.post('/createUser', controller.createUser);
router.get('/getAllusers', controller.getAllUsers);
router.get('/getById/:id', controller.getUserById);
router.delete('/deleteuser/:id', controller.deleteData);
router.put('/updateuser', controller.updateData);
module.exports = router;
