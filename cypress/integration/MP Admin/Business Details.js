/// <reference types ="cypress"/> 



describe('Monepeak portal', function(){ 
    it('should load correct url',function(){
        cy.visit('https://admin.sb.stag.card91.in/')
         })
    it('Should check correct url',function(){
        cy.url().should('include','card91.in')  
         }) 
    it('Verify title of the page',function(){
        cy.get('h6').should('be.visible')
         })
    it('Should fill username',function(){
        //cy.get('placeholder').should('have.text', 'Email ID or Mobile Number')
        //cy.get('input#userEmail.password-box-1 form-control').should('contain.text', 'Email ID or Mobile Number')
       // cy.get('[data-test="userEmail"]').contains('Email ID or Mobile Number').should((placeholder).invoke('text') => {
           // expect(placeholder.text()).to.equal('Email ID or Mobile Number');
        cy.get('[data-test="userEmail"]')
        .type('testuser@mailinator.com')
        .should('have.value', 'testuser@mailinator.com')
    })     
    it('Should fill password',function(){
        cy.get('div').should('contain.text', 'password')
        cy.get('#passwordBoxForLogin')
        .type('Test@123')
        .should('have.value', 'Test@123')
        //cy.screenshot('Login Page.png')
    })
    it('Should click the login button',function(){
        cy.get("#loginBtn")
        .should('contain', 'LOGIN');
        cy.get('#loginBtn').click()
        
    })
})
describe('Business Details',function(){
    
    it('Click view business detail option',function(){
        cy.get('#arrow-wrapper').click()
        cy.wait(3000)
        //CARDPROGRAM CREATION
        cy.get('a').contains('Card Programs').click()
        let a="cardprogram"
        if(a=="b"){
       cy.get('div').contains('New Card Program').click()
       cy.get('input[name=groupName]').type('Card Program Name')
       cy.get('.multiselect__single').eq(0).click()
        cy.wait(3000)
        cy.get('[data-selected="Selected"]').
        contains('YES Bank - Rupay')
        .click({animationDistanceThreshold: 20})
        .should('have.text','YES Bank - Rupay')
       cy.get('button').contains('Save').click()
      // else{
       cy.get('button[class="single-card-program mr-4 mb-4"]').eq(0).click()

    // WALLET CREATION
        cy.get('div').contains('New Wallet').click()
        cy.get('#userapplicationName').type('SmartWallet1')
        cy.get('#appDesc').type('appdescription')
        cy.get('[value=VIRTUAL]').
        should('be.checked')
        cy.get('[value=VIRTUAL]').
        should('be.checked')
        cy.get('[value=PREPAID]').
        should('not.be.checked')
       // .click({force: true})
        cy.get('body.ltr.default-transition.modal-open:nth-child(2) div.modal.fade.show div.modal-dialog.modal-xl div.modal-content:nth-child(2) div.modal-body div.w-100.w-xs-100.m-auto div.wizard.wizard-default.p-4 div.wizard-basic-step div.appOptions fieldset.form-group.my-1.mr-3 div:nth-child(1) fieldset.form-group div:nth-child(1) div.mr-3.mb-3.custom-control.custom-checkbox:nth-child(1) > label.custom-control-label').click().and('include.text','Allow Split Transactions')
        cy.get('button').contains('Next').click()
        //Rules Creation
        cy.get('button').contains('Add Rule').click().eq(0)
        cy.get('[placeholder="Enter a descriptive rule name"]').type('For rules description')
        cy.get('button').contains('Add Filter Criteria').click()
        //Transaction Type
        cy.get('[class="mr-2 form-control is-valid"]').eq(0)
        .select('txnType')
        .should('have.value','txnType')
            cy.get('[class="form-control is-valid"]').eq(0).select('in').should('have.value','in')
            cy.get('[class="multiselect__placeholder"]').eq(0).click()
            cy.wait(3000)
            cy.get('[data-selected="Selected"]').
            contains('E-Commerce').click({animationDistanceThreshold: 20})
            cy.get('[data-selected="Selected"]').
            contains('ATM').click({animationDistanceThreshold: 20})
            cy.get('[data-selected="Selected"]').
            contains('POS').click({animationDistanceThreshold: 20})
            cy.get('[data-selected="Selected"]').
            contains('Contactless')
            .click({animationDistanceThreshold: 20})
            cy.get('button').contains('Add Filter Criteria').click()

            // Catgory Code
            cy.get('[class="mr-2 form-control is-valid"]').eq(1).select('mcc').
            should('have.value','mcc')
            cy.wait(3000)
            cy.get('[class="form-control is-valid"]').eq(1).select('in').should('have.value','in')
            cy.wait(3000)
            cy.get('[class="multiselect__placeholder"]').type('3000{enter}')

            //merchantName
            cy.get('button').contains('Add Filter Criteria').click()
            cy.get('[class="mr-2 form-control is-valid"]').eq(2).select('merchantName').
            should('have.value','merchantName')
            cy.wait(3000)
            cy.get('[class="form-control is-valid"]').eq(2).select('in').should('have.value','in')
            cy.get('[class="b-form-tags-field flex-grow-1"]').eq(0).type('abcd{enter}')

            //merchantID
            cy.get('button').contains('Add Filter Criteria').click()
            cy.get('[class="mr-2 form-control is-valid"]').eq(3).select('mid').
            should('have.value','mid')
            cy.wait(3000)
            cy.get('[class="form-control is-valid"]').eq(3).select('in').should('have.value','in')
            cy.get('[class="b-form-tags-field flex-grow-1"]').eq(1).type('1234{enter}')

            //Terminal ID
            cy.get('button').contains('Add Filter Criteria').click()
            cy.get('[class="mr-2 form-control is-valid"]').eq(4).select('tid').
            should('have.value','tid')
            cy.wait(3000)
            cy.get('[class="form-control is-valid"]').eq(4).select('in').should('have.value','in')
            cy.get('[class="b-form-tags-field flex-grow-1"]').eq(2).type('1234{enter}')

            //merchantCity
            cy.get('button').contains('Add Filter Criteria').click()
            cy.get('[class="mr-2 form-control is-valid"]').eq(5).select('merchantCity').
            should('have.value','merchantCity')
            cy.wait(3000)
            cy.get('[class="form-control is-valid"]').eq(5).select('in').should('have.value','in')
            cy.get('[class="b-form-tags-field flex-grow-1"]').eq(3).type('chennai{enter}')

            //amount
            cy.get('button').contains('Add Filter Criteria').click()
            cy.get('[class="mr-2 form-control is-valid"]').eq(6).select('amount').
            should('have.value','amount')
            cy.wait(3000)
            cy.get('[class="form-control is-valid"]').eq(6).select('lte').should('have.value','lte')
            cy.get('[placeholder="Enter value"]').eq(0).type('10000{enter}')


            //Add Amount Validation
            cy.get('[class="mr-2 form-control"]').eq(0).select('amount').
            should('have.value','amount')
            cy.wait(3000)
            cy.get('[class="mr-2 form-control"]').eq(1).select('D').should('have.value','D')
            cy.get('[class="mr-2 form-control is-valid"]').eq(7).select('lte').should('have.value','lte')
            cy.get('[placeholder="Enter value"]').eq(1).type('10000{enter}')

            //Add Transaction Count Validation
            cy.get('button').contains('Add Validation').click()
            cy.get('[class="mr-2 form-control"]').eq(2).select('count').
            should('have.value','count')
            cy.wait(3000)
            cy.get('[class="mr-2 form-control"]').eq(3).select('D').should('have.value','D')
            cy.get('[class="mr-2 form-control is-valid"]').eq(8).select('lte').should('have.value','lte')
            cy.get('[placeholder="Enter value"]').eq(2).type('20{enter}')
            cy.get('[type="checkbox"]').check({force:true}).should('be.checked')
            
            //Add CashBack Rule
        cy.get('button').contains('Next').click()
        cy.wait(3000)
        cy.get('.wizard > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(3) > button:nth-child(1)').
        click()
        cy.get('[placeholder="Enter a descriptive rule name"]').eq(1).type('For cashback rules description')
        cy.get('[placeholder="Enter percentage"]').type(10)
        cy.get('[class="h-100 custom-select form-control is-valid"]').select('SmartWallet1')
        cy.get('[value="INSTANT"]').should('be.checked')
        cy.get('[value="ACCRUED"]').should('not.be.checked')
        cy.wait(3000)
        cy.get('button').contains('Next').click()
        cy.get('button').contains('Preview Transaction Rules').click()
        //cy.screenshot('PreviewTransactionRules.png')
        cy.get('#close').eq(0).click()
        cy.get('button').contains('Preview Cashback Rules').click()
        //cy.screenshot('PreviewCashbackRules.png')
        cy.get('#close').eq(0).click()
        cy.get('button').contains('Save').click()
        cy.get('#close-wrapper').click({force:true})
        cy.get('a[class="nav-link"]').eq(1).click()
        cy.wait(3000)
        //CARD CREATION INSIDE BUSINESS DETAILS
        cy.get('button').contains('Issue Card').click()
        cy.wait(2000)
        cy.get('[aria-label="full name"]').type('Card full name')
        cy.get('[aria-label="name on card"]').type('NameOnCard')
        cy.get('[name="mobileNumber"]').type('8766800242')
        cy.get('[name="email"]').type('8766800242@mailinator.com')
        cy.get('[name="addressLine1"]').type('123/New Bus Stand(north side)')
        cy.get('[name="addressLine2"]').type('BNNS COMPLEX')
        cy.get('[name="landmark"]').type('Apple Super Market Oppo')
        cy.get('[name="pinCode"]').type('614804')
        cy.get('[name="city"]').type('Thanjavur')
        cy.get('[name="state"]').type('Thanjavur')
        cy.get('body.ltr.default-transition.modal-open:nth-child(2) div.modal.fade.show.modal-right.rightModal div.modal-dialog.min-fifty-vw-modal div.modal-content:nth-child(2) div.modal-body.p-0 div.p-4.ml-3 div.row:nth-child(12) div.col-12 fieldset.form-group.mt-3 div.list-container.max-two-fifty-scroll div.card.mx-1.my-2.customized-card-checkbox-container.border.shadow-none.border-primary.text-primary:nth-child(2) div.card-body div.btn-group-toggle.d-inline-block > label.btn.btn-secondary').click()
        cy.get('#addNewCardModal___BV_modal_body_ > div > form > div.d-flex.justify-content-center.w-100.sticky-modal-footer.border-top.shadow-none.mt-5 > button').click()}
        else{
        
        
        cy.get('a[class="nav-link"]').eq(1).click()
        cy.wait(3000)
        
        cy.get('.hover-pointer').eq(0).click();
        cy.get('button').contains('Load Fund').click();
        cy.get('#amount-input-undefined').type('100')
        cy.get('.mt-5').contains('Add Money').click({force:true})
        




    

        }
    })
})

