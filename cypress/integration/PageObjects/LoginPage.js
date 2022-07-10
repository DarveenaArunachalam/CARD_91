/// <reference types ="cypress"/> 
class LoginPage
{
    visit(){
        cy.visit('https://sb.stag.card91.in/')
    }
    fillEmail(value){
      const email=cy.get('[data-test="userEmail"]')
      email.clear()
      email.type(value)
      return this
    }
    fillPassward(value){
       const Password= cy.get('#passwordBoxForLogin')
       Password .clear()
       Password .type(value)
       return this
    }
    submit(){
        const button=cy.get('#loginBtn')
        button.click()
    }
}
export default LoginPage