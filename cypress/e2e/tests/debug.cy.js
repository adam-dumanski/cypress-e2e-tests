it('DEBUG' , () => {
    cy.visit('https://www.saucedemo.com')

    cy.get('input').then($inputs => {
        $inputs.each((index, input) => {
            console.log(`Input ${index}:` , input)
        })
    })
    cy.get('[data-test]').then($elements => {
        $elements.each((index, el) => {
            const dataTest = el.getAttribute('data-test')
            console.log(`Element ${index}: data-test="${dataTest}"`)
        })
    })
})