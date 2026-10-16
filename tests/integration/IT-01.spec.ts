
import { test, expect } from '@playwright/test';

test('IT-01: top-down REAL Login -> browser-level Inventory STUB', {
  annotation: {
    type: 'description',
    description: 'ทดสอบ Login จริงร่วมกับ Inventory Stub ที่จำลองด้วย page.setContent()'
  }
}, async ({ page }) => {
  await test.step('Login ผ่านหน้าเว็บไซต์จริง', async () => {
    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(
      page.getByText('Products', { exact: true })
    ).toBeVisible();
  });

  await test.step('สร้าง Inventory Stub', async () => {
    await page.setContent(`
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>Mock Inventory</title>
        </head>
        <body>
          <main>
            <h1>Mock Inventory Ready</h1>
            <ul data-test="mock-inventory-list">
              <li class="mock-inventory-item">Mock Backpack</li>
              <li class="mock-inventory-item">Mock Bike Light</li>
            </ul>
          </main>
        </body>
      </html>
    `);
  });

  await test.step('ตรวจสอบผลจาก Stub', async () => {
    await expect(
      page.getByRole('heading', { name: 'Mock Inventory Ready' })
    ).toBeVisible();

    const items = page.locator('.mock-inventory-item');

    await expect(items).toHaveCount(2);
    await expect(items.nth(0)).toHaveText('Mock Backpack');
    await expect(items.nth(1)).toHaveText('Mock Bike Light');
  });
});
