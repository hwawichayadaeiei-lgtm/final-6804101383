# Playwright Final Exam — 6804101383

## Project Overview
Automated testing project for SauceDemo using Playwright and TypeScript.

- Test URL: https://www.saucedemo.com/
- Browser: Chromium

## Requirements
- Node.js
- npm
- Playwright Test

## Installation
Install dependencies and Chromium:

    npm install
    npx playwright install chromium

## Run All Tests

    npx playwright test

## Run Individual Tests

    npx playwright test tests/unit/UT-01.spec.ts
    npx playwright test tests/unit/UT-02.spec.ts
    npx playwright test tests/integration/IT-01.spec.ts
    npx playwright test tests/integration/IT-02.spec.ts
    npx playwright test tests/system/ST-01.spec.ts
    npx playwright test tests/system/ST-02.spec.ts

## Test Suites

### Unit Testing
- UT-01: Login Form Validation — validates empty fields, missing password, and invalid login details.
- UT-02: Product Button State Validation — validates Add to cart and Remove button states.

### Integration Testing
- IT-01: Top-D- IT-01: Top-D- IT-01:orms a real login and tests a simulated Inventory page created using `page.setContent()`.
- IT-02: Bottom-Up with Driver — prepares a - IT-02: Bottom-Up with Driver — pram- IT-02: Bottotests I- entory and Shopping Cart behav- I.

Note: IT-01 uses a browser-leNote: IT-01 uses a browser-leNoaluated against SauceDemo's actual behavior to confirm whether the cookie esNote: IT-01 uses a brin state.

### System Testing
- ST-01: Complete Purchase Flow — tests login,- ST-01: Complete Purchase Flow — tests logand - ST-01: Complete Purchase Flow — tests login,- ST-0ov- ST-01: Complete Purchase Flow — tests login,-mpletes- ST-01: Complete Purchase Flow — tests # Test Reports
- HTML report: `playwright-report/index.html`
- JSON results: `reports/results.json`
- Test summary: `reports/test-summary.md`

Generate reports by running:

    npx playwright test


   npx playwright test
ing:
-summary.md`
ml`
n,- ST-01: Complete Purchase Flow — terecorded run passed 8 tests with 0 failures and 0 skipped tests. Run the tests again before submission to verify the current result.
