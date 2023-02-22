/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPageObject"
import mxAppointmentElements from "../../PageObject/appointmentPageObject"
import mxNewCheckoutElements from "../../PageObject/newCheckoutPageObject"
import mxNewThankYouPage from "../../PageObject/newThankYouPageObject"


describe ('SuitCase: MX - DEV - REVOLVER CheckoutV3', () => {
    const faker = require("faker")
    const devices = ["macbook-15"]
    const totalMercado=1
    const totalStripe=2
    const totalConekta=1
    devices.forEach((device) => {
        context ('Execution of '+ (totalMercado+totalStripe+totalConekta)+ ' test cases paying with the appointment with the REVOLVER', () => {
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
                        const poMxQuiz = new quizElements()
                        const poMxAppointment = new mxAppointmentElements()
                        const poMxNewCheckout = new mxNewCheckoutElements()
                        const poMxNewThankYouPage = new mxNewThankYouPage()
            
                        cy.fixture('quizData').then(function(data){
                            this.data=data
                            poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                            cy.get(this.data.Img1).click()
                            poMxQuiz.getCampoNombre().type(fakeFirstName)
                            cy.log(fakeFirstName)
                            poMxQuiz.getCampoApellido().type(fakeLastName)
                            cy.log(fakeLastName)
                            cy.addFakeMailMx()
                            cy.addCorrectNumber()
                            poMxQuiz.getCheckboxWa().check()
                            poMxQuiz.getFinalizarQuizButton().click()
                            poMxAppointment.getAppointmentModal().should('be.visible')
                            poMxAppointment.getAppointmentButton().click()
                            poMxAppointment.getCenterSatelite().click()
                            poMxAppointment.getCenterHour().click()
                            poMxAppointment.getPagarCita().click()
                            cy.addCorrectCard()
                            poMxNewCheckout.getButtonPagar().click()
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                // returning false here prevents Cypress from
                                // failing the test
                                return false
                            })
                            poMxNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                        })//End fixture
                })// End of MERCADO PAGO
            }
            for(let i=0; i<totalStripe; i++){
                it('DEAL: ' + (i+1) + ' of: '+ totalStripe + ' for STRIPE', () => {
                        const fakeFirstName = faker.name.firstName()
                        const fakeLastName = faker.name.lastName()
                        const poMxQuiz = new quizElements()
                        const poMxAppointment = new mxAppointmentElements()
                        const poMxNewCheckout = new mxNewCheckoutElements()
                        const poMxNewThankYouPage = new mxNewThankYouPage()
            
                        cy.fixture('quizData').then(function(data){
                            this.data=data
                            poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                            cy.get(this.data.Img1).click()
                            poMxQuiz.getCampoNombre().type(fakeFirstName)
                            cy.log(fakeFirstName)
                            poMxQuiz.getCampoApellido().type(fakeLastName)
                            cy.log(fakeLastName)
                            cy.addFakeMailMx()
                            cy.addCorrectNumber()
                            poMxQuiz.getCheckboxWa().check()
                            poMxQuiz.getFinalizarQuizButton().click()
                            poMxAppointment.getAppointmentModal().should('be.visible')
                            poMxAppointment.getAppointmentButton().click()
                            poMxAppointment.getCenterSatelite().click()
                            poMxAppointment.getCenterHour().click()
                            poMxAppointment.getPagarCita().click()
                            cy.addCorrectCardStripe()
                            poMxNewCheckout.getButtonPagar().click()
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                // returning false here prevents Cypress from
                                // failing the test
                                return false
                            })
                            poMxNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                        })//End fixture
                })// End of STRIPE
            }
            for(let i=0; i<totalConekta; i++){
                it('DEAL: ' + (i+1) + ' of: '+ totalConekta + ' for CONEKTA', () => {
                        const fakeFirstName = faker.name.firstName()
                        const fakeLastName = faker.name.lastName()
                        const poMxQuiz = new quizElements()
                        const poMxAppointment = new mxAppointmentElements()
                        const poMxNewCheckout = new mxNewCheckoutElements()
                        const poMxNewThankYouPage = new mxNewThankYouPage()
            
                        cy.fixture('quizData').then(function(data){
                            this.data=data
                            poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                            cy.get(this.data.Img1).click()
                            poMxQuiz.getCampoNombre().type(fakeFirstName)
                            cy.log(fakeFirstName)
                            poMxQuiz.getCampoApellido().type(fakeLastName)
                            cy.log(fakeLastName)
                            cy.addFakeMailMx()
                            cy.addCorrectNumber()
                            poMxQuiz.getCheckboxWa().check()
                            poMxQuiz.getFinalizarQuizButton().click()
                            poMxAppointment.getAppointmentModal().should('be.visible')
                            poMxAppointment.getAppointmentButton().click()
                            poMxAppointment.getCenterSatelite().click()
                            poMxAppointment.getCenterHour().click()
                            poMxAppointment.getPagarCita().click()
                            cy.addCorrectCardConekta()
                            poMxNewCheckout.getButtonPagar().click()
                            Cypress.on('uncaught:exception', (err, runnable) => {
                                // returning false here prevents Cypress from
                                // failing the test
                                return false
                            })
                            poMxNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                        })//End fixture
                })// End of CONEKTA
            }
        })// End Context
    })
})//End Describe