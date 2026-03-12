# 🧪 Sauce Demo - Automated Tests

Automated E2E tests for https://www.saucedemo.com using Cypress and Page Object Model.

# 🧪 Sauce Demo - Automated Tests

![Cypress Tests](https://github.com/adam-dumanski/cypress-e2e-tests/actions/workflows/cypress.yml/badge.svg)

## 🚀 Features

- ✅ Page Object Model architecture (4 page objects)
- ✅ **27 E2E test scenarios**
- ✅ Best practices (data-test selectors)
- ✅ Login, Products, Cart, Checkout, Sorting
- ✅ Multiple user types (standard, problem, locked_out)
- ✅ Bug detection tests

## 📦 Installation
```bash
npm install
```

## ▶️ Run Tests
```bash
# Open Cypress
npx cypress open

# Run headless
npx cypress run
```

## 📂 Project Structure
```
sauce-demo-tests/
├── cypress/
│   ├── e2e/tests/
│   │   ├── login.cy.js         (4 tests)
│   │   ├── products.cy.js      (4 tests)
│   │   ├── cart.cy.js          (6 tests)
│   │   ├── checkout.cy.js      (3 tests)
│   │   ├── sorting.cy.js       (7 tests)
│   │   ├── problem-user.cy.js  (2 tests)
│   │   └── e2e-full-flow.cy.js (1 test)
│   └── support/pages/
│       ├── LoginPage.js
│       ├── ProductsPage.js
│       ├── CartPage.js
│       └── CheckoutPage.js
```

## 🧪 Test Coverage

| Area | Tests | Description |
|------|-------|-------------|
| Login | 4 | Valid/invalid credentials, locked user |
| Products | 4 | Display, add to cart, remove |
| Cart | 6 | Add/remove items, multiple products |
| Checkout | 3 | Form validation, complete order |
| Sorting | 7 | A-Z, Z-A, Price Low-High, High-Low |
| Problem User | 2 | Bug detection |
| E2E Flow | 1 | Complete purchase journey |

**Total: 27 tests**

Adam Dumański

## 📝 License

MIT