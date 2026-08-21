import{test,expect} from'@playwright/test'


import { TestConfig } from '../test.config'
import { HomePage } from '../pages/homepage'
import { SearchPage } from '../pages/searchpage'


// test
let testconfig:TestConfig
let homePage:HomePage
let searchPage:SearchPage

test.beforeEach(async({page})=>
{
    testconfig=new TestConfig();
    const apprul=testconfig.appurl
    await page.goto(apprul)

    searchPage=new SearchPage(page)
    homePage=new HomePage(page)
})

test.afterEach(async({page})=>
{
    await page.close()
})

test("searchProducts",async()=>
{
    /* const testconfig=new TestConfig();
    const apprul=testconfig.appurl
    await page.goto(apprul) */

    //const productName=testconfig.productName;


    
    //const homePage=new HomePage(page)
    await homePage.EnteringProductName(testconfig.productName)
    await homePage.ClickSearchButton()


    //const searchpage=new SearchPage(page)
    expect(await searchPage.isSearchPageExists()).toBeTruthy();
    const isproductfound=await searchPage.isProductExist(testconfig.productName);
    expect(isproductfound).toBeTruthy()

    
})