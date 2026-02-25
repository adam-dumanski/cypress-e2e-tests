class CartPage {
    //selektory
    get cartItems() {
        return cy.get('[data-test="inventory-item"]')
    }
    get checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }
    get continueShoppingButton() {
        return cy.get('[data-test="continue-shopping"]')
    }
    get removeButton() {
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }
    get cartItemName() {
        return cy.get('[data-test="inventory-item-name"]')
    }
    //metody
    removeFirstItem() {
        this.removeButton.click()
    }
    clickCheckout() {
        this.checkoutButton.click()
    }
    continueShopping() {
        this.continueShoppingButton.click()
    }
    //asercje
    shouldHaveItemCount(count){
        this.cartItemName.should('be.visible')
        this.cartItemName.should('have.length' , count)
    }
    shouldContainProduct(name) {
        this.cartItemName.should('be.visible')
        this.cartItemName.should('contain' , name)
    }
}

export default new CartPage();