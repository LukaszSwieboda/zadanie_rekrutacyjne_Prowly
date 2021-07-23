import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('I open home page', () => {
    cy.visit('https://www.google.com/')
    cy.get('#L2AGLb').click() // jezeli po zaladowaniu strony nie pojawi sie pop-up coockies w celu potwierdzenia, to prosze usunac tą linie kodu
})

When('type {string} to search box and press enter', () => {
    cy.get('input[name="q"]').type('prowly{enter}')
    
})

Then('I should see {string} in the graphics results', () => {
	cy.get('a').contains('Grafika').click()
	cy.contains('div', 'prowly').should('be.visible')
})