/// <reference type="cypress">

describe("Drag and drop",()=>{
   
    it.only("Validate drag and drop of mouse",()=>{
        cy.visit("/drag_and_drop")
        cy.contains("h3","Drag and Drop")
        //https://www.youtube.com/watch?v=hvwYBlKLz6U
        const dataTransfer = new DataTransfer()
        cy.get('#column-a').trigger('dragstart',{
            dataTransfer
        })
        cy.get('#column-b').trigger('drop',{
            dataTransfer
        })
        cy.get('#column-a header').contains("B")
    })

    it("Validate drag and drop of mouse using Plugin--- Plugin not working",()=>{
        cy.visit("/drag_and_drop")
        cy.get('#column-a').drag("#column-b").then((success) => {
            assert.isTrue(success)
          })
       // cy.get('#column-a header').contains("B")
    })
    

})