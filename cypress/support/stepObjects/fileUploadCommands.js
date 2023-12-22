class fileUploadCommands{

    getTitleLocator(){
        return cy.get('h3')
    }
    getChooseFileButtonLocator(){
        return cy.get('#file-upload')
    }

    getFilesUploadedLocator(){
        return cy.get('#uploaded-files')
    }

    getFileUploadedTitleLocator(){
        return cy.get('h3')
    }

    getFileSubmitLocator(){
        return cy.get('#file-submit')
    }

    getDragDropLocator(){
        return cy.get('#drag-drop-upload')
    }

}
export default fileUploadCommands;