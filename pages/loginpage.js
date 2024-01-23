// const { test, expect } = require("@playwright/test");
require("dotenv").config();
const { executeStep } = require("../utilities/action")
exports.LoginPage = class LoginPage {
  constructor(test,page) {
    this.test = test;
    this.page = page;
    this.login = page.locator("//a[text()='Log in']");
    this.emailId = page.locator("//input[@id='Email']");
    this.password = page.locator("//input[@id='Password']");
    this.loginButton = page.locator("//button[text()='Log in']");
    this.logoutButton = page.locator("//a[text()='Log out']");
    this.emialError = page.locator("//span[@id='Email-error']");
    this.errorMsg = page.locator("//div[@class='message-error validation-summary-errors']")
  }

  async launchUrl() {
    await this.page.goto(process.env.baseUrl);
    await this.page.waitForTimeout(parseInt(process.env.large_timeout));
  }

  async loginAction(mail,password) {
    await executeStep(this.test,this.login,"click","Click on login");
    await executeStep(this.test,this.emailId,"fill","Enter the Email id",[mail]);
    await executeStep(this.test,this.password,"fill","Enter the password",[password]);
    await executeStep(this.test,this.loginButton,"click","Click on the login button")
  }

  async logoutAction() {
    await executeStep(this.test,this.logoutButton,"click","Click on the logout");
  }
};
