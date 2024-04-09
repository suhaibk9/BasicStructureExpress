const TodoService = require('../service/todo.service');
const TodoRepository = require('../repositories/todo.repository');
const todoService = new TodoService(new TodoRepository());
const getTodo = (req, res) => {
  const response = todoService.getAllTodos();
  return res.json({ data: response });
};
const createTodo = (req, res) => {
  const todoText = req.body.todoText;
  todoService.create(todoText);
  return res.json({ status: 'Todo Created' });
};
module.exports = {
  createTodo,
  getTodo,
};
