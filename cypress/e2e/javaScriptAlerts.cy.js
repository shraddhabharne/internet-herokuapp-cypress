///<reference typr = "cypress">
import javaScriptAlertsData from '../fixtures/javaScriptAlertsData.json'
import javaScriptCommands from '../support/stepObjects/javaScriptAlertsCommands'

describe("JavaScript Alerts",()=>{
    beforeEach(()=>{
        const javaScriptCommand = new javaScriptCommands()
        cy.clickOnAvailableExamples(javaScriptAlertsData.elementName, javaScriptAlertsData.urlPath)
        cy.pageTitleVerification( javaScriptCommand.getTitleLocator(),javaScriptAlertsData.expectedTitle)
    })
    it('verifies JS alert',()=>{
        const javaScriptCommand = new javaScriptCommands()
        cy.contains(javaScriptCommand.getButtonLocator(),javaScriptAlertsData.alertButton).click()
        cy.on('window:alert',(alert)=>{
            expect(alert).to.contain(javaScriptAlertsData.alertMessage)
        })
        javaScriptCommand.getResultLocator().should('contain',javaScriptAlertsData.resultAlertText)
    })
    it('verifies JS confirm ',()=>{
        const javaScriptCommand = new javaScriptCommands()
        cy.contains(javaScriptCommand.getButtonLocator(),javaScriptAlertsData.confirmButton).click()
        cy.on('window:confirm',(confirm)=>{
            expect(confirm).to.contain(javaScriptAlertsData.confirmMessage)
        })
        javaScriptCommand.getResultLocator().should('contain',javaScriptAlertsData.resultConfirmText)
    })

    it('verifies JS confirm\'s cancel event ',()=>{
        const javaScriptCommand = new javaScriptCommands()
        cy.contains(javaScriptCommand.getButtonLocator(),javaScriptAlertsData.confirmButton).click()        
        cy.on('window:confirm',(cancel)=>{
            return false;
        })
        javaScriptCommand.getResultLocator().should('have.text',javaScriptAlertsData.resultCancelText)

    })
    it('verifies JS prompt Text is printed',()=>{
        const javaScriptCommand = new javaScriptCommands()       
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns(javaScriptAlertsData.enterPromptText)

        })
        cy.contains(javaScriptCommand.getButtonLocator(),javaScriptAlertsData.promptButton).click() 
        javaScriptCommand.getResultLocator().should('have.text',`${javaScriptAlertsData.resultPromptMessage}${javaScriptAlertsData.enterPromptText}`)

    })

    it('verifies JS prompt when cancel Text printed is null',()=>{
            const javaScriptCommand = new javaScriptCommands()
            cy.window().then(win=>{
            cy.stub(win,'prompt').callsFake(()=>null);
            });
            cy.contains(javaScriptCommand.getButtonLocator(),javaScriptAlertsData.promptButton).click() 
            javaScriptCommand.getResultLocator().should('have.text',javaScriptAlertsData.resultPromptCancelMessage)

    })


    
})