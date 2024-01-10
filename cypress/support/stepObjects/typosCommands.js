class typosCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getParagraphLocator(){
        return cy.get("p")
    }
  
}
export default typosCommands;