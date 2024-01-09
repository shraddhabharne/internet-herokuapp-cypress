///<reference type='cypress'>
import shadowDOMData from '../fixtures/shadowDOMData.json'
import shadowDOMCommands from '../support/stepObjects/shadowDOMCommands'
describe("Shadow DOM",()=>{
    beforeEach(()=>{
       const shadowDOMCommand = new shadowDOMCommands()
       cy.clickOnAvailableExamples(shadowDOMData.elementName,shadowDOMData.urlPath)
       cy.pageTitleVerification(shadowDOMCommand.getTitleLocator(),shadowDOMData.expectedTitle)
    })
  
    it("confirms css properties and default text mentioned under the shadow DOM",()=>{
        const shadowDOMCommand = new shadowDOMCommands()
        shadowDOMCommand.getParagraphSpanLocator().should('have.text',shadowDOMData.paragraphText)
        shadowDOMCommand.getShadowPLocator().should('have.css', 'background-color', shadowDOMData.backgroundColorValue)
        shadowDOMCommand.getShadowPLocator().should('have.css', 'color', shadowDOMData.colorValue)
        shadowDOMCommand.getShadowPLocator().eq(1).should('have.text',shadowDOMData.shadowDefaultText)
     })
})