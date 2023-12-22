///<reference type="cypress">

import nestedFramesCommands from "../support/stepObjects/nestedFramesCommands"
import nestedFrameData from "../fixtures/nestedFramesData.json"

// Use iFrame plugin for a test: npm install -D cypress-iframe
// https://www.npmjs.com/package/cypress-iframe?ref=cypress-io.ghost.io
beforeEach(()=>{
    const iframesCommand = new nestedFramesCommands()
    cy.clickOnAvailableExamples(nestedFrameData.elementName,nestedFrameData.urlPath)
     
})


describe("Nested Frames",()=>{
    it("Text in frames present on the page",()=>{
        const iframesCommand = new nestedFramesCommands()        
        iframesCommand.getMainFrame().then(el =>{               
            const body = el.contents().find('html').find('body')       
            cy.wrap(body).then( el => {
                expect(el[0].innerText, 'Assert frame BOTTOM').equal(nestedFrameData.iFrameDataBottom)
        
            })
        })

    })

    it("Text in frameset using iFrame plugin",()=>{
        const iframesCommand = new nestedFramesCommands()
        iframesCommand.getFirstFrameUnderMainFrame().then(getBody => {
            getBody().find(iframesCommand.getLeftFrameElement())
            .its('0.contentDocument')
            .within(()=>{
                    cy.get('body').should('contain',nestedFrameData.iFrameDataLeft)
                    })
        })

        iframesCommand.getFirstFrameUnderMainFrame().then(getBody => {
            getBody().find(iframesCommand.getMiddleFrameElement())
            .its('0.contentDocument')
            .within(()=>{
                    cy.get('body').should('contain',nestedFrameData.iFrameDataMiddle)
                    })
        })

        iframesCommand.getFirstFrameUnderMainFrame().then(getBody => {
            getBody().find(iframesCommand.getRightFrameElement())
            .its('0.contentDocument')
            .within(()=>{
                    cy.get('body').should('contain',nestedFrameData.iFrameDataRight)
                    })
        })

        
      
        cy.frameLoaded('frame[name="frame-bottom"]')

        iframesCommand.getBottomFrame().then(getBody => {
            getBody().contains(nestedFrameData.iFrameDataBottom).should('be.visible')
          })
       
    })

    it('Gleb code to understand iframe',()=>{
        const getIframeDocument = () => {
            return cy
            .get('frameset frame:nth-child(1)')
            // Cypress yields jQuery element, which has the real
            // DOM element under property "0".
            // From the real DOM iframe element we can get
            // the "document" element, it is stored in "contentDocument" property
            // Cypress "its" command can access deep properties using dot notation
            // https://on.cypress.io/its
            .its('0.contentDocument').should('exist')
          }
    
        const getIframeBody = () => {
            // get the document
            return getIframeDocument()
            // automatically retries until body is loaded
            .its('body').should('not.be.undefined')
            // wraps "body" DOM element to allow
            // chaining more Cypress commands, like ".find(...)"
            .then(cy.wrap)
          }
          getIframeBody().find('frame[name="frame-left"]').should('exist')
    })
})

