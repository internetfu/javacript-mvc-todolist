import { todos } from '../data';

export default class Model {
    constructor() {
        this.todos = todos;
        console.log(this.todos);
    }

    bindTodoListChanged(handler) {
        this.onTodoListChanged = handler;
    }

    addTodo(todoText) {
        const todosLength = this.todos.length;

        const todo = {
            id: todosLength > 0 ? this.todos[todosLength - 1].id + 1 : 1,
            text: todoText,
            complete: false
        };

        this.todos.push(todo);
    }

    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.text = updatedText;
            }

            return todo;
        });
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);

        this.onTodoListChanged(this.todos);
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }

            return todo;
        });
    }
}
