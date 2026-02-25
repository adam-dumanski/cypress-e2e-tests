import LoginPage from "../../support/pages/LoginPage";
import ProductsPage from "../../support/pages/ProductsPage"

describe('Products & Cart tests' , () => {

    beforeEach(() => {
        LoginPage.visit()
        LoginPage.login('standard_user' , 'secret_sauce')
    })
    


    it('Test 1: "Powinien wyświetlić 6 produktów"' , () => {
        ProductsPage.getProductCount.should('have.length' , 6)

    })

})