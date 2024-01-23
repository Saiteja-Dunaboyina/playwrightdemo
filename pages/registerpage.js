// const { test, expect } = require("@playwright/test");
require("dotenv").config();
const data = require("../data/data.json");
const { executeStep } = require("../utilities/action")
exports.RegisterPage = class RegisterPage {
  constructor(test,page) {
    this.test = test;
    this.page = page;
    this.registerButton = page.locator("//a[text()='Register']");
    this.gender = page.locator("//label[text()='Male']");
    this.firstName = page.locator("//input[@id='FirstName']");
    this.lastName = page.locator("//input[@id='LastName']");
    this.dayDropdown = page.locator("//select[@name='DateOfBirthDay']");
    this.monthDropdown = page.locator("//select[@name='DateOfBirthMonth']");
    this.yearDropdown = page.locator("//select[@name='DateOfBirthYear']");
    this.emailId = page.locator("//input[@id='Email']");
    this.company = page.locator("//input[@id='Company']");
    this.password = page.locator("//input[@id='Password']");
    this.confirmPassword = page.locator("//input[@id='ConfirmPassword']");
    this.confirmButton = page.locator("//button[@id='register-button']");
    this.continueButton = page.locator("//a[text()='Continue']");
  }

  registrationDetails = async () => {
    await executeStep(this.test,this.registerButton,"click","Click on the register button");
    await executeStep(this.test,this.gender,"click","Click on the male radio button");
    await executeStep(this.test,this.firstName,"fill","Enter the First Name",[data.personalDetails.firstname]);
    await executeStep(this.test,this.lastName,"fill","Enter the Last Name",[data.personalDetails.lastname]);
    await executeStep(this.test,this.dayDropdown,"click","Click on the Day drop down");
    await executeStep(this.test,this.dayDropdown,"selectOption","Select the date",[data.personalDetails.date]);
    await this.page.waitForTimeout(parseInt(process.env.small_timeout));
    await executeStep(this.test,this.monthDropdown,"click","Click on the Month drop down");
    await executeStep(this.test,this.monthDropdown,"selectOption","Select the Month",[data.personalDetails.month]);
    await this.page.waitForTimeout(parseInt(process.env.small_timeout));
    await executeStep(this.test,this.yearDropdown,"click","Click on the year drop down");
    await executeStep(this.test,this.yearDropdown,"selectOption","Select the Year",[data.personalDetails.year]);
    await this.page.waitForTimeout(parseInt(process.env.small_timeout));
    await executeStep(this.test,this.emailId,"fill","Enter the email id",[process.env.user_mailid]);
    await executeStep(this.test,this.company,"fill","Enter the company name",[data.personalDetails.company])
    await executeStep(this.test,this.password,"fill","Enter the password",[process.env.user_password]);
    await executeStep(this.test,this.confirmPassword,"fill","Enter the confirm password",[process.env.user_password]);
    await executeStep(this.test,this.confirmButton,"click","Click on registration button");
    await executeStep(this.test,this.continueButton,"click","Click on continue button");
  };
};
