import { computed, observable } from 'mobx';

class TodoStore {
    // observable 參數變化，會去重新render畫面
    @observable todos = ["buy milk", "buy cheese"];
    @observable filter = "";
    // computed 是因為 @observable filter參數改變，才讓TodoList rerender，這時才再次去計算filterTodos
    @computed get filteredTodos() {
        // i: ignore case
        // 將輸入的this.filter做為條件，只要有一個部分是mapping到一樣的，就會是true
        var matchesFilter = new RegExp(this.filter, 'i'); 
        // !this.filter ||  表示 當filter true時 才會去執行後面那行．
        // todos.filter 會過濾 條件是true的取回來．
        return this.todos.filter(todo => !this.filter || matchesFilter.test(todo));
    }
}
var store = window.store = new TodoStore;

export default store;

// autorun(() => {
//     console.log(store.filter);
//     console.log(store.todos[0]);
// });