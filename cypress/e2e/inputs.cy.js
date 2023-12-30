/// <reference types="cypress"/>

import inputsData from '../fixtures/inputsData.json'
import inputsCommands from '../support/stepObjects/inputsCommands'

describe("Input Numbers", ()=>{
    beforeEach(()=>{
        const inputsCommand = new inputsCommands()
        cy.clickOnAvailableExamples(inputsData.elementName, inputsData.urlPath)
        cy.pageTitleVerification(inputsCommand.getTitleLocator(), inputsData.expectedTitle)
    })

    it("enters only numbers, on use of up arrow key value increments",()=>{
        const inputsCommand = new inputsCommands()
        inputsCommand.getInputLocator().type(inputsData.inputValue)
        for(let i=0;i<inputsData.incrementValue;i++){
            inputsCommand.getInputLocator().type("{upArrow}")
        }
        
        const newValue = parseInt(inputsData.inputValue+inputsData.incrementValue)
        inputsCommand.getInputLocator().should('have.value',newValue)
        
    })

    it("enters only numbers,on decrement can go to negate values",()=>{
        const inputsCommand = new inputsCommands()
        inputsCommand.getInputLocator().type(inputsData.inputValue)
        for(let i=0;i<inputsData.decrementValue;i++){
            inputsCommand.getInputLocator().type("{downArrow}")
        }
        const newValue = parseInt(inputsData.inputValue-inputsData.decrementValue)
        inputsCommand.getInputLocator().should('have.value',newValue)
        
    })

    it("enters alphabets to confirm that its not accepted",()=>{
        const inputsCommand = new inputsCommands()
        inputsCommand.getInputLocator().type("ABCDEFG").should('have.value',"") 
    })


})
