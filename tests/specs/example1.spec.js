const { test, expect } = require("@playwright/test");
const indexPage = require("../../pages/index.page")
const data = require("../../data/data.json")
require("dotenv").config();

test.beforeEach(async ({ page }) => {
  await test.step("Launching url", async () => {
    const loginPage = new indexPage.LoginPage(test,page);
    await loginPage.launchUrl();
    await expect(page).toHaveURL(process.env.baseUrl);
  });
});

test("Registration", async ({ page }) => {
  const reg = new indexPage.RegisterPage(test,page);
  await reg.registrationDetails();
});

test("Login with valid credentials", async ({ page }) => {
  const loginPage = new indexPage.LoginPage(test,page);
  await loginPage.loginAction(process.env.user_mailid,process.env.user_password);
  await test.step("Checking whether the logout button is visible or not",async () => {
    expect(loginPage.logoutButton).toBeVisible();
    await page.waitForTimeout(parseInt(process.env.medium_timeout));
  })
});

test("Login with invalid credentials", async ({ page }) => {
  const loginPage = new indexPage.LoginPage(test,page);
  await loginPage.loginAction(process.env.invalid_mailid,process.env.invalid_password);
  await test.step("Checking the error msg is equal or not",async () => {
    expect(loginPage.errorMsg).toContainText(data.message.errorMsg);
    await page.waitForTimeout(parseInt(process.env.large_timeout));
  })
})

test("Add the product to the cart and removing the product", async ({
  page,
}) => {
  const loginPage = new indexPage.LoginPage(test,page);
  await loginPage.loginAction(process.env.user_mailid,process.env.user_password);
  const cartPage = new indexPage.CartPage(test,page);
  await cartPage.addToCartActon();
  await loginPage.logoutAction();
  await test.step("Checking whether the logout button is visible or not",async () => {
    expect(loginPage.login).toBeVisible();
    await page.waitForTimeout(parseInt(process.env.medium_timeout));
  })
});

test("Assertion on navbar",async ({ page }) => {
  const loginPage = new indexPage.LoginPage(test,page);
  await loginPage.loginAction(process.env.user_mailid,process.env.user_password);
  const nav =new  indexPage.NavBar(test,page);
  for(const content of data.navBarText) {
     await expect(nav.navBar(content)).toBeVisible();
     await page.waitForTimeout(parseInt(process.env.small_timeout));
  }
  await loginPage.logoutAction();
})
