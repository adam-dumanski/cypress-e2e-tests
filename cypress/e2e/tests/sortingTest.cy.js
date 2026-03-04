import loginPage from "../../support/pages/loginPage"
import productPage from "../../support/pages/productsPage"
describe('Sorting Tests' , () => {
    beforeEach(() => {
        loginPage.visit()
        loginPage.login('standard_user' , 'secret_sauce')
    })
    it('Test 1: "Powinien sortować A-Z (domyślnie)"' , () => {
        productPage.getProductNames().then(names => {
            expect(names[0]).to.equal('Sauce Labs Backpack')
        })
    })
    it('Test 2: "Powinien sortować Z-A"' , () => {
        productPage.sortBY('za')
        productPage.getProductNames().then(names => {
            expect(names[0]).to.equal('Test.allTheThings() T-Shirt (Red)')
        })
    })
    it('Test 3: "Powinien sortować cena Low-High"' , () => {
        productPage.sortBY('lohi')
        productPage.getProductNames().then(names => {
            expect(names[0]).to.equal('Sauce Labs Onesie')
        })
    })
    it('Sauce Labs Fleece Jacket' , () => {
        productPage.sortBY('hilo')
        productPage.getProductNames().then(names => {
            expect(names[0]).to.equal('Sauce Labs Fleece Jacket')
        })
    })
    it('Test 1a: "Powinien sortować A-Z (domyślnie)"' , () => {
        productPage.getProductNames().its(0).should('contain' , 'Sauce Labs Backpack')
    })
    it('Test 2a: "Powinien sortować Z-A"' , () => {
        productPage.sortBY('za')
        productPage.getProductNames().its(0).should('contain' , 'Test.allTheThings() T-Shirt (Red)')
    })
    it('Test 3: "Powinien sortować cena Low-High"' , () => {
        productPage.sortBY('lohi')
        productPage.getProductNames().its(0).should('contain' , 'Sauce Labs Onesie') 
    })
})