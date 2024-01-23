require("dotenv").config();
const { executeStep } = require("../utilities/action")
exports.NavBar = class NavBar {
    constructor(test,page) {
        this.test = test;
        this.page = page;
        this.navBar = (content) => page.locator(`(//a[text()='${content}'])[1]`);
    }
}