const express = require('express');
const router = express.Router();
const controller = require('../controllers/postController')
router.get('/post', controller.get);
router.post('/post', controller.post);
router.put('/post/:id', controller.put);
router.delete('/post/:id', controller.delete);
module.exports = router;