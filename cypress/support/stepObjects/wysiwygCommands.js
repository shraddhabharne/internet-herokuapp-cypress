class wysiwygCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getFrameLocator(){
        return cy.get('#mce_0_ifr')
    }
    getFileLocator(){
        return  cy.get(':nth-child(1) > .tox-mbtn__select-label')
    }
    getBoldLocator(){
        return cy.get('button[title="Bold"]')
    }
    getItalicLocator(){
        return cy.get('button[title="Italic"]')
    }

    getBodyiFrameLocator(){
        return cy.iframe('iframe#mce_0_ifr')
    }

    getEditLocator(){
        return cy.get('.tox-mbtn__select-label')
    }
    getEditSubMenuLocator(){
        return cy.get('.tox-collection__item-label')
    }

    getiFramePLocator(){
        return cy.get('p')
    }


}
export default wysiwygCommands;