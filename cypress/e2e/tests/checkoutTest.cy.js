import loginPage from "../../support/pages/loginPage"
import productsPage from "../../support/pages/productsPage"
import cartPage from "../../support/pages/cartPage"
import checkoutPage from "../../support/pages/checkoutPage"

describe('Checkout Tests' , () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user' , 'secret_sauce')
        productsPage.addFirstProductToCart()
        productsPage.goToCart()
        cartPage.clickCheckout()
    })
    it('Test 1: "Powinien pokazać błąd przy pustym formularzu"', () => {
        checkoutPage.clickContinue()
        checkoutPage.errorMessage.should('be.visible')
        checkoutPage.errorMessage.should('contain' , 'First Name is required')
    })
    it('Test 2: "Powinien przejść do podsumowania po wypełnieniu formularza"' , () => {
        checkoutPage.fillCheckoutForm('Jan' , 'Testowy' , '00-000')
        checkoutPage.clickContinue()
        cy.url().should('contain' , '/checkout-step-two')
    })
    it('Test 3: Powinien zakończyć zamówienie' , () => {
        checkoutPage.fillCheckoutForm('Jan' , 'Testowy' , '00-000')
        checkoutPage.clickContinue()
        checkoutPage.clickFinish()

        checkoutPage.completeHeader.should('be.visible')
        checkoutPage.completeHeader.should('contain' , 'Thank you for your order!')
    })
})