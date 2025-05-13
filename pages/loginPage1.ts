import { Page, Locator, expect } from "@playwright/test";
import * as data from "../utils/data.json";

export class LoginPage1 {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly logo: Locator;
  readonly loginInfoText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.getByTestId("username");
    this.passwordInput = page.getByTestId("password");
    this.loginButton = page.getByTestId("login-button");
    this.logo = page.getByTestId("logo");
    this.loginInfoText = page.getByText("LoginAccepted usernames are:");
  }

  async goto() {
    await this.page.goto("https://workshop-saucedemo.vercel.app/login"); // ปรับ URL ตามโปรเจกต์จริง
  }

  async clickUsername() {
    await this.usernameInput.click();
  }
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }
  async clickLogo() {
    await this.logo.click();
  }

  async clickPassword() {
    await this.passwordInput.click();
  }
  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async clickLoginAndHandleDialog() {
    this.page.once("dialog", (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await this.loginButton.click();
  }

  async clickLoginInfoText() {
    await this.loginInfoText.click();
  }

  steplogin() {
    this.goto();

    // คลิกช่อง username และกรอก
    this.fillUsername(data.validUser.username);
    this.clickPassword();

    // กด login ครั้งที่ 1 และ handle dialog
    this.clickLoginAndHandleDialog();

    // คลิกและกรอก password
    this.clickPassword();
    this.fillPassword(data.validUser.password);

    // กด login ครั้งที่ 2 และ handle dialog
    this.clickLoginAndHandleDialog();

    // คลิกข้อความด้านล่าง
    this.clickLoginInfoText();

    // ตรวจสอบว่าโลโก้ยังมองเห็นอยู่ (optional)
    expect(this.logo).toBeVisible();
  }
}
