const { gql } = require('apollo-server')

const typeDef = gql `

    type Query {
        greet                   : String
        todos                   : [Todo]
        todo(todoId : String)   : Todo
    }

    type Mutation {
        sayHello(greet : String)                : String
        addTodo(input : addTodoInput)           : Todo
        deleteTodo(todoId : String)             : Todo
        toggleTodo(input : toggleTodoInput)     : Todo
    }

# TYPES

    type Todo {
        id          : ID!,
        name        : String,
        completed   : Boolean
    }


# INPUTS

    input addTodoInput{
        name        : String,
        completed   : Boolean
    }

    input toggleTodoInput {
        id          : ID!,
        completed   : Boolean
    }

`;

module.exports = typeDef