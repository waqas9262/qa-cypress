import LoginPage from "./pages/LoginPage";
import InventoryPage from "./pages/InventoryPage";

describe("Cart", () => {
    const loginPage = new LoginPage();
    const inventoryPage = new InventoryPage(); // ✅ create object

  it("Adds an item to cart", () => {
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').should("be.visible");

    loginPage.enterUsername("standard_user");
    loginPage.enterPassword("secret_sauce");
    loginPage.clickLogin();

    cy.url().should("include", "/inventory");

    inventoryPage.addBackpack();
    inventoryPage.elements.cartBadge().should("have.text", "1");
  });
});