import jQueryUIMenusData from '../fixtures/jQueryUIMenusData.json'
import jQueryUIMenusCommands from '../support/stepObjects/jQueryUIMenusCommands'

describe("JQuery UI Menus", ()=>{
    beforeEach(()=>{
        const jQueryUIMenusCommand = new jQueryUIMenusCommands()
        cy.clickOnAvailableExamples(jQueryUIMenusData.elementName, jQueryUIMenusData.urlPath)
        cy.pageTitleVerification(jQueryUIMenusCommand.getTitleLocator(), jQueryUIMenusData.expectedTitle)
    })

    it("confirms first item on menu is disabled and explores sub menu under it",()=>{
        const jQueryUIMenusCommand = new jQueryUIMenusCommands()
        jQueryUIMenusCommand.getDisabledMenuLocator().should('have.class','ui-state-disabled')
            .invoke("removeAttr","ui-state-disabled")
            .should('be.visible')
            .then(()=>{
                jQueryUIMenusCommand.getDisabledSubMenuLocator()
                .should('contain',jQueryUIMenusData.invisibleItem)
            })
    })

    it("clicks on enabled menu sub menu which redirects to a new page",()=>{
        const jQueryUIMenusCommand = new jQueryUIMenusCommands()
        jQueryUIMenusCommand.getEnabledMenuLocator().trigger('mouseover')
        jQueryUIMenusCommand.getBackToJQueryUIMenuLocator().should('be.visible')
            .trigger('mouseover')
            .click()
        cy.window().url().should('contains',jQueryUIMenusData.backToJQueryUrl)
        jQueryUIMenusCommand.getbackToJQueryLinkLocator().contains(jQueryUIMenusData.backToJQueryLink)
        .click()
        cy.clickOnAvailableExamples(jQueryUIMenusData.elementName, jQueryUIMenusData.urlPath)
        jQueryUIMenusCommand.getEnabledMenuLocator().trigger('mouseover')
        jQueryUIMenusCommand.getDownloadsMenuLocator().should('be.visible')
            .trigger('mouseover')        
        
    })

    it("confirms that all files download under the Download section",()=>{
        const jQueryUIMenusCommand = new jQueryUIMenusCommands()
        const menuArray = [jQueryUIMenusData.menuNamePDF,jQueryUIMenusData.menuNameCSV,jQueryUIMenusData.menuNameExcel]
                            .forEach((element) =>{
                                jQueryUIMenusCommand.getEnabledMenuLocator().trigger('mouseover')
                                jQueryUIMenusCommand.getDownloadsSubMenuLocator().invoke('removeAttr','style') 
                                jQueryUIMenusCommand.getDownloadsMenuLocator().should('be.visible')
                                    .realHover()
                                jQueryUIMenusCommand.getDownloadsSubMenuLocator().invoke('removeAttr','style') 
                                cy.window().document().then(function (doc) {
                                    doc.addEventListener('click', () => {
                                    setTimeout(function () { doc.location.reload() }, 5000)
                                    })
                                    cy.contains(element).click()  
                                }) 
                            })
     
            
       
    })

})