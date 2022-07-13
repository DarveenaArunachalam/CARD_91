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
        //window.location.href = '/some/new/link'
})

    })

describe('Card details',function(){
    //window.location.href = '/app/organization/overview'

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
        //cy.get('[aria-label="Close"]').click({force:true})
        cy.get('[aria-label="Close"]').click({force:true})
        cy.go(-1)
        cy.get('[class="btn ml-3 add-btn d-flex align-items-center btn-primary"]').click()
        cy.get('[id="business-input"]').type('sub business')
        cy.get('[id="displayName-input"]').type('display name')
        cy.wait(3000)
        //cy.get('.multiselect__single').contains('PUBLIC').click().should('include.text', 'PUBLIC')
        cy.get('[aria-label="GST Number"]').type('22NCBFG8989K1Z2')
        cy.get('#calling-name-input').type('adminname')
        cy.get('#authSignMob-input').type('8272368267')
        cy.get('#authSignEmail-input').type('admin@yahoo.com')
        cy.get('#addressLine1-input').type('123#,New Bus Stand(North side)')
        cy.get('#addressLine2-input').type('Lakshmi vilas bank(opp)')
        cy.get('#landmark-input').type('Peravurani')
        cy.get('#pinCode-input').type('614804')
        cy.get('#city-input').type('Chennai')
        cy.get('#state-input').type('TN')
        cy.get('button').contains('Submit').click();
        cy.get('.close > svg:nth-child(1)').click({force:true});
        cy.get('.hover-pointer').click()
        cy.wait(1000)
        cy.get('.close > svg:nth-child(1)').click();






          
    })
    
})