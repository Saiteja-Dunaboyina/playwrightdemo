const { executeStep } = require("../../utilities/action")

exports.AdminPage = class AdminPage {
    constructor(test,page) {
        this.test = test;
        this.page = page;
        this.adminButton = page.locator("//span[text()='Admin']");
        this.usernameInput = page.locator("(//input[@class='oxd-input oxd-input--active'])[2]");
        // this.userRoleDropdown = page.locator("(//div[text()='-- Select --'])[1]");
        this.searchButton = page.locator("//button[text()=' Search ']");
        this.empRole = page.locator("(//div[text()='Admin'])[2]");
        this.empName = page.locator("//div[text()='Monkey test Luffy']");
    }

    async searchEmployee(username) {
        await executeStep(this.test,this.adminButton,"click","Click on the admin option");
        await executeStep(this.test,this.usernameInput,"fill","Enter the username",[username]);
        await executeStep(this.test,this.searchButton,"click","Click on the search button");
    }
}

