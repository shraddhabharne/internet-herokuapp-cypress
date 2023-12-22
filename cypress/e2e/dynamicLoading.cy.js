///<reference type="cypress">



describe("Dynamic Loading",()=>{
    beforeEach(()=>{
        cy.GoToUrl("dynamic_loading","h3","Dynamically Loaded Page Elements")
    })
    it("Valiate element on page that is hidden ",()=>{
        cy.contains("Example 1: Element on page that is hidden").click()
        cy.url().should("contain","")
        cy.contains("Start").click()
        
        cy.get("#finish").wait(5000)
        .should("be.visible")
        .and("contain","Hello World!")
    })
})