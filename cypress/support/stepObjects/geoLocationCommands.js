class geoLocationCommands{

    getTitleLocator(){
        return cy.get("h3")
    }
    getWhereIAmButtonLocator(){
        return cy.get('button')
    }
    getLongtitudeLocator(){
        return cy.get('#long-value')
    }

    getLatitudeLocator(){
        return cy.get('#lat-value')
    }


}
export default geoLocationCommands;