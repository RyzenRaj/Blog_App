const express = require('express');
const router = express.Router();
const dummyRoute = require('../controllers/likeController')
const createComment = require('../controllers/commentsController')
const {likeComment,unlikeComment} = require('../controllers/likeController')
const {createPost,getPost} = require('../controllers/postController')
 

// router.get('/dummyRoute',dummyRoute);
router.post('/comments/create',createComment);
router.post('/likes/like',likeComment);
router.post('/likes/unlike',unlikeComment);
router.post('/createPost',createPost);
router.get('/getPost',getPost);




module.exports = router;

