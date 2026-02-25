class ProductsPage {
    // selektory
    get title() {
        return cy.get('[data-test="title"]')
    }
    get productsList() {
        return cy.get('[data-test="inventory-list"]')
    }
    get firstProductAddButton() {
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    get cartBadge() {
        return cy.get('[data-test="shopping-cart-badge"]')
    }
    get cartLink() {
        return cy.get('data-test="shopping-cart-link"')
    }

    addFirstProductToCart() {
        this.firstProductAddButton.click()
    }
    goToCart() {
        this.cartLink.click()
    }
    getProductCount() {
        this.productsList.its('length')
    }
}

export default new ProductsPage();