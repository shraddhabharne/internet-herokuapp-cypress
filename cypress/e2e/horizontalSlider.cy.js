/// <reference type="cypress">
import horizontalSliderData from "../fixtures/horizontalSliderData.json"
import horizontalSliderCommands from "../support/stepObjects/horizontalSliderCommands"
describe("Horizontal Slider", ()=>{

    it("Verify range value on horizontal scroll",()=>{
        const horizontalSlider = new horizontalSliderCommands()
        cy.clickOnAvailableExamples(horizontalSliderData.elementName, horizontalSliderData.urlPath)
        cy.pageTitleVerification( horizontalSlider.getTitleLocator(),horizontalSliderData.expectedTitle)
        horizontalSlider.getSliderLocator().invoke('attr','min').should('eq',horizontalSliderData.minRange)
        //Confirm the mid value
        horizontalSlider.getSliderLocator()
        .invoke('val',horizontalSliderData.midRange)
        .trigger('change')
        horizontalSlider.getRangeLocator().should('have.text',horizontalSliderData.midRange)
        //Confirm the max value
        horizontalSlider.getSliderLocator()
        .invoke('val',horizontalSliderData.maxRange)
        .trigger('change')
        horizontalSlider.getRangeLocator().should('have.text',horizontalSliderData.maxRange)
        
    })


})
