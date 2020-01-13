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
    }

    get _todoText() {
        return this.input.value;
    }

    _resetInput() {
        this.input.value = '';
    }

    displayTodos(todos) {
        const todoListFirstChild = this.todoList.firstElementChild;
        while (todoListFirstChild) {
            this.todoList.removeChild(todoListFirstChild);
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
                span.classList.add('editable');

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
}
