import{Page,expect,Locator} from'@playwright/test'

export class LoginPage
{
    private readonly page:Page
    private readonly EmailTextBox:Locator;
    private readonly PasswordTextBox:Locator;
    private readonly SubmitButton:Locator;
    private readonly ErrorMessageText:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.EmailTextBox=page.locator('#input-email');
        this.PasswordTextBox=page.locator('#input-password');
        this.SubmitButton=page.locator('//input[@value="Login"]');
        this.ErrorMessageText=page.locator('.alert.alert-danger.alert-dismissible')
    }


    async FillEmail(email:string)
    {
        await this.EmailTextBox.fill(email)
    }

    async FillPassword(password:string)
    {
        await this.PasswordTextBox.fill(password);
    }

    async ClickSubmitButton()
    {
        await this.SubmitButton.click()
    }

    async getloginErrorMessage():Promise<null|string>
    {
         return ( this.ErrorMessageText.textContent());
    }
}