import loginPage from '../../support/pages/loginPage'

describe('Login Tests' , () => {
    beforeEach(() => {
        loginPage.visit()
    })

    it('Test 1: Powinien zalogować użytkownika z poprawnymi danymi', () => {
        loginPage.login('standard_user', 'secret_sauce')

        cy.url().should('contain' , 'inventory')
        cy.get('[data-test="title"]').should('have.text' , 'Products')
    })
    it('Test 2: Blad przy podaniu zlego hasla', () => {
        loginPage.login('standard_user' , 'wrong_pass')
        
        loginPage.shouldShowError('Username and password do not match')
    })
    it('Test 3: Blad przy pustych danych' , () => {
        loginPage.loginButton.click()

        loginPage.shouldShowError('Username is required')
    })
    it('Test 4: "Powinien pokazać błąd dla zablokowanego użytkownika"', () => {
        loginPage.login('locked_out_user' , 'secret_sauce')
        loginPage.shouldShowError('Sorry, this user has been locked out')
    })
})