describe('template spec', () => {

    it('CTO1 - Inclusão de veículo com sucesso', () => {
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

      //Selecionando a marca do veículo
      cy.get('.marca > .row-fluid > .select2-container > .select2-choice > span').click();
      cy.get(':nth-child(1) > .select2-result-sub > :nth-child(2) > .select2-result-label').click();
      cy.wait(400);

      //Selecionando o modelo do veículo
      cy.get('.modelo > .row-fluid > .select2-container > .select2-choice > span')
        .should('be.visible')
        .click();
      cy.get(':nth-child(5) > .select2-result-label').click();
      cy.wait(400);

      //Selecionando o ano de fabricação
      cy.get(':nth-child(1) > :nth-child(3) > .row-fluid > .select2-container > .select2-choice > span').click();
      cy.get('.select2-highlighted > .select2-result-label').click();
      cy.wait(1000);

      //Selecionando a versão do veículo
      cy.get('.versao > .row-fluid > .select2-container > .select2-choice > span').click();
      cy.get('.select2-highlighted > .select2-result-label').click();

      //Adicionando a Quilometragem do veículo
      cy.get('#Km').type("5000");

      //Selecionando a cor do veículo
      cy.get('.cor > .row-fluid > .select2-container > .select2-choice > span').click();
      cy.get(':nth-child(2) > .select2-result-label').click();

      //Adicionando a placa do veículo
      cy.get('#Placa').type('FWO1876');

      //Adicionando o número do chassi do veículo
      cy.get('#Chassi').type('40028922');

      //Adicionando o preço do veículo
      cy.get('#Valor').type('4470000');

      //Scroll até o botão de upload
      cy.get('.button-file > .nostyle').scrollIntoView();
      
      //Fazendo o upload da foto do casrro
      cy.get(".button-file > input[type='file']").selectFile('agile20141.jpeg');
      cy.get(".button-file > input[type='file']").selectFile('agile20141.jpeg');

      //Confirmando a inclusão do veículo
      cy.get('.buttons-form > .btn-warning').click();

      //Verificando se foi incluído o veículo
      cy.contains('CHEVROLET AGILE');




      












      

      

    })
  })