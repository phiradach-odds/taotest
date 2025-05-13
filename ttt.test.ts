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
