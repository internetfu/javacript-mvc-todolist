import { todos } from '../data';

export default class Model {
    constructor() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || todos;
    }

    bindTodoListChanged(handler) {
        this.onTodoListChanged = handler;
    }

    _storeData(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    addTodo(todoText) {
        const todosLength = this.todos.length;

        const todo = {
            id: todosLength > 0 ? this.todos[todosLength - 1].id + 1 : 1,
            text: todoText,
            complete: false
        };

        this.todos.push(todo);
        this._storeData(this.todos);
    }

    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.text = updatedText;
            }

            return todo;
        });

        this._storeData(this.todos);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);

        this._storeData(this.todos);
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo => {
            if (todo.id === id) {
                todo.complete = !todo.complete;
            }

            return todo;
        });

        this._storeData(this.todos);
    }
}
