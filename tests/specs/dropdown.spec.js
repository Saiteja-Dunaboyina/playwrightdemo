const { test, expect } = require('@playwright/test');

test("Get the values from the dropdown" , async ({ page }) => {
    await page.goto("https://demo.nopcommerce.com/");
    await page.locator("//a[text()='Register']").click();
    await page.locator("//select[@name='DateOfBirthDay']").click();
    const values =  await page.$$("//select[@name='DateOfBirthDay']/option");
    var arrayValues = [];
    for (const option of values) {
        const value = await option.evaluate(option => option.value);
        arrayValues.push(value);
    }
    console.log(arrayValues);
})