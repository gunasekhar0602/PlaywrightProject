/* 
* Testcase - Account Registration

Tags: @master     @sanity    @regression

Steps:
1) Navigate to application
2) Go to "My Account" and click "Register"
3) Fill in registration details with random data
4) Agree to Privacy policy and submit the from
5) Validate the confirmation message
*/

// We need to import all the required classes to the test file
import{test,expect,Location}from'@playwright/test';
import{TestConfig}from'../test.config';
import { HomePage } from '../pages/homepage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { RandomDataUtil } from '../utils/randomDataGenerator';


// making homePage and registrationPage as global variables for accessing them all over the test
// these two are objects of classes for HomePage and RegistrationPage
let homePage:HomePage
let registrationPage:RegistrationPage

test.beforeEach(async({page})=>
{
    const testconfig=new TestConfig()
    const appurl= testconfig.appurl
    await page.goto(appurl);           // navigate to the application URL

    // mentioning the created class objects in hooks
    homePage=new HomePage(page);
    registrationPage=new RegistrationPage(page);

})


test.afterEach(async({page})=>
{
    await page.close()
})


// remove page fixture from the test as we used it in the before each and after each methods
test('user registration test @master @sanity @regression',async({})=>
{
    /* // 1) Navigate to the application URL
    // creating object to TestConfig class
    // from the object we can utilize OR call the methods and properties of the class
    const testconfig=new TestConfig()
    const appurl= testconfig.appurl
    await page.goto(appurl);    // navigate to the application URL */

    // 2) Go to "My Account" and click "Register"
    // creating object to HomePage class
    // from the object we can utilize OR call the methods and propertie of the class
    
    await homePage.ClickMyAccount();    
    await homePage.ClickRegister();

    // 3) Fill Registration details with random data
    // creating object to RegistrationPage class

    // From RandomDataUtil we can directly call the methods as the methods are static
    // No need to create any objects to those methods
    await registrationPage.SetFirstName(RandomDataUtil.getFirstName())
    await registrationPage.SetLastName(RandomDataUtil.getLastName());
    //const email=await registrationPage.SetEmail(RandomDataUtil.getEmail());
    const email:string=RandomDataUtil.getEmail();
    console.log('email is', email);
    await registrationPage.SetEmail(email);
    await registrationPage.SetTelephone(RandomDataUtil.getPhoneNumber());


    const password:string=RandomDataUtil.getPassword()
    console.log('password is',password)
    await registrationPage.SetPassword(password);
    await registrationPage.SetConfirmPassword(password);

    await registrationPage.SetPrivacyPolicy();
    await registrationPage.ClickContinue();

    const confirmationmessage=await registrationPage.CheckConfirmationMessage();
    expect(confirmationmessage).toContain('Your Account Has Been Created!');

})

//http://localhost:8080/user/guna/