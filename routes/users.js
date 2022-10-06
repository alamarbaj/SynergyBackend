var express = require('express');
var router = express.Router();
var{listUser,addUser,getById,userUpdate,userDelete,changeUserPassword,login} = require('../controller/userController')

router.get('/getUser',listUser)
router.post('/addUser',addUser)
router.get('/getById/:_id',getById)
router.post('/userUpdate',userUpdate)
router.get('/userDelete/:_id',userDelete)
router.post('/changeUserPassword/:_id',changeUserPassword)
router.get('/login',login)


module.exports = router;
