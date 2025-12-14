# QA-Cypress Automation Framework

A Cypress automation framework covering login, cart, and checkout flows on SauceDemo, built with Page Object Model (POM) and Mochawesome HTML reporting.

---

## Tech Stack
- Cypress
- JavaScript
- Mochawesome (HTML Reporting)
- Node.js

---

## Project Structure
QA-CYPRESS/
├─ cypress/
│  ├─ e2e/
│  │  ├─ pages/                 # Page Objects
│  │  ├─ cart.cy.js             # Test specs
│  │  ├─ checkout.cy.js
│  │  ├─ login_negative.cy.js
│  │  └─ login_positive.cy.js
│  ├─ fixtures/
│  │  └─ checkout.json          # Test data
│  ├─ reports/                  # Generated test reports
│  │  ├─ html/
│  │  ├─ mochawesome.json
│  │  ├─ mochawesome_001.json
│  │  ├─ mochawesome_002.json
│  │  ├─ mochawesome_003.json
│  │  └─ output.json
│  └─ support/
│     ├─ commands.js            # Custom Cypress commands
│     └─ e2e.js                 # Global hooks & config
├─ node_modules/                # Dependencies (generated)
├─ cypress.config.js            # Cypress configuration
├─ package.json                 # Project metadata & scripts
├─ package-lock.json            # Dependency lock file
├─ .gitignore                   # Git ignore rules
└─ README.md                    # Project documentation

---

## Test Coverage
- Login (positive and negative scenarios)
- Cart functionality (add items, cart count validation)
- Checkout flow using fixture-based data
- End-to-end user journey

## Test Data
- Externalized using Cypress fixtures (`checkout.json`)

## Reporting
- Mochawesome JSON and HTML reports
- Screenshots generated automatically on test failure

## Execution
Install dependencies:
```bash
npm install
npx cypress run
npx cypress open