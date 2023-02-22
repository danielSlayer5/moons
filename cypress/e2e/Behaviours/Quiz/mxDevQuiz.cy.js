/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPageObject"
import appointmentElements from "../../PageObject/appointmentPageObject"

describe ('Quiz MX', () => {
    const faker = require("faker")
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('Execution of test cases for the QUIZ MX', () => {
            beforeEach(function(){
                cy.viewport(device)
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxQuizDev)
                })
            })
        describe('Execution of happy path for the test cases for the quiz', () => {
            it('001 - Answer Quiz with NO data', () => {
                const poMxQuiz = new quizElements()
                poMxQuiz.getFinalizarQuizButton().click()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta1)
                })//End fixture
            })// End of 001 - answer Quiz with no data
            it('002 - Answer only Q1', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta2)
                })//End fixture
            })// End of 002 - answer only Q1
            it('003 - Answer only Q1 and Q2', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPreguntaCo3_1)
                })//End fixture
            })// End of 002 - answer only Q1
            it('004 - Answer only Q1, Q2 and Q3 with wrong first Name', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.WrongName)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.errorPregunta3_1)
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPreguntaCo3_1)
                })//End fixture
            })// 003 - Answer only Q1, Q2 and Q3 with wrong NAME
            it('005 - Answer only Q1, Q2 and Q3 with correct first Name', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongApellidoError)
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta3_2)
                })//End fixture
            })// 004 - Answer only Q1, Q2 and Q3 with correct NAME
            it('006 - Answer only Q1, Q2, Q3 with wrong last Name', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getCampoApellido().type(this.data.WrongApellido)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongApellidoError)
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta3_2)
                })//End fixture
            })// 005 - Answer only Q1, Q2, Q3 with wrong Apellido
            it('007 - Answer only Q1, Q2, Q3 with correct last Name', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getCampoApellido().type(this.data.correctApellido)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.errorPreguntaCo3_3)
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta3_3)
                })//End fixture
            })// 006 - Answer only Q1, Q2, Q3 with correct Apellido
            it('008 - Answer only Q1, Q2, Q3 with incorrect Email', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getCampoApellido().type(this.data.correctApellido)
                    poMxQuiz.getCampoCorreo().type(this.data.wrongCorreo)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getErrorCampoNombre().should('be.visible').should('contain.text', this.data.wrongCorreoError)
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta3_3)
                })//End fixture
            })// 007 - Answer only Q1, Q2, Q3 with incorrect Email
            it('009 - Answer only Q1, Q2, Q3 with correct Email', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getCampoApellido().type(this.data.correctApellido)
                    cy.addFakeMailMx()
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta3_4)
                })//End fixture
            })// End of 008 - Answer only Q1, Q2, Q3 with correct Email
            it('010 - Answer only Q1, Q2, Q3 with incorrect Phone', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getCampoApellido().type(this.data.correctApellido)
                    cy.addFakeMailMx()
                    poMxQuiz.getCampoWhatsApp().type(this.data.wrongNumero)
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getContainerErrorWa().should('be.visible').should('contain.text', this.data.wrongNumeroError)
                    poMxQuiz.getContenedorDeError().should('be.visible').should('contain.text', this.data.errorPregunta3_4)
                })//End fixture
            })// End of 009 - Answer only Q1, Q2, Q3 with incorrect Phone
            it('011 - Answer only Q1, Q2, Q3 with correct Phone without ', () => {
                const poMxQuiz = new quizElements()
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poMxQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poMxQuiz.getCampoNombre().type(this.data.correctName)
                    poMxQuiz.getCampoApellido().type(this.data.correctApellido)
                    cy.addFakeMailMx()
                    cy.addCorrectNumber()
                    //poMxQuiz.getCampoWhatsApp().type("123")
                    poMxQuiz.getFinalizarQuizButton().click()
                    poMxQuiz.getContainerDisclaimerWa().should('be.visible').should('contain.text', this.data.waDisclaimer)
                })//End fixture
            })// End of 010 - Answer only Q1, Q2, Q3 with incorrect Phone
            it.only('012 - Answer all the questions correctly and create the deal', () => {
                const fakeFirstName = faker.name.firstName()
                const fakeLastName = faker.name.lastName()
                const poMxQuiz = new quizElements()
                const poAppointment = new appointmentElements()
    
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
                    poAppointment.getAppointmentModal().should('be.visible')
                })//End fixture
            })// End of 011 - Answer only Q1, Q2, Q3 with incorrect Phone
        })
        })// End Context
    })
})//End Describe