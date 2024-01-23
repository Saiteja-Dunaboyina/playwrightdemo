const { executeStep } = require("../../utilities/action");

exports.PIMPage = class PIMPage {
  constructor(test, page) {
    this.test = test;
    this.page = page;
    this.pimButton = page.locator("//span[text()='PIM']");
    this.addEmployeeButton = page.locator("//a[text()='Add Employee']");
    this.firstnameInput = page.locator("//input[@name='firstName']");
    this.lastnameInput = page.locator("//input[@name='lastName']");
    this.toggleButton = page.locator(
      "//span[@class='oxd-switch-input oxd-switch-input--active --label-right']"
    );
    this.usernameInput = page.locator(
      "//label[text()='Username']/parent::div/following::div[1]/input"
    );
    this.passwordInput = page.locator(
      "//label[text()='Password']/parent::div/following::div[1]/input"
    );
    this.confirmPasswordInput = page.locator(
      "//label[text()='Confirm Password']/parent::div/following::div[1]/input"
    );
    this.saveButton = page.locator("//button[text()=' Save ']");
    // this.headerText = (header) => page.locator(`//h6[text()='${header}']`);
    this.headerText = page.locator("//h6[@class='oxd-text oxd-text--h6 --strong']");
  }

  async addEmployee(firstname, lastname, user, password) {
    await executeStep(
      this.test,
      this.pimButton,
      "click",
      "Click on the PIM text"
    );
    await executeStep(
      this.test,
      this.addEmployeeButton,
      "click",
      "Click on the add employee"
    );
    await executeStep(
      this.test,
      this.firstnameInput,
      "fill",
      "Enter first name of the employee",
      [firstname]
    );
    await executeStep(
      this.test,
      this.lastnameInput,
      "fill",
      "Enter the last name of the employee",
      [lastname]
    );
    await executeStep(
      this.test,
      this.toggleButton,
      "click",
      "Click on the toogle button for creating login credentials"
    );
    await executeStep(
      this.test,
      this.usernameInput,
      "fill",
      "Enter the username of the employee",
      [user]
    );
    await executeStep(
      this.test,
      this.passwordInput,
      "fill",
      "Enter the password",
      [password]
    );
    await executeStep(
      this.test,
      this.confirmPasswordInput,
      "fill",
      "Enter the confirm password",
      [password]
    );
    await executeStep(
      this.test,
      this.saveButton,
      "click",
      "Click on the save button for saving the employee data"
    );
    await this.page.waitForTimeout(parseInt(process.env.medium_timeout));
  }
};
