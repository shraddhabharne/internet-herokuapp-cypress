class notificationMessageCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getFlashMessageLocator(){
        return cy.get('#flash')
    }
   getClickHereLocator(){
    return cy.get('a')
   }
   getFlashCloseLocator(){
    return cy.get('#flash a')
   }
    
}
export default notificationMessageCommands;