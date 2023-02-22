/// <reference types="Cypress"/>

import cartConfigurator from "../../PageObject/cartConfigurator"


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
            it.only('001 - CartConfigurator Login', () => {
                const poCartConfigurator = new cartConfigurator()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                    cy.loginIntoCartConfigurator()
                    poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                    poCartConfigurator.getGloblalSearch().should('be.visible')
                    poCartConfigurator.getSearchButton().should('be.disabled')
                })
            })// End of 001 - CartConfigurator Login
            it('002 - Search an user', () => {
                const poCartConfigurator = new cartConfigurator()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                poCartConfigurator.getEmail().should('be.visible').type(this.data.userMailDev)
                poCartConfigurator.getPassword().should('be.visible').type(this.data.userPassDev)
                poCartConfigurator.getLogin().should('be.enabled').click()
                cy.wait(1500)
                poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.testUserMx)
                poCartConfigurator.getSearchButton().click()
                cy.wait(800)
                poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                poCartConfigurator.getResult().should('be.visible')
                
                })
            })// End of 002 - Search an user
            it('003 - Search an user and go inside', () => {
                const poCartConfigurator = new cartConfigurator()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                poCartConfigurator.getEmail().should('be.visible').type(this.data.userMailDev)
                poCartConfigurator.getPassword().should('be.visible').type(this.data.userPassDev)
                poCartConfigurator.getLogin().should('be.enabled').click()
                cy.wait(1500)
                poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.testUserMx)
                poCartConfigurator.getSearchButton().click()
                cy.wait(800)
                poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                poCartConfigurator.getResult().should('be.visible')
                poCartConfigurator.getButtonResult().click()
                cy.wait(750)
                poCartConfigurator.getMainUserContainer().should('be.visible')
                
                })
            })// End of 003 - Search an user and go inside
            it('004 - Cart- Cita', () => {
                const poCartConfigurator = new cartConfigurator()
                cy.fixture('cartConfiguratorData').then(function(data){
                    cy.loginIntoCartConfigurator()
                    poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                    poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.testAppointment)
                    poCartConfigurator.getSearchButton().click()
                    cy.wait(1500)
                    poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                    poCartConfigurator.getResult().should('be.visible')
                    cy.wait(1750)
                    poCartConfigurator.getButtonResult().click()
                    cy.wait(750)
                    poCartConfigurator.getMainUserContainer().should('be.visible')
                    poCartConfigurator.getButtonCreateCart().should('be.visible').click()
                    cy.wait(5500)
                    cy.cartAppointment()
                    cy.wait(1320)
                    cy.createPaymentLink()
                })
            })// End of 004 - Cart- Appointment
            it.skip('004 - Cart- Alineadores Apartado 2,000', () => {
                const poCartConfigurator = new cartConfigurator()
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserMx()
                cy.wait(750)
                cy.createNewCart()
                cy.wait(5500)
                cy.alineadoresA_1()
                cy.wait(1321)
                cy.createPaymentLink()
            })// End of 004 - Cart- Alineadores Apartado 2,000
            it.skip('005 - Cart- Alineadores Apartado 5,000', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserMx()
                cy.wait(750)
                cy.createNewCart()
                cy.wait(5500)
                cy.alineadoresA_2()
                cy.wait(1321)
                cy.createPaymentLink()
            })// End of 005 - Cart- Alineadores Apartado 5,000
            it.skip('006 - Cart- Pago Complementario Apartado 2,000', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserMx()
                cy.wait(750)
                cy.createNewCart()
                cy.wait(5500)
                cy.alineadoresPC_1()
                cy.wait(1321)
                cy.createPaymentLink()
            })// End of 006 - Cart- Pago Complementario Apartado 2,000
        })// End Context
    })// End devices
})//End Describe