
import{Page,expect,Locator} from'@playwright/test'

import { LogoutPage } from './logoutpage';

export class MyAccountPage
{
    private readonly page:Page;
    private readonly msgHeading:Locator;
    private readonly myaccountbutton:Locator
    private readonly Logout:Locator;




    constructor(page:Page)
    {
        this.page=page;
        this.msgHeading=page.locator("//h2[text()='My Account']");
        this.myaccountbutton=page.locator("//span[text()='My Account']");
        this.Logout=page.locator("//a [text()='Logout']").nth(1);
    }

    async isMyAccountPageExits(): Promise<boolean>
    {
        try{
            const isvisible=await this.msgHeading.isVisible()
            return isvisible;
        }
        catch(error)
        {
            console.log(`error in MyAccount opage heading visibility: ${error}`)
            return false
        }
    }

    async ClickMyAccountButton()
    {
        await this.myaccountbutton.click();
    }

    async ClickLogout():Promise<LogoutPage>

    {
        try{
                await this.Logout.click()
                return new LogoutPage(this.page)
        }
        catch(error)
        {
            console.log(`unable to click logout link, ${error}`);
            throw error
        }
        
    }
}