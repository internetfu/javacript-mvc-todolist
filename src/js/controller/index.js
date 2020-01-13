export default class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.onTodoListChanged(this.model.todos);

        this.view.bindAddTodo(this.handleAddTodo.bind(this));
        this.view.bindDeleteTodo(this.handleDeleteTodo.bind(this));
        this.view.bindToggleTodo(this.handleToggleTodo.bind(this));

        this.model.bindTodoListChanged(this.onTodoListChanged.bind(this));
    }

    onTodoListChanged(todos) {
        this.view.displayTodos(todos);
    }

    handleAddTodo(todoText) {
        this.model.addTodo(todoText);
    }

    handleEditTodo(id, updatedText) {
        this.model.editTodo(id, updatedText);
    }

    handleDeleteTodo(id) {
        this.model.deleteTodo(id);
    }

    handleToggleTodo(id) {
        this.model.toggleTodo(id);
    }
}
