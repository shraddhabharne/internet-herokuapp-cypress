class horizontalSliderCommands{
    getTitleLocator(){
        return cy.get("h3")
    }
    getSliderLocator(){
        return cy.get('input[type="range"]')
    }
    getRangeLocator(){   
        return cy.get('#range')
    }
}
export default horizontalSliderCommands;