const express = require('express')
const userController = require('../controller/userController')
const projectController = require('../controller/projectController')
const jwtMiddleWares = require('../middleWares/jwtMiddleWares')
const multerMiddleware = require('../middleWares/multerMiddleware')

const router = new express.Router()

// register post
router.post('/register',userController.registerController)

// login post
router.post('/login',userController.loginController)

// add-project post
router.post('/add-project',jwtMiddleWares,multerMiddleware.single('projectImage'),projectController.addProjectController)

// home-project get
router.get('/home-project',projectController.getHomeProjectsController)

// user-project get
router.get('/user-project',jwtMiddleWares,projectController.getUserProjectsController)

// all-project get
router.get('/all-project',jwtMiddleWares,projectController.getAllProjectsController)

// edit-project - put
router.put('/projects/:id/edit',jwtMiddleWares,multerMiddleware.single('projectImage'),projectController.editProjectController)

// remove-project - delete
router.delete('/projects/:id/remove',jwtMiddleWares,projectController.removeProjectController)

// edit user - put
router.put('/user/edit',jwtMiddleWares,multerMiddleware.single("profilePic"),userController.editUserController)


module.exports = router

// vj