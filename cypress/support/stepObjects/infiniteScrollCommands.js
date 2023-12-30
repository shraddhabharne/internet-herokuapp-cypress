class infiniteScrollCommands{
    getTitleLocator(){
        return cy.get("h3")
    }

    getScrollLocator(){
        return cy.get('.jscroll-added')
    }
}
export default infiniteScrollCommands;