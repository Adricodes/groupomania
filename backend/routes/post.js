const express = require('express')
const router = express.Router()

const postsCtrl = require('../controllers/post')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

router.post('/', auth, multer, postsCtrl.createPost)
router.get('/:id', auth, postsCtrl.getOnePost)
router.get('/', auth, postsCtrl.getAllPosts)
// TODO add route for marking a post as read
// router.get('/:id', auth, postsCtrl.postRead)

module.exports = router