class redirectLinkCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getLinkToGoToStatusCode(){
        return cy.get('a')
    }
    getstatusCodeTitleLocator(){
        return cy.get("h3")
    }
    getStatusCodeList(){
        return cy.get('ul li a')
    }
}
export default redirectLinkCommands;