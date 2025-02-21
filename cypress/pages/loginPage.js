export class loginPage {

    weblocators = {

        userName: 'input[name="username"]',
        passWord: 'input[name="password"]',
        loginbtn: 'button[type="submit"]'

    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }
    enterUsername(uName) {
        cy.get(this.weblocators.userName).type(uName)
    }

    enterPassword(Pword) {
        cy.get(this.weblocators.passWord).type(Pword)
    }

    clickLoginbtn() {
        cy.get(this.weblocators.loginbtn).click()
    }

    validatePageTitle() {
        cy.title().should('eq', 'OrangeHRM')
    }



}