describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://pt-br.facebook.com')
    cy.get("#email").type("sam@gmail.com")
    cy.get("#pass").type("123456")
    cy.get("#loginbutton").click({multiple: true})
  })
})