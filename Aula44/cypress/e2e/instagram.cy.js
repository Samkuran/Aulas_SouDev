describe('Testar pag de login', () => {
      beforeEach(() => {
          cy.visit('https://www.instagram.com/');
      });  //antes de cada coisa

      it('testar se o login retorna senha incorreta', () => {
        //vai encontrar o botao com texto log in e clicar
        cy.get('button').contains('Log In').click();

        cy.wait(2000);
        //garantindo que tem um button com o texto Entrar
        cy.get('button').contains('Log in');

        cy.contains('Forgot password');

        cy.get('[name="username"]').type('samantha');
        cy.get('[type="password"]').type('123444555');
        //cy.get('[type="password"]').type('1234{enter}');

        cy.get('[type="submit"]').click();
      });
});