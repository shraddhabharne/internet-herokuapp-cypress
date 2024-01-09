///<reference type='cypress'>
import secureFileDownloadData from '../fixtures/secureFileDownloadData.json'
import secureFileDownloadCommands from '../support/stepObjects/secureFileDownloadCommands'
describe("Secure FileDownload",()=>{
    it("confirms files can be downloaded when page has basic auth",()=>{
        const secureFileDownloadCommand = new secureFileDownloadCommands()
        cy.visit('/download_secure', {
            auth: {
              username: secureFileDownloadData.basicAuthUser,
              password: secureFileDownloadData.basicAuthPassword,
            },
          })
        cy.pageTitleVerification(secureFileDownloadCommand.getTitleLocator(),secureFileDownloadData.expectedTitle)
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 5000)
            })
            cy.contains(secureFileDownloadData.fileExtension).first().click()
            
        })       
    })
})