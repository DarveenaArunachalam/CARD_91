/// <reference types ="cypress"/> 
describe('Feature works property on Firefox', { browser: 'firefox' }, () => {
    it('should load correct url',function(){
        cy.visit('https://sb.stag.card91.in/')
         })
    it('Should check correct url',function(){
        cy.url().should('include','card91.in')  
         }) 
    it('Verify the title of the page',function(){
        cy.title().should('eq','CARD91 - Business Management- Staging - Sandbox')
    })
    it('Verify title of the page',function(){
        cy.get('h6').should('be.visible')
         })
    it('Should fill username',function(){
         cy.get('[data-test="userEmail"]')
         .clear()
        .type('testuser-e48beb@mailinator.com')
        .should('be.visible')
        .should('be.enabled')
        .should('have.value', 'testuser-e48beb@mailinator.com')
    })     
    it('Should fill password',function(){
        cy.get('div').should('contain.text', 'password')
        cy.get('#passwordBoxForLogin')
        .clear()
        .type('Test@123')
        .should('be.visible')
        .should('be.enabled')
        .should('have.value', 'Test@123')
        //cy.screenshot('Login Page.png')
    })
    it('Should click the login button',function(){
        cy.get("#loginBtn")
        .should('be.visible')
        .should('contain', 'LOGIN');
        cy.get('#loginBtn').click()
        cy.get('[class="logo-contents logo-border"]').click()
        cy.get('a[class="dropdown-item"]').contains('Sign Out').click()
    })
})