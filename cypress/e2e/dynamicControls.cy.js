///<reference type = "cypress">

describe("Dynamic Controls", ()=>{

    beforeEach(()=>{
        cy.GoToUrl("dynamic_controls","h4","Dynamic Controls")
    })
    
    it("Validate remove checkbox",()=>{
        cy.get("#checkbox-example button").should("be.visible")
           .click()
        
        cy.get("#loading").should("be.visible")
        cy.get("#checkbox-example button").should("be.visible")
        .and("contain","Add")
        cy.get("#message").should("contain","It's gone!")

        cy.get("#checkbox-example button").click()
        cy.get("#checkbox-example button").should("be.visible")
        .and("contain","Remove")
        cy.get("#message").should("contain","It's back!")
        cy.get("#checkbox").should("be.visible")
    })

    it("Validate enable/disable",()=>{
        cy.get("#input-example input").should("have.attr","disabled")
        cy.get("#input-example button").click()
        cy.get("#input-example input").should("not.have.attr","disabled")
        cy.get("#input-example button").should("contain","Disable")
        cy.get("#message").should("contain","It's enabled!")
        cy.get("#input-example button").click()
        cy.get("#message").should("contain","It's disabled!")
    })

    it("Validate a different approach",()=>{
        
        cy.get("#checkbox-example button").click()
        cy.get("#loading").should('be.visible').then(ele =>{
            expect(ele[0].outerText,"Assert wait message").equal("Wait for it... ")
        })
       
        cy.get("#checkbox-example button").contains("Add")
        
    })
})