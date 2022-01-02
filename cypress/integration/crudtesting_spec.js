describe('Testing CRUD!', () => {
    beforeEach(() => {
        cy.wait(500);
        
    })
    // Add new note
    it('New note',()=>{
        // viewport for mobile
    cy.viewport('samsung-s10');
        cy.visit('https://piotrkocrud64.netlify.app');
        cy.contains('New Note').click();
        cy.get('.newNote__title').type('HELLO').should('have.value', 'HELLO');
        cy.get('.newNote__content').type('This note is write from cypress to testing this app!');
        cy.get('.newNote__imp').click();
        cy.contains('Add').click();
    });

    it('Request to database!',()=>{
        cy.request('POST', 'https://crudpiotrapp.herokuapp.com/api/notes', {
            title: 'I try connect to database',
            body: 'Did you hear me?',
            important: true
          });
          cy.wait(15000)
        cy.get('.Note h2').first().should('have.text', 'I try connect to database');

    });

    it('Editing!',()=>{
        
        cy.get('.btn-info').first().click();
        cy.get('.inputEdit').first().clear().type('Request is OK!');
        cy.get('.btn-success').first().click()

    });

    it('Delete this!',()=>{
        
        cy.get('.btn-delete').first().click();
        

    });

});
