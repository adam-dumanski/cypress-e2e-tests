class CheckoutPage {
    // Step 1 - Formularz
    get firstNameInput() {
        return cy.get('[data-test="firstName"]')
    }
    get lastNameInput() {
        return cy.get('[data-test="lastName"]')
    }
    get postalCodeInput() {
        return cy.get('[data-test="postalCode"]')
    }
    get continueButton() {
        return cy.get('[data-test="continue"]')
    }
    get errorMessage() {
        return cy.get('[data-test="error"]')
    }
    fillCheckoutForm(firstName, lastName, postalCode) {
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.postalCodeInput.type(postalCode)
    }
    clickContinue() {
        this.continueButton.click()
    }

    // Step 2 - Podsumowanie
    get finishButton() {
        return cy.get('[data-test="finish"]')
    }
    get totalPrice() {
        return cy.get('[data-test="total-label"]')
    }
    clickFinish() {
        this.finishButton.click()
    }

    // Step 3 - Sukces
    get completeHeader(){
        return cy.get('[data-test="complete-header"]')
    }
    get completeMessage() {
        return cy.get('[data-test="complete-text"]')
    }

}

export default new CheckoutPage();