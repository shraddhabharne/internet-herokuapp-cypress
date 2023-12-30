class jQueryUIMenusCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getDisabledMenuLocator(){
        return cy.get('#ui-id-1')
    }
    getDisabledSubMenuLocator(){
        return cy.get('#ui-id-2')
    }
    getEnabledMenuLocator(){
        return cy.get('#ui-id-3')
    }
    getBackToJQueryUIMenuLocator(){
        return cy.get('#ui-id-8')
    }
    getbackToJQueryLinkLocator(){
        return cy.get('ul li a')
    }
    getDownloadsMenuLocator(){
        return cy.get('#ui-id-4')
    }
    getDownloadsSubMenuLocator(){
        return cy.get('#ui-id-4 .ui-menu')
    }
}
export default jQueryUIMenusCommands;