class entryAdCommands{

    getTitleLocator(){
        return cy.get('h3')
    }

    getClickHereLocator(){
        return cy.get('#restart-ad')
    }
    getCloseLocator(){
        return cy.get('.modal-footer p')
    }
    getModalTitleLocator(){
        return cy.get('.modal-title h3')
    }
  
   

}
export default entryAdCommands;