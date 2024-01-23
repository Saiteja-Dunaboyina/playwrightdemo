const { test, expect } = require("@playwright/test");
const indexPage = require("../../pages/Orangehrmpages/orangehrmindex.page");
const data = require('../../data/orangehrmdata.json')
require("dotenv").config();

test.beforeEach("Launch the Url",async ({ page }) => {
    const loginPage =new indexPage.LoginPage(test,page);
    await loginPage.launchUrl();
});

test("Login with valid username and password",async ({ page }) => {
    const loginPage = new indexPage.LoginPage(test,page);
    await loginPage.login(process.env.user,process.env.password);
    await page.waitForTimeout(parseInt(process.env.small_timeout));
    expect(loginPage.logoutButton).toBeVisible();
    await page.waitForTimeout(parseInt(process.env.small_timeout));
});

test("Validate the admin page",async ({ page }) => {
    const loginPage = new indexPage.LoginPage(test,page);
    await loginPage.login(process.env.user,process.env.password);
    const adminPage = new indexPage.AdminPage(test,page);
    await adminPage.searchEmployee(data.username);
    expect(adminPage.empRole).toBeVisible();
    await loginPage.logout();
})

test("Validate the side bar",async({ page }) => {
    const loginPage = new indexPage.LoginPage(test,page);
    await loginPage.login(process.env.user,process.env.password);
    const sideBar =new indexPage.SideBar(test,page);
    for(const option of data.sideBar) {
        expect(sideBar.element(option)).toBeVisible();
    }
    await loginPage.logout();
})

test("Add the employee",async ({ page }) => {
    const loginPage = new indexPage.LoginPage(test,page);
    await loginPage.login(process.env.user,process.env.password);
    const pimPage = new indexPage.PIMPage(test,page);
    await pimPage.addEmployee(data.firstname,data.lastname,data.user,data.password);
    expect(pimPage.headerText).toContainText(data.fullname);
    await loginPage.logout();
})