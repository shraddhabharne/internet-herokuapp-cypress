///<reference type='cypress'>
import typosData from '../fixtures/typosData.json'
import typosCommands from '../support/stepObjects/typosCommands'
describe("Typos",()=>{
    beforeEach(()=>{
       const typosCommand = new typosCommands()
       cy.clickOnAvailableExamples(typosData.elementName,typosData.urlPath)
       cy.pageTitleVerification(typosCommand.getTitleLocator(),typosData.expectedTitle)
    })
  
    it("confirms if typo present on won\'t",()=>{
        const typosCommand = new typosCommands()
        let stringArray = []
        typosCommand.getParagraphLocator().last().then(($el)=>{
            stringArray =$el.text().split(" ")
            cy.log(stringArray)
        }).then(($arrayStr)=>{
            if(stringArray.includes('won\'t.\n')){
             expect('won\'t',"Typo not present").to.exist
            }
            else if(stringArray.includes('won,t.\n')){
                expect('won,t',"Typo is present").to.exist
            }
        })
       
        
     })
})