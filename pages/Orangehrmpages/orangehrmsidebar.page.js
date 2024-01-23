const { executeStep } = require("../../utilities/action");

exports.SideBar = class SideBar {
    constructor(test,page) {
        this.test = test;
        this.page = page;
        this.element = (option) => page.locator(`//span[text()='${option}']`)
    }
}