

describe("Rediobutton",()=>{
    it ("rediobutton", ()=>{

cy.visit("https://testautomationpractice.blogspot.com/")
cy.get("input#male").should('be.visible')
cy.get("input#female").should('be.visible')

cy.get("input#male").check().should('be.checked')
cy.get("input#female").should('not.be.checked')

    })

})