///<reference type='cypress'>
import largeAndDeepDOMData from '../fixtures/largeAndDeepDomData.json'
import largeAndDeepDOMCommands from '../support/stepObjects/largeAndDeepDOMCommands'
describe("Large and Deep DOM",()=>{
    beforeEach(()=>{
       const largeAndDeepDOMCommand = new largeAndDeepDOMCommands()
       cy.clickOnAvailableExamples(largeAndDeepDOMData.elementName,largeAndDeepDOMData.urlPath)
       cy.pageTitleVerification(largeAndDeepDOMCommand.getTitleLocator(),largeAndDeepDOMData.expectedTitle)
    })
    it("verify deep elements and table content",()=>{
       const largeAndDeepDOMCommand = new largeAndDeepDOMCommands()
       cy.get('.example').find('div:nth-child(3)').last().find('.tier-50').first().should('have.text','50.2')
       cy.get('div:nth-child(3)').find('.tier-38')
       largeAndDeepDOMCommand.getsiblingDivLocator().contains(largeAndDeepDOMData.divText)
       largeAndDeepDOMCommand.getTableColmLocator().contains(largeAndDeepDOMData.tableText1)
       largeAndDeepDOMCommand.getTableRowColmLocator().should('have.text',largeAndDeepDOMData.tableText2)
       largeAndDeepDOMCommand.getTotalTableColmLocator().should('have.length',largeAndDeepDOMData.totalColmCount )
       largeAndDeepDOMCommand.getTotalTableRowLocator().should('have.length',largeAndDeepDOMData.totalRowCount )
    })

    it("confirms title on the sections",()=>{
        const largeAndDeepDOMCommand = new largeAndDeepDOMCommands()
        largeAndDeepDOMCommand.getSectionTitleLocator().first().should('have.text',largeAndDeepDOMData.noSiblingTitle)
        largeAndDeepDOMCommand.getSectionTitleLocator().contains(largeAndDeepDOMData.siblingTitle)
        largeAndDeepDOMCommand.getSectionTitleLocator().last().should('have.text',largeAndDeepDOMData.TableTitle)
        cy.get('.parent').find('#no-siblings').should('have.text',largeAndDeepDOMData.noSiblingText)
     })
})