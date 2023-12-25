class hoversCommands{
    getTitleLocator(){
        return cy.get("h3")
    }

    getImageLocator(){
        return cy.get('.figure img')
    }
    getHiddenTitleLocator(){
        return cy.get('.figcaption h5')
    }
    getHiddenLinkLocator(){
        return cy.get('.figcaption a')
    }

    getHiddenFigcaptionLocator(){
        return cy.get('.figcaption')
    }

}
export default hoversCommands;