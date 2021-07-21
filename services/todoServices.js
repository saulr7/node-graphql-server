const { Todos } = require("../db/db");

const addTodoService = async (input) => {
  const newTodo = new Todos({ ...input });
  return await newTodo.save();
};

const getTodosService = () => {
  return Todos.find({});
};

const getTodoByIDService = (todoId) => {
  return Todos.findById(todoId);
};

const toggleTodoCompletedService = async ({ id, completed }) => {
  return await Todos.findOneAndUpdate(
    { _id: id },
    { completed },
    { useFindAndModify: false }
  );
};

const deleteTodoService = async (todoId) => {
  return await Todos.findOneAndRemove(
    { _id: todoId },
    { useFindAndModify: false }
  );
};

module.exports = {
  addTodoService,
  deleteTodoService,
  getTodoByIDService,
  getTodosService,
  toggleTodoCompletedService,
};
