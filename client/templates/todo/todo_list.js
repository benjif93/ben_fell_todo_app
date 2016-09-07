var todoData = [
    {
        id: '1',
        title: 'Write App',
        complete: '1'
    },
    {
        id: '2',
        title: 'Meteor',
        complete: '0'
    }
];
Template.todoList.helpers({
   todos: todoData
});