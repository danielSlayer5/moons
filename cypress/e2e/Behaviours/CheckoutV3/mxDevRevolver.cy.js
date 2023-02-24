/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPO"
import appointmentElements from "../../PageObject/appointmentPO"
import checkoutElements from "../../PageObject/checkoutV3PO"
import newThankYouPage from "../../PageObject/newThankYouPagePO"


describe ('SuitCase: MX - DEV - REVOLVER CheckoutV3', () => {
    const faker = require("faker")
    const devices = ["macbook-15"]
    const totalMercado=1
    const totalStripe=2
    const totalConekta=1

    devices.forEach((device) => {
        context ('Execution of '+ (totalMercado+totalStripe+totalConekta)+ ' test cases paying with the REVOLVER', () => {
            beforeEach(function(){
                cy.viewport(device)
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxQuizDev)
                })
            })    
            for(let i=0; i<totalMercado; i++){
                it('DEAL: ' + (i+1) + ' of: '+ totalMercado + ' for MERCADO PAGO', () => {
                        const fakeFirstName = faker.name.firstName()
                        const fakeLastName = faker.name.lastName()
                        const poQuiz = new quizElements()
                        const poAppointment = new appointmentElements()
                        const poCheckoutV3 = new checkoutElements()
                        const poThankYouPage = new newThankYouPage()
            
                        cy.fixture('quizData').then(function(data){
                            this.data=data
                            poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                            cy.get(this.data.Img1).click()
                            poQuiz.getCampoNombre().type(fakeFirstName)
                            cy.log(fakeFirstName)
                            poQuiz.getCampoApellido().type(fakeLastName)
                            cy.log(fakeLastName)
                            cy.addFakeMailMx()
                            cy.addCorrectNumber()
                            poQuiz.getCheckboxWa().check()
                            poQuiz.getFinalizarQuizButton().click()
                            poAppointment.getAppointmentModal().should('be.visible')
                            poAppointment.getAppointmentButton().click()
                            poAppointment.getCenterSatelite().click()
                            poAppointment.getCenterHour().click()
                            poAppointment.getPagarCita().click()
                            cy.addCorrectCard()
                            poCheckoutV3.getButtonPagar().click()
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                // returning false here prevents Cypress from
                                // failing the test
                                return false
                            })
                            poThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                        })//End fixture
                })// End of MERCADO PAGO
            }
            for(let i=0; i<totalStripe; i++){
                it('DEAL: ' + (i+1) + ' of: '+ totalStripe + ' for STRIPE', () => {
                        const fakeFirstName = faker.name.firstName()
                        const fakeLastName = faker.name.lastName()
                        const poQuiz = new quizElements()
                        const poAppointment = new appointmentElements()
                        const poCheckoutV3 = new checkoutElements()
                        const poThankYouPage = new newThankYouPage()
            
                        cy.fixture('quizData').then(function(data){
                            this.data=data
                            poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                            cy.get(this.data.Img1).click()
                            poQuiz.getCampoNombre().type(fakeFirstName)
                            cy.log(fakeFirstName)
                            poQuiz.getCampoApellido().type(fakeLastName)
                            cy.log(fakeLastName)
                            cy.addFakeMailMx()
                            cy.addCorrectNumber()
                            poQuiz.getCheckboxWa().check()
                            poQuiz.getFinalizarQuizButton().click()
                            poAppointment.getAppointmentModal().should('be.visible')
                            poAppointment.getAppointmentButton().click()
                            poAppointment.getCenterSatelite().click()
                            poAppointment.getCenterHour().click()
                            poAppointment.getPagarCita().click()
                            cy.addCorrectCardStripe()
                            poCheckoutV3.getButtonPagar().click()
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                // returning false here prevents Cypress from
                                // failing the test
                                return false
                            })
                            poThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                        })//End fixture
                })// End of STRIPE
            }
            for(let i=0; i<totalConekta; i++){
                it('DEAL: ' + (i+1) + ' of: '+ totalConekta + ' for CONEKTA', () => {
                        const fakeFirstName = faker.name.firstName()
                        const fakeLastName = faker.name.lastName()
                        const poQuiz = new quizElements()
                        const poAppointment = new appointmentElements()
                        const poCheckoutV3 = new checkoutElements()
                        const poThankYouPage = new newThankYouPage()
            
                        cy.fixture('quizData').then(function(data){
                            this.data=data
                            poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                            cy.get(this.data.Img1).click()
                            poQuiz.getCampoNombre().type(fakeFirstName)
                            cy.log(fakeFirstName)
                            poQuiz.getCampoApellido().type(fakeLastName)
                            cy.log(fakeLastName)
                            cy.addFakeMailMx()
                            cy.addCorrectNumber()
                            poQuiz.getCheckboxWa().check()
                            poQuiz.getFinalizarQuizButton().click()
                            poAppointment.getAppointmentModal().should('be.visible')
                            poAppointment.getAppointmentButton().click()
                            poAppointment.getCenterSatelite().click()
                            poAppointment.getCenterHour().click()
                            poAppointment.getPagarCita().click()
                            cy.addCorrectCardConekta()
                            poCheckoutV3.getButtonPagar().click()
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                // returning false here prevents Cypress from
                                // failing the test
                                return false
                            })
                            poThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                        })//End fixture
                })// End of CONEKTA
            }
        })// End Context
    })
})//End Describe