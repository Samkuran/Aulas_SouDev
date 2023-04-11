describe('testar pagina cep', () => {
  beforeEach(() => {
      cy.visit('https://alessandrofeitoza.github.io/endereco-via-cep/')
  });

  it('buscar Cep', () => {
    cy.get('#cep').type('60841465').blur() //esse blur siginifica desfocar do input
    cy.wait(2000)

});

})