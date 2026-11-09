import { test, expect } from '@playwright/test';

test('Successful `Sign in` flow test', async ({ page }) => {
  /*
  1. Open the Conduit login page https://conduit.mate.academy/user/login
  2. Enter the Email of existing user
  3. Enter the Password of existing user
  4. Click Sign in button
  5. Wait for the Home page URL https://conduit.mate.academy
  6. Click on 'Your Feed' tab
  */
});
test('Sign in user flow', async ({ page }) => {
  await page.goto('https://conduit.mate.academy/user/login');

  await page.getByPlaceholder('Email').fill('testertester@gmail.com');
  await page.getByPlaceholder('Password').fill('1234');

  await page.getByRole('button', { name: 'Sign in' }).click();

  await page.waitForURL('https://conduit.mate.academy/');
});