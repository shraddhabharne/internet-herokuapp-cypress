///<reference type='cypress'>
import geoLocationCommands from '../support/stepObjects/geoLocationCommands'
import geoLocationData from '../fixtures/geoLocationData.json'


describe("GeoLocation",()=>{
    it("Verify GeoLocation coordinates",()=>{
        const geoLocationCommand = new geoLocationCommands()
        cy.clickOnAvailableExamples(geoLocationData.elementName,geoLocationData.urlPath)
        cy.pageTitleVerification(geoLocationCommand.getTitleLocator(),geoLocationData.expectedTitle)
        
        cy.visit('\\'+geoLocationData.urlPath, {
            onBeforeLoad (win) {
              const latitude = geoLocationData.latitude;
              const longitude = geoLocationData.longitude;
              cy.stub(win.navigator.geolocation, 'getCurrentPosition').callsFake((cb) => {
                return cb({ coords: { latitude, longitude } });
              });
            },
          });

        geoLocationCommand.getWhereIAmButtonLocator().click()
        geoLocationCommand.getLatitudeLocator().contains(geoLocationData.latitude)
        geoLocationCommand.getLongtitudeLocator().contains(geoLocationData.longitude)

    })
})