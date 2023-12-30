class inputsCommands{
    getTitleLocator(){
        return cy.get("h3")
    }

    getInputLocator(){
        return cy.get('input[type="number"]')
    }
    
}
export default inputsCommands;