/// <reference types="cypress"/>

describe('Internet Elements first five ', () => {
  it('Add Remove elements: Add', () => {
    cy.visit('/add_remove_elements/')
    cy.contains('button','Add Element').click()
    // Element exits 
    cy.get(".added-manually").should('be.visible').and('contain','Delete')
    cy.contains('button','Add Element').click()
    cy.get(".added-manually").should('have.length','2')

    // Element can be deleted
    cy.get(".added-manually").first().click()
    cy.get(".added-manually").should('have.length','1')
    // Confirm element is deleted
    cy.get(".added-manually").click()
    cy.get(".added-manually").should("not.exist")

  })

})