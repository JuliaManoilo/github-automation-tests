> This project was created as part of QA Automation practice.

# GitHub Automation Tests

This project contains automated end-to-end tests for the GitHub website using WebdriverIO.

## 🔧 Tech Stack
- WebdriverIO
- JavaScript (ES6)
- Page Object Model (POM)

## 📁 Project Structure
test/
  pageobjects/   # Page Object files
  specs/         # Test files
docs/
  screenshots/   # Test execution screenshots

  ## ✅ Test Coverage

The following test scenarios are automated:

1. **Sign Up Flow**
   - Open GitHub homepage
   - Click "Sign up"
   - Verify registration page elements
   - Fill registration form

2. **Homepage Banner**
   - Scroll to banner section
   - Verify text: "Millions of developers and businesses call GitHub home"
   - Verify "Try GitHub Copilot" button

3. **Newsletter Subscription**
   - Scroll to footer
   - Click "Subscribe"
   - Fill email and country
   - Submit form
   - Verify success message

4. **Search Functionality**
   - Open search input
   - Enter query "act"
   - Click "Search all of GitHub"
   - Verify search results contain the query

5. **Pricing Page**
   - Open "Pricing" page
   - Verify header
   - Click "Compare all features"
   - Verify section navigation

## 📸 Screenshots

Test execution screenshots are stored in:
docs/screenshots/

## 🚀 How to Run Tests

Install dependencies:
npm instal


Run all tests:
npm run test


Run specific test:
npx wdio run wdio.conf.js --spec ./test/specs/github.signup.e2e.js


## 📌 Notes
- Tests are written using Page Object Model for better maintainability.
- Selectors are based on stable attributes where possible.