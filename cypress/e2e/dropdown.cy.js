/// <reference type="cypress">
import dropdownData from '../fixtures/dropdownData.json'
import dropDownCommands from '../support/stepObjects/dropDownCommands'
describe("Dropdown element",()=>{
    beforeEach("Visit the URL",()=>{
        const dropDownCommand = new dropDownCommands()
        cy.clickOnAvailableExamples(dropdownData.elementName,dropdownData.urlPath)
        cy.pageTitleVerification(dropDownCommand.getTitleLocator(),dropdownData.expectedTitle)
    })
    it("Validate item selected",()=>{
      //  cy.visit("/dropdown")
       // cy.contains('h3','Dropdown List')
        const dropDownCommand = new dropDownCommands()
        dropDownCommand.getdropDownLocator().should("contain.text",dropdownData.defaultValue)
        dropDownCommand.getdropDownLocator().select(1)
        dropDownCommand.getdropDownLocator().should("have.value","1")
            .and("contain.text",dropdownData.dropDownText1)
            dropDownCommand.getdropDownLocator().select(2)
            dropDownCommand.getdropDownLocator().should("have.value","2")
            .and("contain.text",dropdownData.dropDownText2)
    })
})