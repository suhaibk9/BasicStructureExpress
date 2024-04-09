const express = require('express');
const { getTodo, createTodo } = require('../../controllers/todo.controller');
const { createTodoValidator } = require('../../validators/todo.validator');
const router = express.Router();
router.get('/', getTodo);
router.post('/', createTodoValidator, createTodo);
module.exports = router;
