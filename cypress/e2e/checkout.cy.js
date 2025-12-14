import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";

describe("Checkout Flow", () => {
  const loginPage = new LoginPage();
  it("completes checkout with fixture data", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').should("be.visible");

    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();

    cy.url().should("include", "/inventory");
    const inventoryPage = new InventoryPage();
    inventoryPage.addBackpack();

    cy.get('[data-test="shopping-cart-link"]').click();
    cy.url().should("include", "/cart");

    cy.get('[data-test="checkout"]').click();
    cy.fixture("checkout").then((user) => {
      cy.get('[data-test="firstName"]').type(user.firstName);
      cy.get('[data-test="lastName"]').type(user.lastName);
      cy.get('[data-test="postalCode"]').type(user.postalCode);
    });
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('[data-test="complete-header"]').should(
      "have.text",
      "Thank you for your order!"
    );

    cy.get('[data-test="back-to-products"]').click();
    cy.url().should("include", "/inventory");
  });
});
