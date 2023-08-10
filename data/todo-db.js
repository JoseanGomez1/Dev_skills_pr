// data/todo-db.js

const todos = [
    { todo: "Bob is", done: true },
    { todo: "Learn Express", done: false },
    { todo: "Buy Milk", done: false },
    { todo: "Big Funk", done: false },
];


module.exports = {
    getAll: function(){
        return todos
    }
}