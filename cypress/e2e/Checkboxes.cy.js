/// <reference type="cypress">
describe ("Checkboxes functionality",function(){
    this.beforeEach(function(){
        cy.visit("/checkboxes")
        cy.get('h3').contains("Checkboxes")

    })
    it("Validate 2nd checkbox is checked", function(){
        
        cy.get("input[type='checkbox']").should('have.length',2)
        cy.get("input[type='checkbox']").eq(1).should('be.checked')
        cy.get(':checked').should('have.length',1)
    })
    it("Validate check on unchecked checkboxes", function(){
            cy.get("input[type='checkbox']")
            .as('checkedboxes')
            .check()
        cy.get(':checked').should('have.length',2)
        
            /*cy.get('@checkedboxes').each(checkbx =>{
               
                expect(checkbx[0].checked).to.be.true 
            })*/


    })
})

