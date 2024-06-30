const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('http://localhost:8080');
    const list = await page.$('h1');
    expect(list).toBeTruthy();
  });
  