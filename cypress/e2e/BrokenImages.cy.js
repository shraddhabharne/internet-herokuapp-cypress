/// <reference type="cypress">
 describe ("Broken Images",()=>{
    it("Confirm Broken images",()=>{
        cy.visit("/broken_images")
        cy.get("img").each(($img)=>{
        const imgsrc = $img.prop('src')
            cy.log(imgsrc)
            cy.request({
                url: imgsrc,
                failOnStatusCode: false
            }).then(($resp)=>{
                const status = $resp.status
                if(status == 404){
                    assert.equal($resp.status,404)
                }
            })
        })

    })

 })