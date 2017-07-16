import { computed, observable } from 'mobx';

class Todo {
    @observable value;
    @observable id;
    @observable complete;

    constructor(value) {
        this.value = value;
        this.id = Date.now();
        this.complete = false;
    }
}
class TodoStore {
    // observable 參數變化，會去重新render畫面
    @observable todos = [];
    @observable filter = "";
    // computed 是因為 @observable filter參數改變，才讓TodoList rerender，這時才再次去計算filterTodos
    @computed get filteredTodos() {
        // i: ignore case
        // 將輸入的this.filter做為條件，只要有一個部分是mapping到一樣的，就會是true
        var matchesFilter = new RegExp(this.filter, 'i'); 
        // !this.filter ||  表示 當filter true時 才會去執行後面那行．
        // todos.filter 會過濾 條件是true的取回來．
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo.value));
    }
    createTodo(value) {
        this.todos.push(new Todo(value));
    }
    // array.replace() 保持原本的array，只更新內容 被新的array內容取代
    clearComplete = () => {
        const inCompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(inCompleteTodos);
    }
}
var store = window.store = new TodoStore;

export default store;