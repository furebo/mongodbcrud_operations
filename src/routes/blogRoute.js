import express from 'express';

import { createBlog } from '../controllers/blogController.js';
import { getBlogs } from '../controllers/blogController.js';
import {getBlog} from '../controllers/blogController.js';
import { updateBlog } from '../controllers/blogController.js';
import { deleteBlog } from '../controllers/blogController.js';

const router = express.Router();

router.post('/blogs',createBlog);
router.get('/blogs',getBlogs);
router.get('/blogs/:id',getBlog);
router.put('/blogs/:id',updateBlog);
router.delete('/blogs/:id',deleteBlog);

export default router;