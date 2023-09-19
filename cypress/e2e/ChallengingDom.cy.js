///<reference type="cypress">

describe("challenging dom", () => {
    beforeEach(function () {
        cy.visit('/challenging_dom')
        cy.get("h3").contains("Challenging DOM")
    })
    it("Validate on click of button button title changes", () => {
           // Get the text of the button 
            cy.get('.large-2 a:first-child').then(ele => {
            cy.get('.large-2 a:first-child').click()
            var a = (ele.text())
           // compare with the text changes once button is clicked
            cy.get('.large-2 a:first-child').then(ele => {
                expect(ele.text()).not.equal(a)
            })
        })
    })

    it("Validate table click edit and delete", function () {
        // Validate the length of the table
        cy.get('table tbody tr').should('have.length', 10)
        // Validate the url on click of Edit and delete on table
        cy.get("table tbody tr:nth-child(9) td:nth-child(7) a:nth-child(1)").click()
        cy.url().should('include', 'edit')
        cy.get("table tbody tr:nth-child(4) td:nth-child(7) a:nth-child(2)").click()
        cy.url().should('include', 'delete')
    })

    it("Validate the canvas changes on click of button", function(){

    })

    it("Validate button alert,success css", function(){

    })

})