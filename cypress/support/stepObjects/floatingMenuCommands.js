class floatingMenuCommands{

    getTitleLocator(){
        return cy.get("h3")
    }

    getMenuLocator(){
        return cy.get("#menu li")
    }
    
}
export default floatingMenuCommands;