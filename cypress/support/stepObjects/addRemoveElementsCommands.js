class addRemoveElementsCommands{
    getTitleLocator(){
        return cy.get('h3')
    }
    
    getDeleteButtonLocator(){
        return cy.get(".added-manually")
    }
    getAddElementButtonLocator(){
        return cy.get('.example button')
    }


   
    
}
export default addRemoveElementsCommands;