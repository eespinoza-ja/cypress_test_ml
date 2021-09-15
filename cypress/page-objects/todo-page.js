export class TodoPage {
    navigate(){
        cy.viewport(1280, 720)
        cy.visit('https://todomvc-app-for-testing.surge.sh/');
    }

    addTask(taskTest){
        cy.get('.new-todo', {timeout:6000}).type(taskTest+ '{enter}');
    }

    valideTaskTest(taskIndex, expectedTest){
        cy.get(`.todo-list li:nth-child(${taskIndex + 1}) label`).should('have.text', expectedTest);
    }

    toggleTask(taskIndex){
        cy.get(`:nth-child(${taskIndex + 1}) > .view > .toggle`).click();
    }
}