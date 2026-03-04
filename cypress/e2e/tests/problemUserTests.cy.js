import loginPage from "../../support/pages/loginPage"

describe('Problem User Tests' , () =>{
    beforeEach(() => {
        loginPage.visit()
    })
    it('Test 1: "Powinien zalogować problem_user"' , () => {
        loginPage.login('problem_user' , 'secret_sauce')
        cy.url().should('contain' , '/inventory')
    })
    it('Test 2: "Obrazki produktów powinny być błędne (known bug)"' , () => {
        loginPage.login('problem_user' , 'secret_sauce')
        cy.get('img.inventory_item_img').should('have.attr', 'src').and('contain' , 'sl-404.168b1cce10384b857a6f')
    })
})