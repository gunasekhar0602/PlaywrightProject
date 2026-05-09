import{test,expect,Locator}from'@playwright/test'

// importing required page classes to the test
import { HomePage } from '../pages/homepage'
import { LoginPage } from '../pages/loginpage'
import { MyAccountPage } from '../pages/myaccountpage'
import { DataProvider } from '../utils/dataProvider'
import { TestConfig } from '../test.config'



// load JSON test data from file (logindata.json)

// capture file path
const Jsonpath="testdata/logindata.json"

// loading data from the DataProviderclass.
//  we have to call getTestDatafromJson from DaraProvider class
// mention file path in the parameter field

const Jsontestdata=DataProvider.getTestDatafromJson(Jsonpath)

for(const data of Jsontestdata)
{
    test(`Login Test with JSon Data: ${data.testName} @datadriven`,async({page})=>
    {
        const testconfig=new TestConfig();
        const appurl= testconfig.appurl
        await page.goto(appurl);


        const homePage=new HomePage(page)
        await homePage.ClickMyAccount();
        await page.waitForTimeout(1000);
        await homePage.ClickLoginLink();
        await page.waitForTimeout(1000);

        const loginpage=new LoginPage(page)
        await loginpage.FillEmail(data.email);
        await page.waitForTimeout(1000);
        await loginpage.FillPassword(data.password);
        await page.waitForTimeout(1000);
        await loginpage.ClickSubmitButton();
        await page.waitForTimeout(1000);

        if(data.expected.toLowerCase()==="success")
        {
            const myaccountpage=new MyAccountPage(page)
            const isloggedin =await myaccountpage.isMyAccountPageExits()
            expect(isloggedin).toBeTruthy()
        }
        else
        {
            const errormessage=await loginpage.getloginErrorMessage()
            expect(errormessage).toBe("Warning: No match for E-Mail Address and/or Password.")
        }

    })
    
}




