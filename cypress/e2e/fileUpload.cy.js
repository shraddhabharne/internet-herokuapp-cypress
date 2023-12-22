///<referemce type="cypress">
import fileUpload from "../fixtures/fileUploadData.json"
import fileUploadCommands from "../support/stepObjects/fileUploadCommands"
describe("File Download",()=>{
    beforeEach(()=>{
                const fileUploadCommand = new fileUploadCommands()
                cy.clickOnAvailableExamples(fileUpload.elementName,fileUpload.urlPath)
                cy.pageTitleVerification(fileUploadCommand.getTitleLocator(),fileUpload.expectedTitle)
    })

    it('Verify file is upload using file upload button', ()=>{
        const fileUploadCommand = new fileUploadCommands()
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
            setTimeout(function () { doc.location.reload() }, 5000)
            })
            fileUploadCommand.getChooseFileButtonLocator().drag
            fileUploadCommand.getChooseFileButtonLocator().selectFile({
                contents: Cypress.Buffer.from('file contents'),
                fileName: fileUpload.fileName,
                lastModified: Date.now(),
            })
            fileUploadCommand.getFileSubmitLocator().click()
            fileUploadCommand.getFileUploadedTitleLocator().should('contain',fileUpload.fileUploadedText)
            fileUploadCommand.getFileUploadedTitleLocator().should('contain',fileUpload.fileUploadedText)
            fileUploadCommand.getFilesUploadedLocator().should('contain',fileUpload.fileName)
            
        })  

        
    })

    it('Verify file is uploaded using drag drop', ()=>{
        const fileUploadCommand = new fileUploadCommands()
        fileUploadCommand.getDragDropLocator().selectFile(fileUpload.filePath,{ action: 'drag-drop' })
        cy.contains(fileUpload.fileName)
        
    })


})