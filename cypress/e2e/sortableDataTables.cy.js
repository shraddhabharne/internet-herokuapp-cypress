///<reference type="cypress">

import sortableDataTablesCommands from "../support/stepObjects/sortableDataTablesCommands"
import sortableDataTablesData from "../fixtures/sortableDataTablesData.json"

describe("Sortable Data tables",()=>{
    beforeEach(()=>{
        const sortableDataTablesCommand = new sortableDataTablesCommands()
        cy.clickOnAvailableExamples(sortableDataTablesData.elementName,sortableDataTablesData.urlPath)
        cy.pageTitleVerification(sortableDataTablesCommand.getTitleLocator(),sortableDataTablesData.expectedTitle)
    })
    
    it("confirms table1's header text",()=>{
        const sortableDataTablesCommand = new sortableDataTablesCommands()      
        const heading = sortableDataTablesData.tableHeading
        sortableDataTablesCommand.getTable1sHeadingLocator().should(($th)=>{
            const texts = Cypress._.map($th,'innerText')
            expect (texts,"Match Table1's headings").to.deep.equal(heading)
        })
    })
    
    // Reference: https://github.com/bahmutov/cypress-map
    it("confirms table2's header text using cypress-map plugin",()=>{
        const sortableDataTablesCommand = new sortableDataTablesCommands()      
        const heading2 = sortableDataTablesData.tableHeading
        sortableDataTablesCommand.getTable1sHeadingLocator().map('innerText').should('deep.equal',heading2)
    })

    it("confirms table1's Due is sorted",()=>{
        const sortableDataTablesCommand = new sortableDataTablesCommands()    
        sortableDataTablesCommand.getTable1sBodyLocator().table().then(console.table)
        let expectedsortedDue=[]
        let sortedDue=[]
        function compareNumbers(a, b) {
            if (a < b) {
                return -1;
            } else if (a > b) {
                return 1;
            } else {
                return 0;
            }
          }
          sortableDataTablesCommand.getTable1sBodyLocator()
            .table(3,0)    
            .then((str)=>{
                for(let i=0;i<str.length;i++){
                    expectedsortedDue.push(parseInt(String(str[i]).replace(/\$/, "")))    
                }
            }).then(()=>{
                expectedsortedDue.sort(compareNumbers)
            })
            
           // cy.log(expectedsortedDue)
           sortableDataTablesCommand.getTable1sDueLocator().click()
           sortableDataTablesCommand.getTable1sBodyLocator()
            .table(3,0)    // table(x,y,w,h) => (column#, row#, width#,height#)
            .then((str)=>{
                for(let i=0;i<str.length;i++){
                    sortedDue.push(parseInt(String(str[i]).replace(/\$/, "")))    
                }
                expect(sortedDue).deep.equal(expectedsortedDue)
            })           
    })

    it("confirms table1's last Name is sorted",()=>{
        const sortableDataTablesCommand = new sortableDataTablesCommands()   
        let expectedLastNameArray = [] 
        let actualLastNameArray = []
        sortableDataTablesCommand.getTable2sLastNameLocator().should('have.length',sortableDataTablesData.tableLength)
         .each(($el,index,$length)=>{
            let lastName = $el.text()
            expectedLastNameArray.push($el.text())
         }).then(()=>{
            expectedLastNameArray.sort()    
        })
        sortableDataTablesCommand.getTable2sLastNameHeaderLocator().click()
        sortableDataTablesCommand.getTable2sLastNameLocator().should('have.length',sortableDataTablesData.tableLength)
        .each(($el,index,$length)=>{
           let lastName = $el.text()
           actualLastNameArray.push($el.text())
        }).then(()=>{
           expect(actualLastNameArray).to.deep.eq(expectedLastNameArray)
       })
        
    })
    //Reference: Rahul Shetty Notes
    it("confirms table1's edit /delete is clicked for a given website",()=>{
        const sortableDataTablesCommand = new sortableDataTablesCommands()   
        const target=sortableDataTablesData.targetWebsiteForEdit 
        sortableDataTablesCommand.getTable1sWebsiteLocator().should('have.length',sortableDataTablesData.tableLength)
        .each(($el,index,$length)=>{
            const websiteText = $el.text()
            if(websiteText.includes(target)){
                sortableDataTablesCommand.getTable1sWebsiteLocator().eq(index).next().contains(sortableDataTablesData.actionType).click()
                cy.url().should('contains',sortableDataTablesData.actionType)
            }
        })
    })
})
