describe('template spec', () => {

    it('CT08 – Cancelar a inclusão do veículo', () => {
      cy.visit('https://www.adset.com.br/integrador')

      //Login
      cy.get('#Email').type(Cypress.env('login_usuario'));
      cy.get('#Senha').type(Cypress.env('senha_usuario'));
      cy.get('#loginBtn').click();

      //Acessar a tela de incluir veículo
      cy.get('.icomoon-icon-car').click();
      cy.contains('Incluir')
        .should('be.visible')
        .click();
      cy.get(':nth-child(39) > :nth-child(1) > .box > .title > h4').click();

      //Clicar para cancelar a inclusão do veículo
      cy.get('.marginR10').click();

      //Verificando se voltou para a página de estoque
      cy.get('#buscar').should('be.visible');

      












      

      

    })
  })