import { TodoPage } from "../page-objects/todo-page";

describe('Todo-MVC-App-For-Testing Visual Validation', function(){   
    const todoPage = new TodoPage();
    before(() => {
        todoPage.navigate();
    });

    beforeEach(() => {
        todoPage.navigate();
        cy.eyesOpen({appName: "Test MVC", batchName: "Test MVC1"});
    });

    afterEach(() => {
        cy.eyesClose();
    });

    it.only('Should be able to add new task to the list',function(){
        cy.eyesCheckWindow('Empty task list');

        todoPage.addTask('Clean room');
        todoPage.addTask('Learn Js');
        cy.eyesCheckWindow('Two tasks');
        
        todoPage.toggleTask(0);
        cy.eyesCheckWindow('Mark as complete');
    });
});