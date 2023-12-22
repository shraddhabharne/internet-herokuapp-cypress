class formAuthenticationCommand{

    getUserLocator()
    {
        return cy.get('#username')
    }

    getPasswordLocator()
    {
        return cy.get('#password')
    }

    getLoginButtonLocator()
    {
        return cy.get("button[type='submit']")
    }

    getContentUserLocator()
    {
        return cy.get("h4 em:nth-child(1)")
    }

    getContentPasswordLocator()
    {
        return cy.get("h4 em:nth-child(2)")
    }
    getSignoutButtonLocator()
    {
        return cy.get(".icon-signout")
    }

    getSecureTitleLocator()
    {
        return cy.get("h2")
    }

    getFlashLocator()
    {
        return cy.get("#flash")
    }

    getTitleLocator(){
        return cy.get("h2")
    }
    

    
}

export default formAuthenticationCommand;

