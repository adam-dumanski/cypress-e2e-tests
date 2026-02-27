# 🧪 Sauce Demo - Automated Tests

Automated E2E tests for https://www.saucedemo.com using Cypress and Page Object Model.

## 🚀 Features

- ✅ Page Object Model architecture
- ✅ 13 E2E test scenarios
- ✅ Best practices (data-test selectors)
- ✅ Login, Products, Cart, Checkout flows

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
│   ├── e2e/
│   │   └── tests/
│   │       ├── login.cy.js        (3 tests)
│   │       ├── products.cy.js     (3 tests)
│   │       ├── cart.cy.js         (4 tests)
│   │       └── checkout.cy.js     (3 tests)
│   └── support/
│       └── pages/
│           ├── LoginPage.js
│           ├── ProductsPage.js
│           ├── CartPage.js
│           └── CheckoutPage.js
```

## 🧪 Test Scenarios

### Login Tests
- ✅ Successful login
- ✅ Invalid password error
- ✅ Empty fields error

### Products Tests
- ✅ Display 6 products
- ✅ Add product to cart
- ✅ Navigate to cart

### Cart Tests
- ✅ Show added product
- ✅ Remove product from cart
- ✅ Proceed to checkout
- ✅ Continue shopping

### Checkout Tests
- ✅ Empty form validation
- ✅ Fill form and proceed
- ✅ Complete order (E2E flow)

## 🛠️ Tech Stack

- **Cypress** - E2E testing framework
- **JavaScript** - Programming language
- **Page Object Model** - Design pattern

## 👤 Author

Adam Dumański

## 📝 License

MIT