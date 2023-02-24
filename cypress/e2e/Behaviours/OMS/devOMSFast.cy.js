/// <reference types="Cypress"/>

import omsElements from "../../PageObject/omsPO"


describe ('DEV - Validate the FRONT of CartConfigurator with some TestCases to ensure the functionality ', () => {
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('CartConfigurator for MX', () => {
            beforeEach(function(){
                cy.viewport(device)
                cy.fixture('cartConfiguratorData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxCartConfiguratorDev)
                })//End Fixture
            })// End BeforeEach
            it('001 - CartConfigurator Login', () => {
                const poOms = new omsElements()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                    cy.loginIntoCartConfigurator()
                    poOms.getMainContainer().should('contain.text', this.data.titleUno)
                    poOms.getGloblalSearch().should('be.visible')
                    poOms.getSearchButton().should('be.disabled')
                })
            })// End of 001 - CartConfigurator Login
            it('002 - Search an user', () => {
                const poOms = new omsElements()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                    poOms.getEmail().should('be.visible').type(this.data.userMailDev)
                    poOms.getPassword().should('be.visible').type(this.data.userPassDev)
                    poOms.getLogin().should('be.enabled').click()
                    cy.wait(1500)
                    poOms.getMainContainer().should('contain.text', this.data.titleUno)
                    poOms.getGloblalSearch().should('be.visible').type(this.data.testUserMx)
                    poOms.getSearchButton().click()
                    cy.wait(800)
                    poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                    poOms.getResult().should('be.visible')
                })
            })// End of 002 - Search an user
            it('003 - Search an user and go inside', () => {
                const poOms = new omsElements()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                    poOms.getEmail().should('be.visible').type(this.data.userMailDev)
                    poOms.getPassword().should('be.visible').type(this.data.userPassDev)
                    poOms.getLogin().should('be.enabled').click()
                    cy.wait(1500)
                    poOms.getMainContainer().should('contain.text', this.data.titleUno)
                    poOms.getGloblalSearch().should('be.visible').type(this.data.testUserMx)
                    poOms.getSearchButton().click()
                    cy.wait(800)
                    poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                    poOms.getResult().should('be.visible')
                    poOms.getButtonResult().click()
                    cy.wait(750)
                    poOms.getMainUserContainer().should('be.visible')
                })
            })// End of 003 - Search an user and go inside
            it('004 - Cart- Cita', () => {
                const poOms = new omsElements()
                cy.fixture('cartConfiguratorData').then(function(data){
                    cy.loginIntoCartConfigurator()
                    poOms.getMainContainer().should('contain.text', this.data.titleUno)
                    poOms.getGloblalSearch().should('be.visible').type(this.data.testAppointment)
                    poOms.getSearchButton().click()
                    cy.wait(1500)
                    poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                    poOms.getResult().should('be.visible')
                    cy.wait(1750)
                    poOms.getButtonResult().click()
                    cy.wait(750)
                    poOms.getMainUserContainer().should('be.visible')
                    poOms.getButtonCreateCart().should('be.visible').click()
                    cy.wait(5500)
                    cy.cartAppointment()
                    cy.wait(1320)
                    cy.createPaymentLink()
                    cy.deleteCart()
                })
            })// End of 004 - Cart- Appointment
        })// End Context
    })// End devices
})//End Describe