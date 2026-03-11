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
    it('Test 5: "Powinien dodać 3 produkty do koszyka"' , () => {
        cartPage.removeButton.click()
        cartPage.continueShopping()
        productsPage.addProductToCart('Sauce Labs Backpack')
        productsPage.addProductToCart('Sauce Labs Bike Light')
        productsPage.addProductToCart('Sauce Labs Bolt T-Shirt')

        //cy.get('[data-test="shopping-cart-badge"]').should('contain' , '3')
        productsPage.cartBadge.should('contain' , '3')
        productsPage.goToCart()
        cartPage.cartItems.should('have.length' , 3)
        })
    it('Test 6: "Powinien dodać wszystkie 6 produktów"' , () => {
        cartPage.removeButton.click()
        cartPage.continueShopping()

        const products = [        
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)'
        ]
        for (let i = 0 ; i < products.length; i++){
            productsPage.addProductToCart(products[i])
        }
        //cy.get('[data-test="shopping-cart-badge"]').should('contain' , 6)
        productsPage.cartBadge.should('contain' , '6')
        productsPage.goToCart()
        cartPage.cartItems.should('have.length' , 6)
    })
})