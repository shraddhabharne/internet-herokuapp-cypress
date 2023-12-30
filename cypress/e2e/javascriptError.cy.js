///<reference type="cypress">
import javascriptErrorData from '../fixtures/javascriptError.json'

describe("Javascript Error",()=>{
// This does not fails the test due to console error just passes it and displays the uncaught exception
//Reference: https://stackoverflow.com/questions/62980435/the-following-error-originated-from-your-application-code-not-from-cypress
    it('verifies there is a console error',(done)=>{
      
        cy.clickOnAvailableExamples(javascriptErrorData.elementName, javascriptErrorData.urlPath)
        cy.on('uncaught:exception', (err, runnable) => {
            expect(err.message).to.include('The following error originated from your application code, not from Cypress')
        
            // using mocha's async done callback to finish
            // this test so we prove that an uncaught exception
            // was thrown
            done()
        
            // return false to prevent the error from
            // failing this test
            return false
          })


})


}) 