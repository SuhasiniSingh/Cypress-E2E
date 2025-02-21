import { loginPage } from "../../pages/loginPage";
import loginPageData from "../../fixtures/loginPageData.json"

const loginobj = new loginPage()
describe('test automation suite', () => {

    it('login test case', () => {

        loginobj.openURL()
        loginobj.enterUsername(loginPageData.userName)
        loginobj.enterPassword(loginPageData.passWord)
        loginobj.clickLoginbtn()
        loginobj.validatePageTitle()
    })

})