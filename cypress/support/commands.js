// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import formAuthentication from "../fixtures/formAuthenticationData.json"
import formAuthenticationCommand from "./stepObjects/formAuthenticationCommands";
import 'cypress-iframe';
import 'cypress-map';

require('@4tw/cypress-drag-drop')
require ('cy-verify-downloads').addCustomCommand();
Cypress.Commands.add('GoToUrl', (urlpath, titleElement,expectedTitle) => { 
    cy.visit('/'+urlpath)
    cy.get(titleElement).contains(expectedTitle)
 })



 Cypress.Commands.add('clickOnAvailableExamples', (elementName, urlPath) => { 
    cy.visit('/')
    cy.contains(elementName).click()
    cy.url().should('contain',urlPath)
  })

 Cypress.Commands.add('pageTitleVerification', ( titleLocator,expectedTitle) => { 
    if(titleLocator && expectedTitle !='')
     titleLocator.contains(expectedTitle)
})


 Cypress.Commands.add('login', () => { 
   const formCommand =new formAuthenticationCommand()
   formCommand.getUserLocator().click().type(formAuthentication.user)
   formCommand.getPasswordLocator().click().type(formAuthentication.password)
   formCommand.getLoginButtonLocator().click()
     
})
