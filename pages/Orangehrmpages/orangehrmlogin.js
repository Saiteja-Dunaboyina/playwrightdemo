require("dotenv").config();
const { executeStep } = require("../../utilities/action")

exports.LoginPage = class LoginPage {
    constructor(test,page) {
        this.test = test;
        this.page = page;
        this.username = page.locator("//input[@name='username']");
        this.password = page.locator("//input[@name='password']");
        this.loginButton = page.locator("//button[text()=' Login ']")
        this.profile = page.locator("//img[@src='/web/index.php/pim/viewPhoto/empNumber/7']");
        this.logoutButton = page.locator("//a[text()='Logout']");
    }

    async launchUrl() {
        await this.page.waitForTimeout(parseInt(process.env.small_timeout));
        await this.page.goto(process.env.orangeHrmUrl);
        await this.page.waitForTimeout(parseInt(process.env.small_timeout));
    }

    async login(username,password) {
        await this.page.waitForTimeout(parseInt(process.env.small_timeout));
        await executeStep(this.test,this.username,"fill","Enter the valid username",[username]);
        await executeStep(this.test,this.password,"fill","Enter the  valid password",[password]);
        await executeStep(this.test,this.loginButton,"click","Click on the login page")
        await executeStep(this.test,this.profile,"click","Click on the profile");
    }

    async logout() {
        await executeStep(this.test,this.profile,"click","Click on the profile");
        await executeStep(this.test,this.logoutButton,"click","Click on logout button");
    }
}