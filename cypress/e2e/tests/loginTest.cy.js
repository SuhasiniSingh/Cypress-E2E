import { loginPage } from "../../pages/loginPage";
import loginPageData from "../../fixtures/loginPageData.json"

const loginobj = new loginPage()
describe('test automation suite', () => {
    before(() => {
        cy.visit(Cypress.env('URL'))
        cy.login(loginPageData.login.username, loginPageData.login.password)
    })

    it.skip('validateLogin test case', () => {
        loginobj.validatePageTitle()
    })

    it.skip('verify admin', () => {
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').click()
    })

    it.only('enterPIMInfo', () => {
        loginobj.clickPIM()
        loginobj.enterEmpname(loginPageData.PIMdetails.EmployeeName)
        loginobj.enterEmpId(loginPageData.PIMdetails.EmployeeId)
    })

})