import loginPage from "../../support/pages/loginPage";
import productsPage from "../../support/pages/productsPage";
import cartPage from "../../support/pages/cartPage";

describe('Cart Test' , () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user' , 'secret_sauce')
        productsPage.addFirstProductToCart()
        productsPage.goToCart()
    })
    it('Test 1: "Powinien pokazać dodany produkt w koszyku"' , () => {
        cartPage.cartItems.should('have.length' , 1)
        cartPage.cartItemName.should('contain' , 'Sauce Labs Backpack')
    })
    it('Test 2: "Powinien usunąć produkt z koszyka"' , () => {
        cartPage.removeFirstItem();

        cartPage.cartItems.should('not.exist')
    })
    it('Test 3: "Powinien przejść do checkout"' , () => {
        cartPage.clickCheckout()
        
        cy.url().should('contain' , '/checkout-step-one')
    })
    it('Test 4: "Powinien wrócić do produktów"' , () => {
        cartPage.continueShopping()

        cy.url().should('contain' , '/inventory')
    })


})