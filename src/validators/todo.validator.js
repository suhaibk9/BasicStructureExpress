function createTodoValidator(req, res, next) {
  if (!req.body.todoText) {
    return res.status(400).json({
      error: 'Todo text is required',
    });
  }
  next();
}
module.exports = {
  createTodoValidator,
};
