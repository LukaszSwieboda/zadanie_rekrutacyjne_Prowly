import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'

Given('I open home page', () => {
	cy.visit('https://www.google.com/')
	cy.get('#L2AGLb').click() // jezeli po zaladowaniu strony nie pojawi sie pop-up coockies w celu potwierdzenia, to prosze usunac tą linie kodu
})

When('type "prowly before:2018" to search box and press enter', () => {
    cy.get('input[name="q"]').type('prowly before:2018{enter}')
})

Then('I should see info before 2018 about "prowly" in the results', () => {
	cy.contains('div', 'prowly').should('be.visible')
})

When('type "prowly after:2018" to search box and press enter', () => {
	cy.get('input[name="q"]').type('prowly after:2018{enter}')
})

Then('I should see info after 2018 about "prowly" in the results', () => {
	cy.contains('div', 'prowly').should('be.visible')
})

When('click Tools button', () => {
	cy.get('#hdtb-tls').click()
})

When('type {string} to search box and press enter', () => {
	cy.get('input[name="q"]').type('prowly{enter}')
})

When('click Whenever drop box', () => {
	cy.get('div').contains('Kiedykolwiek').click()
})

When('choose date range', () => {
	cy.get('div').contains('Zakres dat...').click()
})

And('fill in from 2015 to 2017', () => {
    cy.get('#OouJcb').type('2015')
    cy.get('#rzG2be').type('2017')
    cy.contains('OK').should('have.class', 'Ru1Ao BwGU8e fE5Rge').click()
})

Then('I should see info between 2015-2017 about "prowly" in the results', () => {
	cy.contains('div', 'prowly').should('be.visible')
})

