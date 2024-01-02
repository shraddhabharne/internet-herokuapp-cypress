///<reference type='cypress'>
import keypressCommands from '../support/stepObjects/keypressCommands'
import keypressData from '../fixtures/keypressData.json'

describe("Keypress",()=>{
    it("verifies the key pressed was accuratley mentioned on the result section",()=>{
        const keypressCommand = new keypressCommands()
        cy.clickOnAvailableExamples(keypressData.elementName,keypressData.urlPath)
        cy.pageTitleVerification(keypressCommand.getTitleLocator(),keypressData.expectedTitle)
        keypressCommand.getTextBoxLocator().focus()
        keypressCommand.getTextBoxLocator().trigger('keydown',{keyCode:keypressData.keyPairValues[0].keyCode})
        keypressCommand.getResultLocator().contains(keypressData.keyPairValues[0].keyPressed)
        keypressCommand.getTextBoxLocator().trigger('keydown',{keyCode:keypressData.keyPairValues[1].keyCode})
        keypressCommand.getResultLocator().contains(keypressData.keyPairValues[1].keyPressed)
        keypressCommand.getTextBoxLocator().trigger('keydown',{keyCode:keypressData.keyPairValues[2].keyCode})
        keypressCommand.getResultLocator().contains(keypressData.keyPairValues[2].keyPressed)
        keypressCommand.getTextBoxLocator().trigger('keydown',{keyCode:keypressData.keyPairValues[3].keyCode})
        keypressCommand.getResultLocator().contains(keypressData.keyPairValues[3].keyPressed)
        keypressCommand.getTextBoxLocator().trigger('keydown',{keyCode:keypressData.keyPairValues[4].keyCode})
        keypressCommand.getResultLocator().contains(keypressData.keyPairValues[4].keyPressed)
    })
})