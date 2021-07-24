import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I open home page', () => {
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb').click() // jezeli po zaladowaniu strony nie pojawi sie pop-up coockies w celu potwierdzenia, to prosze usunac tą linie kodu
})

When('type {string} to search box and press enter', () => {
    cy.get('input[name="q"]').type('prowly{enter}')
    
})

And('Choose the category GRAPHICS', () => {
    cy.get('a').contains('Grafika').click()
})

Then('I should see {string} in the graphics results', () => {
	cy.contains('div', 'prowly').should('be.visible')
})


And('Choose the category VIDEO', () => {
	cy.get('a').contains('Wideo').click()
})

Then('I should see {string} in the video results', () => {
	cy.contains('#rcnt', 'prowly').should('be.visible')
})

And('Choose the category ALL', () => {
	cy.get('div').contains('Wszystko').click()
})

Then('I should see {string} in the all results', () => {
	cy.contains('div', 'prowly').should('be.visible')
})