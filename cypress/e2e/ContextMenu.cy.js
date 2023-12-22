/// <reference type="cypress">
describe("Context Menu", ()=>{
    it("Validate Alert message", function(){
        cy.visit("/context_menu")
        cy.get("h3",).contains("Context Menu")
        cy.get("#hot-spot").rightclick(45,45)
        cy.on('window:alert',(t)=>{
            expect(t).to.contains("You selected a context menu")
            
        })
        
    })

})