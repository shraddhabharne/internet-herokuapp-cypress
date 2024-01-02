class keypressCommands{

    getTitleLocator(){
        return cy.get("h3")
    }
    getTextBoxLocator(){
        return cy.get('#target')
    }
    getResultLocator(){
        return cy.get('#result')
    }


}
export default keypressCommands;