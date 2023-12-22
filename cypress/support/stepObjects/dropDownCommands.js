class dropDownCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getdropDownLocator(){
        return cy.get('#dropdown')
    }
    
}
export default dropDownCommands;