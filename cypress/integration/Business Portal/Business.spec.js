/// <reference types ="cypress"/>
import LoginPage from "../PageObjects/LoginPage";

describe('Test suite', function(){
    it('validate login test',function(){
        const Lp=new LoginPage()
        Lp.visit()
        Lp.fillEmail('testuser-e48beb@mailinator.com')
        Lp.fillPassward('Test@123')
        Lp.submit()
        cy.title().should('be.equal','CARD91 - Business Management- Staging - Sandbox')

    })
})