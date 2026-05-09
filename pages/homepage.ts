// import Page, expect , Locator @from playwright/test
import { Page,expect,Locator } from "@playwright/test";

// export class classname
export class HomePage
{
    // class structure - Locators, Constructor, Action methods

    // Locators
    // Need to mention the elements in the page as variables and assign datatype as Locators
    // private Enforcing Encapsulation
    // while we are implementing the action menthods we need page also
    private readonly page:Page
    private readonly MyAccountLink:Locator;
    private readonly RegisterLink:Locator;
    private readonly LoginLink:Locator;
    private readonly Searchbox:Locator;
    private readonly SearchButton:Locator;
    

    // constructor
    // constructor will initialize the locators to variables
    // constructor will take page as the parameter.
    // Whatever page we are passing wee need to assign this page to local page
    constructor(page:Page)
    {
        this.page=page;
        this.MyAccountLink=page.locator("//span[text()='My Account']");
        this.RegisterLink=page.locator("//a[text()='Register']");
        this.LoginLink=page.locator("//a[text()='Login']");
        this.Searchbox=page.locator(".form-control");
        this.SearchButton=page.locator("//i[@class='fa fa-search']");
    }

    // Action methods
    // check if HomePage exists
    // Assertions are not allowed in the page object
    async isHomePage()
    {
        const title:string=await this.page.title();
        if (title)
        {
            return true;
        }
        return false;
    }

    // Clicking on MyAccountLink
    async ClickMyAccount()
    {
        // in try block we perform the action and in catch we capture the error.
        try
        {
            await this.MyAccountLink.click();
        }
        catch(error)
        {
            console.log(`Exception is occured while clicking on MyAccount, ${error}`);
        }
        
    }

    // Clicking on MyRegister
    async ClickRegister()
    {
        try
        {
            await this.RegisterLink.click();
        }
        catch(error)
        {
            console.log(`Exception is occured while clicking Registerlink, ${error}`);;
        }
    }

    // Clicking on Login
    async ClickLoginLink()
    {
        await this.LoginLink.click();
    }

    // Entering the product name in the search bar
    async EnteringProductName(pname:string)
    {
        await this.Searchbox.fill(pname);
    }

    // Clicking on search button
    async ClickSearchButton()
    {
        await this.SearchButton.click();
    }
}