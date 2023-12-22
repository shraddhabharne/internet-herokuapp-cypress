class exitIntentCommands{

    getTitleLocator(){
        return cy.get('h3')
    }

    getCloseLocator(){
        return cy.get('.modal-footer p')
    }

    getModalTitleLocator(){
        return cy.get('.modal-title h3')
    }
    
    getBodyLocator(){
        return cy.get('body')
    }
  


}
export default exitIntentCommands;