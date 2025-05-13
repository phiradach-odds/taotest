import { test, expect } from "@playwright/test";
import { ProductPage, expectCartItemCount } from "../pages/ProductPage";
import { LoginPage1 } from "../pages/loginPage1";
import * as data from "../utils/data.json";

test.beforeEach(async ({ page }) => {
  await test.step("Login to application", async () => {
    const loginPage = new LoginPage1(page);
    loginPage.steplogin();
  });
});

test("User adds multiple products to cart", async ({ page }) => {
  const productPage = new ProductPage(page);

  await test.step("Add multiple products to cart", async () => {
    await productPage.addMultipleProducts([1, 2, 3]);
  });

  await test.step("Verify cart count is 3", async () => {
    await expectCartItemCount(page, 3);
  });
  await test.step("Remove cart count is 1", async () => {
    await productPage.addMultipleProducts([1]);
  });
  await test.step("Verify cart count is 2", async () => {
    await expectCartItemCount(page, 2);
});
});
