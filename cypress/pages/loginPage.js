export class loginPage {

    weblocators = {

        pim: ":nth-child(2) > .oxd-main-menu-item > .oxd-text",
        EmpName: ":nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input",
        EmpId: ":nth-child(2) > .oxd-input"

    }

    validatePageTitle() {
        cy.title().should('eq', 'OrangeHRM')
    }

    clickPIM() {
        cy.get(this.weblocators.pim).click()
    }

    enterEmpname(EmployeeName) {
        cy.get(this.weblocators.EmpName).type(EmployeeName)
    }

    enterEmpId(EmployeeId) {
        cy.get(this.weblocators.EmpId).type(EmployeeId)
    }

}