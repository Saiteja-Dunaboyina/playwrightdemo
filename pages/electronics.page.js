const { test, expect } = require("@playwright/test");
require("dotenv").config();
exports.ElectronicsPage = class ElectronicsPage {
    constructor(page) {
        this.page = page;
        this.electronics = page.locator("(//a[text()='Electronics '])[1]")
        this.mobiles = page.locator("(//a[text()='Cell phones '])[3]");
    }

    async electronicsTab () {

        await test.step("Click on the electronics button",async () => {
            await this.electronics.click();
        })
        await test.step("click on the cell phones",async () => {
            await this.mobiles.click();
        })

    }
}