class javaScriptCommands{
    getTitleLocator(){
        return cy.get('h3')
    }

    getResultLocator(){
        return cy.get('#result')
    }

    getButtonLocator(){
        return 'button'
    }
}
export default javaScriptCommands