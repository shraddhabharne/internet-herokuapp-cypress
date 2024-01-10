///<reference type='cypress'>
import wysiwygData from '../fixtures/wysiwygData.json'
import wysiwygCommands from '../support/stepObjects/wysiwygCommands'
describe("WYSIWYG Editor",()=>{
    beforeEach(()=>{
       const wysiwygCommand = new wysiwygCommands()
       cy.clickOnAvailableExamples(wysiwygData.elementName,wysiwygData.urlPath)
       cy.pageTitleVerification(wysiwygCommand.getTitleLocator(),wysiwygData.expectedTitle)
    })
  
    it("confirms WYSIWYG Editor's few elements ",()=>{
        const wysiwygCommand = new wysiwygCommands()
        cy.contains('WYSIWYG Editor').click()
        wysiwygCommand.getFrameLocator().should('be.visible')
        wysiwygCommand.getFileLocator().click()
            cy.contains(wysiwygData.newFile).click()
                       
            wysiwygCommand.getBoldLocator().click()
            wysiwygCommand.getFrameLocator().should('be.visible')
            wysiwygCommand.getBodyiFrameLocator().within(()=>{
            wysiwygCommand.getiFramePLocator().type(wysiwygData.textBodyData)
            })
            wysiwygCommand.getBoldLocator().click()
            wysiwygCommand.getItalicLocator().click()
            wysiwygCommand.getFrameLocator().should('be.visible')
            wysiwygCommand.getBodyiFrameLocator().within(()=>{
            wysiwygCommand.getiFramePLocator().type(wysiwygData.textBodyData2)
            })
            wysiwygCommand.getItalicLocator().click()
            wysiwygCommand.getEditLocator().eq(1).click()
            wysiwygCommand.getEditSubMenuLocator().contains('Select all')
            wysiwygCommand.getEditSubMenuLocator().contains('Cut').click()
            wysiwygCommand.getBodyiFrameLocator().find('p:first').type('{ctrl+v}  Text is copied')
             
               
        
     })
})