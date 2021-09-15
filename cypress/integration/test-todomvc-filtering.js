describe('Todo-MVC-App-For-Testing-Filtering', function(){   
    context('720p resolution', () => {
        beforeEach(() => {
            cy.viewport(1280, 720)
            cy.visit('https://todomvc-app-for-testing.surge.sh/');
            cy.get('.new-todo', {timeout:6000}).type('Clean room{enter}');
            cy.get('.new-todo', {timeout:6000}).type('Learn JS{enter}');
            cy.get('.new-todo', {timeout:6000}).type('Use Cypress{enter}');
            cy.get(':nth-child(2) > .view > .toggle').click();
        })

        it.only('Should filter active tasks',function(){                
            cy.contains('Active').click();
            cy.get('.todo-list li').should('have.length', 2);
        });

        it.only('Should filter completed tasks',function(){                
            cy.contains('Completed').click();
            cy.get('.todo-list li').should('have.length', 1);
        });

        it.only('Should filter all tasks',function(){                
            cy.contains('All').click();
            cy.get('.todo-list li').should('have.length', 3);
        });
    });
});