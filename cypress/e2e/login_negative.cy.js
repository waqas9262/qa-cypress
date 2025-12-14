import LoginPage from './pages/LoginPage';

describe('Login - Negative', () => {
      const loginPage = new LoginPage();

    it('shows error for invalid credentials', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').should('be.visible')

        loginPage.enterUsername('wrong_user')
        loginPage.enterPassword('wrong_password')
        loginPage.clickLogin()

        cy.get('[data-test="error"]').should('be.visible').contains('Epic sadface')
    })
})
