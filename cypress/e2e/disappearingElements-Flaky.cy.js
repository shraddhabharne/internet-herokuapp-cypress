/// <reference type = "cypress">

describe("Disappearing elements",()=>{
 

    it("Validate disappearing elements using function and reload--- FAILS NEEDS TO BE CONFIRMED",()=>{
        cy.visit("/disappearing_elements")
        
        
        reloadTillElementMissing()

        function reloadTillElementMissing(){
            var actualArrayDisplayed =Array()
            var expectedArray =["Home", "About", "Contact Us", "Portfolio", "Gallery"]
            cy.get('ul li').each(($el,index,$list)=>{

                cy.log($el.text())
                actualArrayDisplayed.push($el.text())
                
            }).then(()=>{
                
                if(actualArrayDisplayed.length==expectedArray.length){
                    expect(actualArrayDisplayed,"All elements present").to.be.length('5')
                    //cy.reload().then(reloadTillElementMissing())
                }
                else{
                    expect(actualArrayDisplayed,"Missing Gallery").to.be.length('4')
                }
            })
        }
        

        

        
    })
    

    
})