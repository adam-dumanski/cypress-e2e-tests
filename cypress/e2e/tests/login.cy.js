import loginPage from '../../support/pages/LoginPage'

describe('Login Tests' , () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it('Powinien zalogować użytkownika z poprawnymi danymi', () => {
        loginPage.login('standard_user', 'secret_sauce')

        cy.url().should('contain' , 'inventory')
        cy.get('[data-test="title"]').should('have.text' , 'Products')
    })
    it('Blad przy podaniu zlego hasla', () => {
        loginPage.login('standard_user' , 'wrong_pass')
        
        loginPage.shouldShowError('Username and password do not match')
    })
    it('Blad przy pustych danych' , () => {
        loginPage.loginButton.click()

        loginPage.shouldShowError('Username is required')
    })

})