describe('Click Add business button',function(){
    it('Business Creation', function(){
        //cy.screenshot('MP Dashboard.png')
        cy.get('.btn>.d-inline-block').should('contain', 'New Business');
        cy.get('.btn>.d-inline-block').click() 
        cy.wait(3000)
        cy.get('#displayName').type('displayName')
        cy.get('#businessName').type('businessName')
        //cy.get('.multiselect__select').click()
        //cy.get('span').contains('LLP').click()
        //cy.get('.multiselect__element').select('PUBLIC').should('include.text', 'PUBLIC')
        cy.get('[aria-label="gst number"]').eq(0).type('22ZSXDE8089K1Z2')
        cy.get('[aria-label="tan number"]').eq(0).type('BCVF70788J')
        cy.get('[aria-label="pan number"]').eq(0).type('BCVFG0989M')
        cy.get('[aria-label="cin number"]').eq(0).type('L76764KA2019OPC141331') 
        //cy.get('.multiselect__select').click()
        cy.get('#accountNumber').type('2321132323123')
        cy.get('#ifscCode').type('YESB0000535')
        cy.get('[aria-label="address 1"]').eq(0).type('123S,New Bus Stand')
        cy.get('[aria-label="address 2"]').eq(0).type('BNNS Complex')
        cy.get('[aria-label="Landmark Input"]').eq(0).type('Thanjavur')
        cy.get('#pinCode').type('614804')
        cy.get('[aria-label="city name"]').eq(0).type('Thanjavur')
        cy.get('[aria-label="state name"]').eq(0).type('TN')
        cy.get("#authSignName").type('USERNAME')
        cy.get('#authSignMobile').type('8623109762')
        cy.get('#authSignEmail').type('1234@mailinator.com')
        cy.get('button').contains('Submit').click()


    })
})



