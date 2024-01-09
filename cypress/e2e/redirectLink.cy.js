///<reference type='cypress'>
import redirectLinkData from '../fixtures/redirectLinkData.json'
import redirectLinkCommands from '../support/stepObjects/redirectLinkCommands'
describe("Redirect Link",()=>{
    beforeEach(()=>{
       const redirectLinkCommand = new redirectLinkCommands()
       cy.clickOnAvailableExamples(redirectLinkData.elementName,redirectLinkData.urlPath)
       cy.pageTitleVerification(redirectLinkCommand.getTitleLocator(),redirectLinkData.expectedTitle)
       redirectLinkCommand.getLinkToGoToStatusCode().contains(redirectLinkData.anchorLinkToGoToStatusCode).click()
       cy.pageTitleVerification(redirectLinkCommand.getstatusCodeTitleLocator(),redirectLinkData.statusCodeTitle)
    })
  
    it("confirms status code on redirect links",()=>{
        const redirectLinkCommand = new redirectLinkCommands()
        redirectLinkCommand.getStatusCodeList().each($el=>{  
            let code =parseInt($el.text())
            cy.request({
                url: '/status_codes/'+$el.text(),
                followRedirect:false,
                failOnStatusCode: false,
            }).then((resp)=>{
                if(code==400){
                    expect(resp.status).to.eq('404: Not Found')
                }
                else{expect(resp.status).to.eq(code)}               
            })
       })
    })
})