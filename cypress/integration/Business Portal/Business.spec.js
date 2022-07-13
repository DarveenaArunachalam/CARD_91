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
describe('Card details',function(){
    it("card details",function(){
        cy.get('[id="cardIcon"]').click()
        cy.wait(2000)
        cy.get('button').contains('Issue Card').click()
        cy.wait(2000)
        cy.get('[name="name"]').eq(0).type('Card full name')
        cy.get('[name="name"]').eq(1).type('NameOnCard')
        cy.get('[name="mobileNumber"]').type('8766800242')
        cy.get('[name="email"]').type('8766800242@mailinator.com')
        cy.get('[name="addressLine1"]').type('123/New Bus Stand(north side)')
        cy.get('[name="addressLine2"]').type('BNNS COMPLEX')
        cy.get('[name="landmark"]').type('Apple Super Market Oppo')
        cy.get('[name="pinCode"]').type('614804')
        cy.get('[name="city"]').type('Thanjavur')
        cy.get('[name="state"]').type('Thanjavur')
        cy.wait(3000)
        cy.get('input[value="PHYSICAL_NAMED_CARD"]').click({force:true})
        cy.get('body.ltr.default-transition.modal-open:nth-child(2) div.modal.fade.show.modal-right.right-modal div.modal-dialog.min-fifty-vw-modal div.modal-content:nth-child(2) div.modal-body.p-0 div:nth-child(1) form:nth-child(1) div.d-flex.justify-content-center.w-100.sticky-modal-footer.border-top.shadow-none.mt-5 > button.btn.border-radius-4.mt-3.btn-primary').click()
        cy.wait(1000)
        cy.get('[aria-label="Close"]').click({force:true})
    })
})