class largeAndDeepDOMCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getsiblingDivLocator(){
        return cy.get('.tier-38')
    }
    getTableColmLocator(){
        return cy.get('.column-49')
    } 
    getTableRowColmLocator(){
        return cy.get('.row-7 .column-12')
    }
    getTotalTableColmLocator(){
        return cy.get('thead tr th')
    }
    getTotalTableRowLocator(){
        return cy.get('tbody tr')
    }
    getSectionTitleLocator(){
        return cy.get('.example h4')
    }
}
export default largeAndDeepDOMCommands; 