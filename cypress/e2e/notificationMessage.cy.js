///<reference type='cypress'>
import notificationMessageData from '../fixtures/notificationMessageData.json'
import notificationMessageCommands from '../support/stepObjects/notificationMessageCommands'
describe("Notification Messages",()=>{
    beforeEach(()=>{
       const notificationMessageCommand = new notificationMessageCommands()
       cy.clickOnAvailableExamples(notificationMessageData.elementName,notificationMessageData.urlPath)
       cy.pageTitleVerification(notificationMessageCommand.getTitleLocator(),notificationMessageData.expectedTitle)
    })
  
    it("confirms a notification message is present on the header",()=>{
        const notificationMessageCommand = new notificationMessageCommands()
        notificationMessageCommand.getFlashMessageLocator().should('be.visible')
        .contains('Action')

     })
     it("confirms a new notification message is loaded on click of Click here",()=>{
        const notificationMessageCommand = new notificationMessageCommands()
        notificationMessageCommand.getFlashCloseLocator().should('be.visible')
        .click({force:true})
        notificationMessageCommand.getFlashMessageLocator().should('not.exist')
        notificationMessageCommand.getClickHereLocator().contains(notificationMessageData.clickHereLink).click()
        notificationMessageCommand.getFlashMessageLocator().should('be.visible')
        .contains('Action')
        
     })
     // Reference: https://github.com/BHAraujo/components_automation/blob/main/cypress/e2e/notification_messages_spec.cy.js
    it("confirms the page renders 2 different notification messages",()=>{
        const notificationMessageCommand = new notificationMessageCommands()
        let get_message = new Set()
        function getAllMessages(){
            notificationMessageCommand.getFlashMessageLocator().should('be.visible')
            .then(el=>{
                get_message.add(el[0].innerText)
                if(get_message.size == 2){
                    expect(get_message.values(notificationMessageData.notificationSuccessMessage))
                    expect(get_message.values(notificationMessageData.notificationUnsuccessMessage))
                }
                   else{
                    notificationMessageCommand.getClickHereLocator().contains(notificationMessageData.clickHereLink).click()
                        getAllMessages()
                    }
            })
            
        }
        getAllMessages()
    })  

    it("logs messages using cy.each--Practice",()=>{
        const notificationMessageCommand = new notificationMessageCommands()
        let newArray =  new Array()
        function captureMessages(){
            notificationMessageCommand.getClickHereLocator().contains(notificationMessageData.clickHereLink).click()
            notificationMessageCommand.getFlashMessageLocator().should('be.visible').each(($el,index,$lenth)=>{
                                 
                if (newArray.includes($el.text())){
                    notificationMessageCommand.getClickHereLocator().contains(notificationMessageData.clickHereLink).then(()=>{
                        cy.log("if"+newArray)
                    })                    
                }
                else{
                    cy.log("else"+newArray)
                    newArray.push(($el.text()))
                    captureMessages()          
                }
            })
        }
        captureMessages()
        
    })  


})