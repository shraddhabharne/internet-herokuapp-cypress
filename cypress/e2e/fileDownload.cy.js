// PLUGIN USED IS: npm i -D cy-verify-downloads
//INSTALLATION STEPS: https://www.npmjs.com/package/cy-verify-downloads 

///<referemce type="cypress">
import fileDownload from "../fixtures/fileDownloadData.json"
import fileDownloadCommands from "../support/stepObjects/fileDownloadCommands"
describe("File Download",()=>{
    beforeEach(()=>{
        const fileDownloadCommand = new fileDownloadCommands()
        cy.clickOnAvailableExamples(fileDownload.elementName,fileDownload.urlPath)
        cy.pageTitleVerification(fileDownloadCommand.getTitleLocator(),fileDownload.expectedTitle)
    })
 

    it("Verify file downloads in downloads folder",()=>{
        const downloadsFolder = Cypress.config("downloadsFolder");
        cy.log(downloadsFolder+'\\'+fileDownload.href)
        
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.contains(fileDownload.href).click()
            cy.readFile(downloadsFolder+'\\'+fileDownload.href, {timeout:60000}) 
        })  
    })
})