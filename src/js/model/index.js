import { todos } from '../data';

export default class Model {
    constructor() {
        this.todos = todos;
        console.log(this.todos);
    }
}
