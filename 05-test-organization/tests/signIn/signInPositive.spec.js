import { test, expect } from '@playwright/test';

test('Successful `Sign in` flow test', async ({ page }) => {
  const email = 'tester@tester.com'; // TODO add email
  const password = '12345'; // TODO add password
  await page.goto('https://conduit.mate.academy/user/login');
  await page.getByPlaceholder('Email').fill(email);
  await page.getByPlaceholder('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Your Feed')).toBeVisible();
});
