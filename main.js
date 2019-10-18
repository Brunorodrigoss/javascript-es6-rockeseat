class List {
    constructor() {
        this.todos = [];
    }

    add(data) {
        this.todos.push(data);
        console.log(this.todos);
    }
}
class TodoList extends List{

}

const Mylist = new TodoList();
document.getElementById('newtodo').onclick = function() {
    Mylist.add('New todo');
}