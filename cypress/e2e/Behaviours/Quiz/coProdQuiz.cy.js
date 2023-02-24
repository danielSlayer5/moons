/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPO"
import appointmentElements from "../../PageObject/appointmentPO"
import newCheckoutElements from "../../PageObject/checkoutV3PO"
import newThankYouPage from "../../PageObject/newThankYouPagePO"

describe.skip('Quiz CO', () => {
    const faker = require("faker");
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('Execution of test cases for the QUIZ CO', () => {
            beforeEach(function(){
                cy.viewport(device)
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    cy.visit(this.data.coQuizProd)
                })
            })
        it('001 - Answer Quiz with NO data', () => {
            const poQuiz = new quizElements()
            poQuiz.getFinalizarQuizButton().click()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta1)
            })//End fixture
        })// End of 001 - answer Quiz with no data
        it('002 - Answer only Q1', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta2)
            })//End fixture
        })// End of 002 - answer only Q1
        it('003 - Answer only Q1 and Q2', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.errorPregunta3_1)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPreguntaCo3_1)
            })//End fixture
        })// End of 002 - answer only Q1
        it('004 - Answer only Q1, Q2 and Q3 with wrong NAME', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.WrongName)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongNameError)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPreguntaCo3_1)
            })//End fixture
        })// 003 - Answer only Q1, Q2 and Q3 with wrong NAME
        it('005 - Answer only Q1, Q2 and Q3 with correct NAME', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongApellidoError)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta3_2)
            })//End fixture
        })// 004 - Answer only Q1, Q2 and Q3 with correct NAME
        it('006 - Answer only Q1, Q2, Q3 with wrong Apellido', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getCampoApellido().type(this.data.WrongApellido)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongApellidoError)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta3_2)
            })//End fixture
        })// 005 - Answer only Q1, Q2, Q3 with wrong Apellido
        it('007 - Answer only Q1, Q2, Q3 with correct Apellido', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getCampoApellido().type(this.data.correctApellido)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.errorPreguntaCo3_3)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta3_3)
            })//End fixture
        })// 006 - Answer only Q1, Q2, Q3 with correct Apellido
        it('008 - Answer only Q1, Q2, Q3 with incorrect Email', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getCampoApellido().type(this.data.correctApellido)
                poQuiz.getCampoCorreo().type(this.data.wrongCorreo)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongCorreoError)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta3_3)
            })//End fixture
        })// 007 - Answer only Q1, Q2, Q3 with incorrect Email
        it('009 - Answer only Q1, Q2, Q3 with correct Email', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getCampoApellido().type(this.data.correctApellido)
                cy.addFakeMailCo()
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta3_4)
            })//End fixture
        })// End of 008 - Answer only Q1, Q2, Q3 with correct Email
        it('010 - Answer only Q1, Q2, Q3 with incorrect Phone', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getCampoApellido().type(this.data.correctApellido)
                cy.addFakeMailCo()
                poQuiz.getCampoWhatsApp().type(this.data.wrongNumero)
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getContainerErrorWa().should('be.visible').should('contain.text', this.data.wrongNumeroError)
                poQuiz.getContenedorDeErrorCo().should('be.visible').should('contain.text', this.data.errorPregunta3_4)
            })//End fixture
        })// End of 009 - Answer only Q1, Q2, Q3 with incorrect Phone
        it('011 - Answer only Q1, Q2, Q3 with correct Phone without ', () => {
            const poQuiz = new quizElements()
            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(this.data.correctName)
                poQuiz.getCampoApellido().type(this.data.correctApellido)
                cy.addFakeMailCo()
                cy.addCorrectNumber()
                //poQuiz.getCampoWhatsApp().type("123")
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getContainerDisclamerWaCo().should('be.visible')
            })//End fixture
        })// End of 009 - Answer only Q1, Q2, Q3 with incorrect Phone
        it('012 - Answer all the questions correctly ', () => {
            const fakeFirstName = faker.name.firstName()
            const fakeLastName = faker.name.lastName()
            const poCoQuiz = new quizElements()
            const poCoAppointment = new appointmentElements()

            cy.fixture('quizData').then(function(data){
                this.data=data
                poCoQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poCoQuiz.getCampoNombre().type(fakeFirstName)
                cy.log(fakeFirstName)
                poCoQuiz.getCampoApellido().type(fakeLastName)
                cy.log(fakeLastName)
                cy.addFakeMailCo()
                cy.addCorrectNumberCo()
                poCoQuiz.getCheckboxWaCo().check()
                poCoQuiz.getFinalizarQuizButton().click()
                poCoAppointment.getAppointmentModal().should('be.visible')
            })//End fixture
        })// End of 011 - Answer only Q1, Q2, Q3 with incorrect Phone
        it('013 - Create a new DEAL and pay the appointment', () => {
            const fakeFirstName = faker.name.firstName()
            const fakeLastName = faker.name.lastName()
            const poQuiz = new quizElements()
            const poAppointment = new appointmentElements()
            const poNewCheckout = new newCheckoutElements()
            const poNewThankYouPage = new newThankYouPage()

            cy.fixture('quizData').then(function(data){
                this.data=data
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(fakeFirstName)
                cy.log(fakeFirstName)
                poQuiz.getCampoApellido().type(fakeLastName)
                cy.log(fakeLastName)
                cy.addFakeMailCo()
                cy.addCorrectNumberCo()
                poQuiz.getCheckboxWaCo().check()
                poQuiz.getFinalizarQuizButton().click()
                cy.wait(3500)
                poAppointment.getAppointmentModal().should('be.visible')
                poAppointment.getAppointmentButton().click()
                cy.wait(3500)
                poAppointment.getCenterOdontologiaPena().click()
                cy.wait(3500)
                poAppointment.getCenterHour().click()
                cy.wait(8500) //wait for the place to be displayed on the Newcheckout
                poAppointment.getPagarCita().click()
                cy.wait(13500)
                cy.reload()
                cy.addCorrectCardCo()
                cy.addCorrectDirectionCo()
                cy.wait(3500)
                poNewCheckout.getButtonPagar().click()
                cy.wait(7500)
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                  })
                  poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
            })//End fixture
        })// End of 012 - Create a new DEAL and pay the appointment

        })// End Context
    })
})//End Describe