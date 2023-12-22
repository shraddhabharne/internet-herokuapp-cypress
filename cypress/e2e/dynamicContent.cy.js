/// <reference type="cypress">

describe("Dynamic content",()=>{
    it("Validate Dynamic content",()=>{
        var arr1=[]
        var arr2=[]
        var arr3=[]
        var arr4=[]

        cy.visit("/dynamic_content")
        cy.contains('h3','Dynamic Content')
        
       cy.get('div >img').should('have.length','3')
       

       const getTexts = ($el)=>{
        return Cypress._.map($el,'innerText')
    }

    const getImg = ($el)=>{
        return Cypress._.map($el,'src')
    }
   
    cy.get('div >img').then(($el)=>{
        arr1.push(getImg($el))
        
    }).then(()=>{
       // cy.log("Arr " +arr1)
        cy.get('#content > .row > .large-10').then(($el)=>{
            arr2.push(getTexts($el))
            cy.contains("click here").click()
        cy.url().should('contain','with_content=static')
    }).then(()=>{
        cy.get('div >img').then(($el)=>{
            arr3.push(getImg($el))
            cy.log(arr1)
            cy.log(arr3)
            expect(arr1).not.equal(arr3)
    }).then(()=>{
        // cy.log("Arr " +arr1)
         cy.get('#content > .row > .large-10').then(($el)=>{
             arr4.push(getTexts($el))
             cy.log(arr2)
             cy.log(arr4)
             expect(arr2).not.deep.equals(arr4)
            })
        })
    })
      
        
    })
})
    it("Validate Dynamic image content using different method",()=>{
        const list_page =[]
        cy.visit("/dynamic_content")
        cy.get('#content .row .large-2 img').then(el=>{
            const list_page = [el[0].currentSrc,el[1].currentSrc,el[2].currentSrc]
            cy.wrap(list_page).as('list_image')  
            cy.contains("click here").click()
            cy.url().should('contain','with_content=static')
        })
            cy.get('#content .row .large-2 img').then(el=>{
                const list_page2 = [el[0].currentSrc,el[1].currentSrc,el[2].currentSrc]
                //expect(list_page2).not.deep.equals(list_page)
                cy.get('@list_image').then( list_image => {

                    expect(list_image, 'Assert image comparison before and after page load').not.to.include(list_page2)  })

    })
        
        

    })
})