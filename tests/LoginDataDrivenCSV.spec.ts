import{test,expect}from'@playwright/test'

// Importing required page classes to the test
import { HomePage } from '../pages/homepage'
import { LoginPage } from '../pages/loginpage'
import { MyAccountPage } from '../pages/myaccountpage'
import { DataProvider } from '../utils/dataProvider'
import { TestConfig } from '../test.config'


// load JSON test data from file (logindata.csv)

const csvpath="testdata/logindata.csv"

// loading data from the DataProviderclass.
//  we have to call getTestDatafromCSV from DaraProvider class
// mention file path in the parameter field
const csvtestdata=DataProvider.getTestDatafromCSV(csvpath)

for(const data of csvtestdata)
{
    test(`Login Test with CSV Data: ${data.testname} @datadriven`,async({page})=>
    {
        const testconfig=new TestConfig();
        const appurl= testconfig.appurl
        await page.goto(appurl);


        const homePage=new HomePage(page)
        await homePage.ClickMyAccount();
        await homePage.ClickLoginLink();
      

        const loginpage=new LoginPage(page)
        await loginpage.FillEmail(data.email);
        await loginpage.FillPassword(data.password);
        await loginpage.ClickSubmitButton();
      
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