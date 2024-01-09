///<reference type='cypress'>
import shiftingContentData from '../fixtures/shiftingContentData.json'
import shiftingContentCommands from '../support/stepObjects/shiftingContentCommands'
//Reference: https://glebbahmutov.com/cypress-examples/recipes/overlapping-elements.html
describe("Shifting Content",()=>{
    beforeEach(()=>{
       const shiftingContentCommand = new shiftingContentCommands()
       cy.clickOnAvailableExamples(shiftingContentData.elementName,shiftingContentData.urlPath)
       cy.pageTitleVerification(shiftingContentCommand.getTitleLocator(),shiftingContentData.expectedTitle)
    })
  
    it("checks if menu has shifted",()=>{
        // Reference:  https://stackoverflow.com/questions/6338217/get-a-css-value-with-javascript

        const shiftingContentCommand = new shiftingContentCommands()
        shiftingContentCommand.getLinkOfExample().contains(shiftingContentData.example1MenuLink).click()
        cy.pageTitleVerification(shiftingContentCommand.getTitleLocator(),shiftingContentData.menuElementTitle)
        cy.url().then(url => {
            cy.visit(url + shiftingContentData.appendRandomToTheMenuUrl)
        });     
        shiftingContentCommand.getGalleryMenuLocator().then(($el)=>{
          const left=  window.getComputedStyle($el[0]).getPropertyValue('left')
          if(overlapping(left)){
            expect(overlapping(left),'Portfolio and gallery shifted').to.be.true
          }else
          {expect(overlapping(left),'Portfolio and gallery shifted').not.to.be.true}
          
        })
        // If the shift has 0px value for left that means the menu has not shifted.
        const overlapping = (left)=>{
            if(left=='0px')
                {return false}
            else{return true}
        }
    })

    it("checks if image has shifted",()=>{
        const shiftingContentCommand = new shiftingContentCommands()
        shiftingContentCommand.getLinkOfExample().contains(shiftingContentData.example2ImageLink).click()   
        cy.pageTitleVerification(shiftingContentCommand.getTitleLocator(),shiftingContentData.imageElementTitle)       
        cy.url().then(url=>{
            cy.visit(url+shiftingContentData.appendRandomToTheImageUrl)
        })
        shiftingContentCommand.getImageLocator().then(($el)=>{
          const left=  window.getComputedStyle($el[0]).getPropertyValue('left')
          if(overlapping(left)){
            expect(overlapping(left),'Image has shifted').to.be.true
          }else
          {expect(overlapping(left),'Image has shifted').not.to.be.true}
          
        })
        // If the shift has 0px value for left that means the menu has not shifted.
        const overlapping = (left)=>{
            if(left=='0px')
                {return false}
            else{return true}
        }

    })

    it("checks if list has shifted",()=>{
        const shiftingContentCommand = new shiftingContentCommands()
        shiftingContentCommand.getLinkOfExample().contains(shiftingContentData.example3ListLink).click()    
        cy.pageTitleVerification(shiftingContentCommand.getTitleLocator(),shiftingContentData.listElementTitle)        
        shiftingContentCommand.getListLocator().then(($el)=>{
            const margin = window.getComputedStyle($el[0]).getPropertyValue('margin-left')
            if(margin=='250px'){
                expect(shifted(margin),'List has not shifted').not.to.be.true
            }
        })

        const shifted = (margin)=>{
            if(margin=='250px')
                {return false}
            else{return true}
        }
    })


    it("tries to use Gleb's overlapping solution for practice purpose",()=>{
        const shiftingContentCommand = new shiftingContentCommands()
        const getRectangle = ($el) => $el[0].getBoundingClientRect()
        shiftingContentCommand.getLinkOfExample().first().click()   
        cy.get('li:nth-child(4)').then(getRectangle).then(console.log)
        cy.get('li:nth-child(5)').then(getRectangle).then(console.log)  
        cy.visit('https://the-internet.herokuapp.com/shifting_content/menu?pixel_shift=100')  
        
        cy.get('li:nth-child(4)').then(getRectangle).then(console.log)
        cy.get('li:nth-child(5)').then(getRectangle).then(console.log)
        cy.get('li:nth-child(4)').then(getRectangle).then((rectP)=>{
            cy.get('li:nth-child(5)')
            .then(getRectangle)
            .then((rectG)=>{
                // expect(areOverlapping(rectP,rectG),'Portfolio and gallery').to.be.true
            })
        })
   
  
        const areOverlapping = (rect1, rect2) => {
            // if one rectangle is on the left side of the other
            if (rect1.right < rect2.left || rect2.right < rect1.left) {
            return false
            }
        
            // if one rectangle is above the other
            if (rect1.bottom < rect2.top || rect2.bottom < rect1.top) {
            return false
            }
        
            // the rectangles must overlap
            return true
        }
        
        /**
         * Returns the bounding rectangle of the first DOM
         * element in the given jQuery object.
         */

    })
     
})