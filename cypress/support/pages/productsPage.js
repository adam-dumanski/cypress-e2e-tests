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
    get sortDropdown() {
        return cy.get('[data-test="product-sort-container"]')
    }


    // Akcje/metody
    addFirstProductToCart() {
        this.firstProductAddButton.click()
    }
    goToCart() {
        this.cartLink.click()
    }

    sortBY(option){
        // option: 'az', 'za', 'lohi', 'hilo'
        this.sortDropdown.select(option)
    }
    getProductNames() {
        return cy.get('[data-test="inventory-item-name"]')
        .then($elements => {
            return[... $elements].map(el => el.innerText)
        })
    }
    addProductToCart(productName){
        cy.contains('[data-test="inventory-item"]', productName)
        .find('button')
        .click()
    }

    //asercje
    checkCartBadge(value) {
        this.cartBadge.should('be.visible')
        this.cartBadge.should('contain' , value)
    }

}

export default new ProductsPage();