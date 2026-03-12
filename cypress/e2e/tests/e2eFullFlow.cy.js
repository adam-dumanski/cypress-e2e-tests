import loginPage from '../../support/pages/loginPage'
import productsPage from '../../support/pages/productsPage'
import cartPage from '../../support/pages/cartPage'
import checkoutPage from '../../support/pages/checkoutPage'

describe('Full E2E test' , () => {
    it('Test 1: "Pełny flow zakupów z 2 produktami"' , () => {
        loginPage.visit()
        loginPage.login('standard_user' , 'secret_sauce')

        productsPage.addFirstProductToCart()
        productsPage.addProductToCart('Sauce Labs Bike Light')

        productsPage.goToCart()
        cartPage.cartItems.should('have.length' , 2)

        cartPage.clickCheckout()

        checkoutPage.fillCheckoutForm('Jan' , 'Brzechwa' , '00-001')
        checkoutPage.clickContinue()
        cy.url().should('contain' , 'checkout-step-two')

        checkoutPage.clickFinish()
        checkoutPage.completeHeader.should('have.text' , 'Thank you for your order!')
        checkoutPage.completeMessage.should('contain' , 'Your order has been dispatched')


    })
})