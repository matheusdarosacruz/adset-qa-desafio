describe('template spec', () => {

    it('CT05 – Remover foto do veículo', () => {
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

      //Scroll até o botão de upload
      cy.get('.button-file > .nostyle').scrollIntoView();
      
      //Fazendo o upload da foto do casrro
      cy.get(".button-file > input[type='file']").selectFile('agile20141.jpeg');

      //Excluindo as fotos adicionadas
      cy.get('.box-fotos > ul > :nth-child(1) > a > .icon16').click();




      












      

      

    })
  })