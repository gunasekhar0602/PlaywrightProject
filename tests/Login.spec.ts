import{test,expect,Locator}from'@playwright/test'


import { HomePage } from '../pages/homepage'
import { LoginPage } from '../pages/loginpage'
import { MyAccountPage } from '../pages/myaccountpage'
import { TestConfig } from '../test.config'


let homepage:HomePage
let loginpage:LoginPage
let testconfig:TestConfig
let myaccountpage:MyAccountPage

test.beforeEach(async({page})=>
{
    testconfig=new TestConfig()
    const appurl=testconfig.appurl
    await page.goto(appurl)

    homepage=new HomePage(page)
    loginpage=new LoginPage(page)
    myaccountpage=new MyAccountPage(page)
    testconfig=new TestConfig()
})

test.afterEach(async({page})=>
{
    await page.close();
})


test("Login @sanity @regression @master",async()=>
{
    /* const testconfig=new TestConfig()
    const appurl=testconfig.appurl
    await page.goto(appurl)
 */

    //const homepage=new HomePage(page)
    await homepage.ClickMyAccount();
    await homepage.ClickLoginLink();

    //const loginpage=new LoginPage(page)
    await loginpage.FillEmail(testconfig.email)
    await loginpage.FillPassword(testconfig.password)
    await loginpage.ClickSubmitButton()
    //await page.waitForTimeout(5000)

    
    const islogin=await myaccountpage.isMyAccountPageExits();
    expect(islogin).toBeTruthy();
})