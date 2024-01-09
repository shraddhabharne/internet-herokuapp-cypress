class shadowDOMCommands{
    getTitleLocator(){
        return cy.get("h1")
    }
    getParagraphSpanLocator(){
        return cy.get('my-paragraph').find('span')
    }
    getShadowPLocator(){
        return cy.get('my-paragraph').shadow().find('p')
    }
    
}
export default shadowDOMCommands;