const {
  addTodoService,
  getTodosService,
  getTodoByIDService,
  toggleTodoCompletedService,
  deleteTodoService,
} = require("../services/todoServices");

const resolvers = {
  Query: {
    greet: () => "hi",
    todos: () => getTodosService(),
    todo: (_, { todoId }, __) => getTodoByIDService(todoId),
  },

  Mutation: {
    sayHello: (_, { greet }, __) => greet,
    addTodo: (_, { input }, __) => addTodoService(input),
    deleteTodo: (_, { todoId }, __) => deleteTodoService(todoId),
    toggleTodo: (_, { input }, __) => toggleTodoCompletedService(input),
  },
};

module.exports = resolvers;
