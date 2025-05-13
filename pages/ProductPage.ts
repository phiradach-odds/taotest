import { Page, Locator, expect } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async addProductToCart(productId: number) {
    const product = this.page.getByTestId(`product-${productId}`);
    expect(product).toBeVisible();
    const addButton = product.getByTestId("add-cart-button");
    expect(addButton).toBeVisible();
    await addButton.click();
  }

  async addMultipleProducts(productIds: number[]) {
    for (const id of productIds) {
      await this.addProductToCart(id);
    }
  }
  }
  export async function expectCartItemCount(page: Page, expectedCount: number) {
    const cartCount = page.getByTestId('count-cart');
    await expect(cartCount).toBeVisible(); // ตรวจว่า element ปรากฏ
    await expect(cartCount).toHaveText(String(expectedCount)); // เทียบจำนวน
  }

