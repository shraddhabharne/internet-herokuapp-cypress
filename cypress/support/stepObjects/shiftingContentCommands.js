class shiftingContentCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getLinkOfExample(){
        return cy.get('.example a')
    }
    getGalleryMenuLocator(){
        return cy.get('li:nth-child(5) a')
    }
    getImageLocator(){
        return  cy.get('.example img')
    }
    getListLocator(){
        return cy.get('.large-6')
    }
}
export default shiftingContentCommands;