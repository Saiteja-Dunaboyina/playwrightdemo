// const { test, expect } = require("@playwright/test");
require("dotenv").config();
const data = require("../data/data.json");
const { executeStep } = require("../utilities/action")
exports.CartPage = class CartPage {
  constructor(test,page) {
    this.test = test;
    this.page = page;
    this.computer = page.locator("(//a[text()='Computers '])[1]");
    this.desktop = page.locator("(//a[text()='Desktops '])[3]");
    this.addToCart = page.locator("(//button[text()='Add to cart'])[3]");
    this.close = page.locator("//span[@title='Close']");
    this.shoppingCart = page.locator("//span[text()='Shopping cart']");
    this.checkout = page.locator("//button[text()=' Checkout ']");
    this.closePopup = page.locator("//button[@title='Close']");
    this.removeFromCart = page.locator("//button[@class='remove-btn']");
    this.myAccount = page.locator("//a[@class='ico-account']");
  }

  async addToCartActon() {
    await executeStep(this.test,this.computer,"click","Click on computer text");
    await executeStep(this.test,this.desktop,"click","Click on the Desktop option");
    await this.page.waitForTimeout(parseInt(process.env.small_timeout));
    await executeStep(this.test,this.addToCart,"click","Click on add to cart button");
    await executeStep(this.test,this.close,"click","Close the message")
    await executeStep(this.test,this.shoppingCart,"click","Click on the shopping cart button");
    await executeStep(this.test,this.checkout,"click","Click on the checkout button");
    await this.page.waitForTimeout(parseInt(process.env.small_timeout));
    await executeStep(this.test,this.closePopup,"click","Close the popup");
    await executeStep(this.test,this.removeFromCart,"click","Remove from cart");
    await executeStep(this.test,this.myAccount,"click","Click on my account");
  }
};
