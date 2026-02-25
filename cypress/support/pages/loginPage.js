class LoginPage {
    // Selektory
    get usernameInput() {
        return cy.get('[data-test="username"]')
    }
    get passwordInput() {
        return cy.get('[data-test="password"]')
    }

    get loginButton() {
        return cy.get('[data-test="login-button"]')
    }

    get errorMessage() {
        return cy.get('[data-test="error"]')
    }

    // Akcje
    visit() {
        cy.visit('https://www.saucedemo.com')
    }
    login(username, password) {
        this.usernameInput.type(username)
        this.passwordInput.type(password)
        this.loginButton.click()
    }

    // Asercje
    shouldShowError(message) {
        this.errorMessage.should('be.visible')
        this.errorMessage.should('contain' , message)
    }
}

export default new LoginPage()