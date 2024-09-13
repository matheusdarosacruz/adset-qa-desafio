describe('template spec', () => {

    it('CT02 – Inclusão de veículo usado - Verificação se placa está obrigatório', () => {
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

      //Colocando a condição do veículo como usado
      cy.get('.checked > #CondicaoVeiculo').click();

      //Verificando se placa está com requisito de obrigatório
      cy.contains('Placa *');







      












      

      

    })
  })