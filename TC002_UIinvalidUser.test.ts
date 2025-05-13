import { test, expect } from '@playwright/test';
import { LoginPage1 } from '../pages/loginPage1'; // ปรับ path ให้ตรงกับโครงสร้างของคุณ
import * as data from "../utils/data.json";

test('invalidUser', async ({ page }) => {
  const loginPage = new LoginPage1(page);
  // เข้าหน้า login
  await loginPage.goto();

  // คลิกช่อง username และกรอก
  await loginPage.fillUsername(data.invalidUser.username);

  // คลิกโลโก้
  await loginPage.clickLogo();

  // คลิกช่อง password
  await loginPage.clickPassword();

  // กด login ครั้งที่ 1 และ handle dialog
  await loginPage.clickLoginAndHandleDialog();

  // คลิกและกรอก password
  await loginPage.clickPassword();
  await loginPage.fillPassword(data.invalidUser.password);
  // กด login ครั้งที่ 2 และ handle dialog
  await loginPage.clickLoginAndHandleDialog();

  // คลิกข้อความด้านล่าง
  await loginPage.clickLoginInfoText();

  // ตรวจสอบว่าโลโก้ยังมองเห็นอยู่ (optional)
  await expect(loginPage.logo).toBeVisible();
});