import { TodoPage } from "../page-objects/todo-page";

describe('Todo-MVC-App-For-Testing-Actions', function(){   
    const todoPage = new TodoPage();

    context('720p resolution', () => {
        beforeEach(() => {
            todoPage.navigate();
            todoPage.addTask('Clean room');
        })

        it.only('Should be able to add new task to the list',function(){                
            todoPage.valideTaskTest(0, 'Clean room');
        });

        it.only('Should mark a task as completed',function(){    
            cy.get('.toggle').should('not.be.checked');
            cy.get('.toggle').click();
            cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
        });

        it.only('Should clean completed tasks',function(){               
            cy.get('.toggle').click();
            cy.get('.clear-completed').click();
            cy.get('.todo-list').should('not.have.descendants', 'li');
        });
    });
});