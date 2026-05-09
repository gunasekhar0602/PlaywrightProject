import{Locator, Page} from'@playwright/test'


import { HomePage } from './homepage';




export class SearchPage
{
    private readonly page:Page;
    private readonly searchpageheader:Locator;
    private readonly searchproducts:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.searchpageheader=page.locator("#content h1");
        this.searchproducts=page.locator("h4>a");
    }


    async isSearchPageExists():Promise<boolean>
    {
        try{
            const headertext=await this.searchpageheader.textContent()
            return headertext?.includes('Search -') ?? false
        }
        catch(error)
        {
            return false
        }
    }

    async isProductExist(productName:string):Promise<boolean>
    {
        try{
            const count=await this.searchproducts.count()
            for (let i=0;i<count;i++)
            {
                const product=this.searchproducts.nth(i)
                const title=await product.textContent()
                if(title===productName)
                {
                    return true
                }
            }
        }
        catch(error)
        {
            console.log(`Error checking product existence: ${error}`)
        }
        return false
    }

    async getProductCount():Promise<number>
    {
        return await this.searchproducts.count()
    }


}