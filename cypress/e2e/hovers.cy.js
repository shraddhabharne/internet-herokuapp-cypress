///<reference type=cypress?
import hoversData from '../fixtures/hoversData.json'
import hoversCommands from '../support/stepObjects/hoversCommands'
describe("Hovers", () => {
    // Reference: https://filiphric.com/hover-in-cypress
    beforeEach(() => {
        const hoversCommand = new hoversCommands()
        cy.clickOnAvailableExamples(hoversData.elementName, hoversData.urlPath)
        cy.pageTitleVerification(hoversCommand.getTitleLocator(), hoversData.expectedTitle)
    })
    it("displays hidden title and link, on click of link confirms URL", () => {
        const hoversCommand = new hoversCommands()
        hoversCommand.getImageLocator().eq(0).trigger('mouseover')
        hoversCommand.getImageLocator().each(($el, index, $list) => {
            cy.wrap(index)
            var titleToConfirm = hoversData.hiddenTitlePart + (index + 1)
            var urlToConfirm = hoversData.profileUrlPart + (index + 1)
            hoversCommand.getHiddenFigcaptionLocator().eq(index).invoke('show')
            hoversCommand.getHiddenTitleLocator().eq(index)
                .invoke('show')
                .should('have.text', titleToConfirm)
            hoversCommand.getHiddenLinkLocator().eq(index)
                .invoke('show').click()
            cy.url().should('contain', urlToConfirm)
            cy.go('back')
        })


    })
    it("uses plugin to perform mousehover", () => {
        // Reference plugin:https://github.com/dmtrKovalenko/cypress-real-events
        const hoversCommand = new hoversCommands()
        hoversCommand.getImageLocator().each(($el, index, $list) => {
            cy.wrap(index)
            var titleToConfirm = hoversData.hiddenTitlePart + (index + 1)
            var urlToConfirm = hoversData.profileUrlPart + (index + 1)
            hoversCommand.getImageLocator().eq(index)
                .realHover()
            cy.wait(1000)
            hoversCommand.getHiddenTitleLocator().eq(index)
                .should('be.visible')
                .should('have.text', titleToConfirm)
            hoversCommand.getHiddenLinkLocator().eq(index)
                .should('be.visible')
                .should('have.text', hoversData.hiddenLinkText)
                .click()
            cy.url()
                .should('contain', urlToConfirm)
            cy.go('back')

        })

    })
})