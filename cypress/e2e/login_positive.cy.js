import LoginPage from './pages/LoginPage';
describe("Login - Positive", () => {
  const loginPage = new LoginPage();

  it("logs in with valid credentials", () => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').should('be.visible');

    loginPage.enterUsername('standard_user');
    loginPage.enterPassword('secret_sauce');
    loginPage.clickLogin();
    
    cy.url().should('include', '/inventory');
  });
});