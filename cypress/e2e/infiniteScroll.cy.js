/// <reference type="cypress">
import infiniteScrollCommands from "../support/stepObjects/infiniteScrollCommands"
import infiniteScrollData from '../fixtures/infinitScrollData.json'
describe("Infinite Scroll", ()=>{

    it("Intercept to scroll",()=>{
        const infiniteScrollCommand = new infiniteScrollCommands()
        cy.clickOnAvailableExamples(infiniteScrollData.elementName, infiniteScrollData.urlPath)
        cy.pageTitleVerification( infiniteScrollCommand.getTitleLocator(),infiniteScrollData.expectedTitle)
        cy.intercept('GET','**/infinite_scroll/*').as('jscroll')
        infiniteScrollCommand.getScrollLocator().should('have.length','1')
      
        for(let i=0;i<20;i++)
        {
            cy.window().scrollTo('bottom')
            cy.wait('@jscroll')
            cy.wait(300)
       }
       // The length of .jscroll-added after the for loop should be incremented by one however 
       // an additional .jscroll-added gets added after executing the for loop
       // Hence kept the length incremented by 2
       infiniteScrollCommand.getScrollLocator().should('have.length',22)
        
    })


})
