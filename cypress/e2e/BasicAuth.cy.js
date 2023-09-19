/// <reference types="cypress"/>


describe('Internet Elements to test Basic Auth', () => {
    it('Confrim Basic Auth', () => {
      cy.visit('/basic_auth/',{
        headers: {
          authorization: 'Basic YWRtaW46YWRtaW4='
        },
        failOnStatusCode: false
      })
      cy.contains('p','Congratulations! You must have the proper credentials.')
      cy.get('h3').should('contain','Basic Auth')
      
    })

    
  })