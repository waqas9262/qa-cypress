class LoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginInput: () => cy.get('[data-test="login-button"]'),
        errorMessage: () => cy.get('[data-test="error"]'),
    };

    enterUsername(username) {
        this.elements.usernameInput().type(username);
    }

    enterPassword(password) {
        this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginInput().click();
    }
}

export default LoginPage;