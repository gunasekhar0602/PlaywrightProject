# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Login.spec.ts >> Login @sanity @regression @master
- Location: tests\Login.spec.ts:33:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('#input-emahhil')

```

# Test source

```ts
  1  | import{Page,expect,Locator} from'@playwright/test'
  2  | 
  3  | export class LoginPage
  4  | {
  5  |     private readonly page:Page
  6  |     private readonly EmailTextBox:Locator;
  7  |     private readonly PasswordTextBox:Locator;
  8  |     private readonly SubmitButton:Locator;
  9  |     private readonly ErrorMessageText:Locator;
  10 | 
  11 | 
  12 |     constructor(page:Page)
  13 |     {
  14 |         this.page=page;
  15 |         this.EmailTextBox=page.locator('#input-emahhil');
  16 |         this.PasswordTextBox=page.locator('#input-password');
  17 |         this.SubmitButton=page.locator('//input[@value="Login"]');
  18 |         this.ErrorMessageText=page.locator('.alert.alert-danger.alert-dismissible')
  19 |     }
  20 | 
  21 | 
  22 |     async FillEmail(email:string)
  23 |     {
> 24 |         await this.EmailTextBox.fill(email)
     |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  25 |     }
  26 | 
  27 |     async FillPassword(password:string)
  28 |     {
  29 |         await this.PasswordTextBox.fill(password);
  30 |     }
  31 | 
  32 |     async ClickSubmitButton()
  33 |     {
  34 |         await this.SubmitButton.click()
  35 |     }
  36 | 
  37 |     async getloginErrorMessage():Promise<null|string>
  38 |     {
  39 |          return ( this.ErrorMessageText.textContent());
  40 |     }
  41 | }
```