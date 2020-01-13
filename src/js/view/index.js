const createElement = (tag, className) => {
    const element = document.createElement(tag);
    if (className) element.className = className;

    return element;
};

const getElement = selector => {
    const element = document.querySelector(selector);

    return element;
};

export default class View {
    constructor() {
        this.app = getElement('#root');
        this.todoList = getElement('.todo-list');
        this.form = getElement('.todo-form');
        this.input = getElement('.add-todo');
        this._temporaryText = '';
        this._initLocalListeners();
    }

    _initLocalListeners() {
        this.todoList.addEventListener('input', event => {
            event.preventDefault();

            if (event.target.className === 'edit') {
                this._temporaryText = event.target.innerText;
            }
        });
    }

    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    displayTodos(todos) {
        while (this.todoList.firstElementChild) {
            this.todoList.removeChild(this.todoList.firstElementChild);
        }

        if (todos.length === 0) {
            const p = createElement('p');
            p.textContent = 'Nothing Added! Add a task?';
            this.todoList.append(p);
        } else {
            todos.forEach(todo => {
                const li = createElement('li');
                li.id = todo.id;

                const checkbox = createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;

                const span = createElement('span');
                span.contentEditable = true;
                span.classList.add('edit');

                if (todo.complete) {
                    const strike = createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                } else {
                    span.textContent = todo.text;
                }

                const deleteButton = createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(checkbox, span, deleteButton);

                this.todoList.append(li);
            });
        }
    }

    bindAddTodo(handler) {
        this.form.addEventListener('submit', event => {
            event.preventDefault();
            if (this._todoText) {
                handler(this._todoText);
                this._resetInput();
            }
        });
    }

    bindEditTodo(handler) {
        this.todoList.addEventListener('focusout', event => {
            event.preventDefault();

            if (this._temporaryText) {
                const id = parseInt(event.target.parentElement.id);
                handler(id, this._temporaryText);

                this._temporaryText = '';
            }
        });
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            event.preventDefault();
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);

                handler(id);
            }
        });
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            event.preventDefault();

            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);

                handler(id);
            }
        });
    }
}
