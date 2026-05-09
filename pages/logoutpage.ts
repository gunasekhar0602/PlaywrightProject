import{Page,Locator} from'@playwright/test'
import { HomePage } from './homepage';


export class LogoutPage
{
    private readonly page:Page
    private readonly messageheading:Locator;
    private readonly ContinueButton:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.messageheading=page.locator("h1:has-text('Account Logout')");
        this.ContinueButton=page.locator("//a[text()='Continue']")
    }

    async MessageHeadingcheck()
    {
        const message=await this.messageheading.textContent()
        console.log(message)
    }

    async ContinueButtonVissible()
    {
        try{
            const continuebuttonvissible=await this.ContinueButton.isVisible()
            return continuebuttonvissible
        }
        catch(error)
        {
            console.log(`continue button checking error, ${error}`)
        }
        
    }
    async clickContinue()
    {
        await this.ContinueButton.click();
        return new HomePage(this.page)
    }
}