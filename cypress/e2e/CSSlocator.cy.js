describe('csslocator',()=>{
it ("test", ()=>{
cy.visit ("https://www.amazon.in/")
cy.get("#twotabsearchtextbox").type("mobiles")
cy.get("#nav-search-submit-button").click()
cy.get("#p_90\/6741117031 > span > a > div > label > input[type=checkbox]").click()

})

})