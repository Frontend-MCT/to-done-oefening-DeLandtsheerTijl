(function(){ 
    //kunnen checken voor domcontentloaded maar is nu niet nodig, dit gebeurt al
    //document.addEventListener('DOMContentLoaded', ...)

    document.addEventListener('DOMContentLoaded', function(){
        todoUI.setupTodoApp({
            titleClass: '.js-new-title',
            categoryClass: '.js-new-category',
            todoHolderClass: '.js-todo-items',
            todoCounterClass: '.js-todos-count',
            todoAddClass: '.js-new-add'
        });
        todoUI.handleNewTodo(function(title, category){
            // Te veel werk voor ons, moet in het model komen en ook nog in sync
            // zijn met onze 'backend' localstorage
            // zorg ervoor dat de todo module onderstaande waarden print
            todoModule.addTodo(title, category);
        });
    });    
})();