describe('my test', () => {
  it('test', () => {
    
cy.visit("https://www.amazon.com/")
cy.title().should('eq','amazon')

  })
  it('test2', () => {
    
    cy.visit("https://www.amazon.com/")
  
})
})