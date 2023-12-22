/// <reference type="cypress">
describe("Digest Auth", function(){
    
    it("Validate basic auth using the url",function(){
        
            cy.visit('https://the-internet.herokuapp.com/digest_auth',{
                headers:{
                    authorization: 'Digest username="admin", realm="Protected Area", nonce="MTY5NTMyMzU3NCA4YWQzYTFhMzhjNDJkZmRjYmFhNjlhYjVjMzJiMjgzMg==", uri="/digest_auth", response="54807a5e71f702628c6d1f0f924ae90f", opaque="610a2ee688cda9e724885e23cd2cfdee", qop=auth, nc=00000002, cnonce="925e697ab62b0d5d"',
                    
                },
                failOnStatusCode:false
            })
            cy.get("h3").contains("Digest Auth")
            cy.contains(".example p","Congratulations! You must have the proper credentials.")
    })
})