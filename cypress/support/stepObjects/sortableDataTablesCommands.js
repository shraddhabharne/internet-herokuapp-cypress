class dataTablesCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getTable1sHeadingLocator(){
        return cy.get('#table1 thead th span')
    }
    getTable1sBodyLocator(){
        return cy.get('#table1 tbody')
    }
    getTable1sDueLocator(){
        return cy.get('#table1 thead th:nth-child(4)')
    }
    getTable2sLastNameLocator(){
        return cy.get('#table2 tbody .last-name')
    }
    getTable2sLastNameHeaderLocator(){
        return cy.get('#table2 .header .last-name')
    }
    getTable1sWebsiteLocator(){
        return cy.get('#table1 tbody tr td:nth-child(5)')
    }
    
}export default dataTablesCommands