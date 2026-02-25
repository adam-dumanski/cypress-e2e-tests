class ProductsPage {
    // selektory
    get title() {
        return cy.get('[data-test="title"]')
    }
    get productsList() {
        return cy.get('[data-test="inventory-item"]')
    }
    get firstProductAddButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    get cartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]')
    }
    get cartLink() {
        return cy.get('[data-test="shopping-cart-link"]')
    }
    // Akcje/metody
    addFirstProductToCart() {
        this.firstProductAddButton.click()
    }
    goToCart() {
        this.cartLink.click()
    }
    getProductCount() {
        this.productsList.its('length')
    }

    //asercje
    checkCartBadge(value) {
        this.cartBadge.should('be.visible')
        this.cartBadge.should('contain' , value)
    }

}

export default new ProductsPage();