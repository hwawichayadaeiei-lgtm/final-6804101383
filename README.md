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

```bash
npm install
npx playwright install chromium
```

## Run All Tests

```bash
npx playwright test
```

## Run Individual Tests

```bash
npx playwright test tests/unit/UT-01.spec.ts
npx playwright test tests/unit/UT-02.spec.ts
npx playwright test tests/integration/IT-01.spec.ts
npx playwright test tests/integration/IT-02.spec.ts
npx playwright test tests/system/ST-01.spec.ts
npx playwright test tests/system/ST-02.spec.ts
```

## Test Suites

### Unit Testing

- UT-01: Login Form Validation — validates empty fields, missing password, and invalid login details.
- UT-02: Product Button State Validation — validates Add to cart and Remove button states.

### Integration Testing

- IT-01: Top-Down with Stub — tests a real login and a simulated Inventory page.
- IT-02: Bottom-Up with Driver — prepares login state and tests Inventory and Shopping Cart behavior.

### System Testing

- ST-01: Complete Purchase Flow — tests the end-to-end purchase process.
- ST-02: Checkout Validation and Recovery — tests checkout validation and recovery from invalid input.

## Test Reports

- HTML report: `playwright-report/index.html`
- JSON results: `reports/results.json`
- Test summary: `reports/test-summary.md`

Generate the reports by running:

```bash
npx playwright test
```

Check the actual test output and generated reports for the latest Passed, Failed, and Skipped counts before submission.

