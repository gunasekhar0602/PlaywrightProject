import { Page, expect,Locator } from "@playwright/test";

export class RegistrationPage
{
    // Locators
    private readonly page:Page;
    private readonly FirstName:Locator;
    private readonly LastName:Locator;
    private readonly Email:Locator;
    private readonly Telephone:Locator;
    private readonly Password:Locator;
    private readonly ConfirmPassword:Locator;
    private readonly ContinueButton:Locator;
    private readonly PrivaryPolicyCheckBox:Locator;
    private readonly ConfirmationMessage:Locator;

    // Constructor
   constructor(page:Page)
   {
    this.page=page;
    this.FirstName=page.getByPlaceholder('First Name');
    this.LastName=page.getByPlaceholder('Last Name');
    this.Email=page.getByPlaceholder('E-Mail');
    this.Telephone=page.getByPlaceholder('Telephone');
    this.Password=page.locator("//input[@name='password']");
    this.ConfirmPassword=page.locator("//input[@name='confirm']");
    this.PrivaryPolicyCheckBox=page.locator("//input[@type='checkbox']");
    this.ContinueButton=page.locator("//input[@type='submit']");
    this.ConfirmationMessage=page.locator("h1:has-text('Your Account Has Been Created')")
   }

   // Action methods
   async SetFirstName(fname:string)
   {
    await this.FirstName.fill(fname)
   }

   async SetLastName(lname:string)
   {
    await this.LastName.fill(lname)
   }

   async SetEmail(email:string)
   {
    await this.Email.fill(email)
   }

   async SetTelephone(telephone:string)
   {
    await this.Telephone.fill(telephone)
   }

   async SetPassword(password:string)
   {
    await this.Password.fill(password)
   }

   async SetConfirmPassword(password:string)
   {
    await this.ConfirmPassword.fill(password)
   }

   async SetPrivacyPolicy()
   {
    await this.PrivaryPolicyCheckBox.check()
   }
   async ClickContinue()
   {
    await this.ContinueButton.click()
   }

   async CheckConfirmationMessage()
   {
    return await this.ConfirmationMessage.textContent() ?? ''
   }


}