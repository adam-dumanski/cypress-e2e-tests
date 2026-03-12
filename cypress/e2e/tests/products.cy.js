import loginPage from "../../support/pages/loginPage";
import productsPage from "../../support/pages/productsPage"

describe('Products & Cart tests' , () => {

    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user' , 'secret_sauce')
        
    })
    

    it('Test 1: "Powinien wyświetlić 6 produktów"' , () => {
        productsPage.productsList.should('have.length' , 6)
    })
    it('Test 2: "Powinien dodać produkt do koszyka"' , () => {
        productsPage.addFirstProductToCart()

        productsPage.checkCartBadge(1)
    })
    it('Test 3: "Powinien przejść do koszyka"' , () => {
        productsPage.addFirstProductToCart()
        productsPage.goToCart()
        
        cy.url().should('contain' , '/cart')
    })
    it('Test 4: "Powinien usunąć produkt z poziomu strony produktów"', () => {
        productsPage.addFirstProductToCart()
        productsPage.checkCartBadge(1)
        productsPage.removeFirstProductFromProductsPage()
        productsPage.cartBadge.should('not.exist')

    })

})