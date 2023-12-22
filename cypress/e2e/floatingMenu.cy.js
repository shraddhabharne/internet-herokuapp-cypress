///<referemce type="cypress">
import floatingMenu from "../fixtures/floatingMenuData.json"
import floatingMenuCommands from "../support/stepObjects/floatingMenuCommands"

beforeEach(()=>{
        const floatingMenuCommand = new floatingMenuCommands()
        cy.clickOnAvailableExamples(floatingMenu.elementName,floatingMenu.urlPath)
        cy.pageTitleVerification(floatingMenuCommand.getTitleLocator(),floatingMenu.expectedTitle)
})

describe("Floating Menu",()=>{
    it("Verify Floating Menu exist on PageUp and Page Down",()=>{
        const floatingMenuCommand = new floatingMenuCommands()
    
        // First to ensure user is on the top of the page
        cy.window().its('scrollY').should('equal', 0);
    
        // Confirm the length of the elements on the menu and the text
        floatingMenuCommand.getMenuLocator().should('be.visible').and('have.length','4')
        
        // Click on each menu link to confirm it works
        const lista_href = ['home', 'news', 'contact', 'about'].forEach(menu =>{

            const up_menu = menu[0].toUpperCase().concat(menu.slice(1))
            cy.contains(up_menu).click().then(()=>{
                cy.url().then(el =>{
                    expect(el, 'Assert Url').equal(Cypress.config().baseUrl.concat('/floating_menu#' + menu))
                })
            })

        })         

    })

    it("Verify Floating Menu exist on PageUp and Page Down",()=>{
        const floatingMenuCommand = new floatingMenuCommands()
        cy.scrollTo('bottom')
        floatingMenuCommand.getMenuLocator().should('be.visible').and('have.length','4')
    
        // Click on each menu link to confirm it works when floating menu at the bottom
        const lista_href = ['home', 'news', 'contact', 'about'].forEach(menu =>{
            const up_menu = menu[0].toUpperCase().concat(menu.slice(1))
            cy.contains(up_menu).click().then(()=>{
                cy.url().then(el =>{
                    expect(el, 'Assert Url').equal(Cypress.config().baseUrl.concat('/floating_menu#' + menu))
                })
            })
        cy.scrollTo('bottom')
    
        }) 
    

    })


    it("Verify Floating Menu exist on center of page and is clickable",()=>{
        const floatingMenuCommand = new floatingMenuCommands()     
        cy.scrollTo('center')
        floatingMenuCommand.getMenuLocator().should('be.visible').and('have.length','4')

        // Click on each menu link to confirm it works when floating menu at the bottom
        const lista_href = ['home', 'news', 'contact', 'about'].forEach(menu =>{
        const up_menu = menu[0].toUpperCase().concat(menu.slice(1))
            cy.contains(up_menu).click().then(()=>{
                cy.url().then(el =>{
                    expect(el, 'Assert Url').equal(Cypress.config().baseUrl.concat('/floating_menu#' + menu))
                })
            })
        cy.scrollTo('center')
        }) 

    })

        
})