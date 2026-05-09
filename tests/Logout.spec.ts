import{test,expect}from'@playwright/test'

import { HomePage } from '../pages/homepage'
import { LoginPage } from '../pages/loginpage'
import { MyAccountPage } from '../pages/myaccountpage'
import { LogoutPage } from '../pages/logoutpage'
import { TestConfig } from '../test.config'


let homepage:HomePage
let myaccountpage:MyAccountPage
let loginpage:LoginPage
let logoutpage:LogoutPage
let testconfig:TestConfig

test.beforeEach(async({page})=>
{

    testconfig=new TestConfig()
    const apprul=testconfig.appurl
    await page.goto(apprul)

    homepage=new HomePage(page)
    loginpage=new LoginPage(page)
    myaccountpage=new MyAccountPage(page);
    logoutpage=new LogoutPage(page);
    testconfig=new TestConfig()
   
   
    

})

test.afterEach(async({page})=>
{
    await page.close()
})



test("logout test",async()=>
{
    /* const testconfig=new TestConfig()
    const apprul=testconfig.appurl
    await page.goto(apprul) */


    //const homepage=new HomePage(page)
    await homepage.ClickMyAccount()
    await homepage.ClickLoginLink()
    
    //const loginpage=new LoginPage(page)
    await loginpage.FillEmail(testconfig.email)
    await loginpage.FillPassword(testconfig.password)
    await loginpage.ClickSubmitButton()

    //const myaccountpage=new MyAccountPage(page)
    await myaccountpage.isMyAccountPageExits()
    await myaccountpage.ClickMyAccountButton()
    await myaccountpage.ClickLogout()

    //const logoutpage=new LogoutPage(page)
    await logoutpage.MessageHeadingcheck()
    await logoutpage.clickContinue()

    await homepage.isHomePage()



})