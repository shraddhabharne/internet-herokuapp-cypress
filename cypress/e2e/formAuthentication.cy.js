/// <reference type="cypress">
import formAuthentication from "../fixtures/formAuthenticationData.json"
import formAuthenticationCommands from "../support/stepObjects/formAuthenticationCommands"

describe("Form Authentication", ()=>{
    beforeEach(()=>{
        const formCommands= new formAuthenticationCommands()
        cy.clickOnAvailableExamples(formAuthentication.elementName,formAuthentication.urlPath)
        cy.pageTitleVerification(formCommands.getTitleLocator(),formAuthentication.expectedTitle)
        
    })
    it("Validate Error Message", function(){
        
        const formCommands= new formAuthenticationCommands()
        formCommands.getUserLocator().click().type(formAuthentication.password)
        formCommands.getPasswordLocator().click().type(formAuthentication.user)
        formCommands.getLoginButtonLocator().click()
        formCommands.getFlashLocator().contains(formAuthentication.errorMessage)
    })

    it("Validate Success Message", function(){
        const formCommands= new formAuthenticationCommands()

        formCommands.getUserLocator().click().type(formAuthentication.user)
        formCommands.getPasswordLocator().click().type(formAuthentication.password)
        formCommands.getLoginButtonLocator().click()
        
        cy.url().should('include', formAuthentication.newSecureUrl)
        formCommands.getFlashLocator().contains(formAuthentication.successMessage)
        formCommands.getSecureTitleLocator().contains(formAuthentication.secureTitle)
        // Logout 
        
        formCommands.getSignoutButtonLocator().click()
        formCommands.getFlashLocator().contains(formAuthentication.loggedOutMessage)
    })

    it("Retrieve credentails from the content and confirm success message", function(){
        const formCommands= new formAuthenticationCommands()
        let username
        let password
      
        formCommands.getContentUserLocator().should('contain','tomsmith')
        formCommands.getContentPasswordLocator().should('contain','SuperSecretPassword!')
        formCommands.getContentUserLocator().then($value => {
            username = $value.text()
            cy.wrap(username).as('wrapValue')
            cy.log(username)
        }).then(username=>{
            formCommands.getUserLocator().type(this.wrapValue)
            })

        formCommands.getContentPasswordLocator().then($value => {
            password = $value.text()
            cy.wrap(password).as('password')
            cy.log(password)
        }).then(password=>{
            formCommands.getPasswordLocator().type(this.password)
            })
       
        formCommands.getLoginButtonLocator().click()
        formCommands.getFlashLocator().should('contain',formAuthentication.successMessage)
        formCommands.getSecureTitleLocator().contains(formAuthentication.secureTitle)
    })

    it("Validate login using command.js", function(){
        const formCommands= new formAuthenticationCommands()
        cy.login()
        formCommands.getFlashLocator().should('contain',formAuthentication.successMessage)
        formCommands.getSecureTitleLocator().contains(formAuthentication.secureTitle)
    })

})