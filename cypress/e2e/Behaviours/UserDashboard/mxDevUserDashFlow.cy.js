/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPageObject"
import appointmentElements from "../../PageObject/appointmentPageObject"
import newCheckoutElements from "../../PageObject/newCheckoutPageObject"
import mxOldThankYouPage from "../../PageObject/MxDevOldThankYouPage"
import newThankYouPage from "../../PageObject/newThankYouPageObject"
import userDashboard from "../../PageObject/userDashboardPageObject"


describe ('Quiz MX', () => {
    const faker = require("faker");
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('Execution of test cases for the QUIZ MX', () => {
            beforeEach(function(){
                cy.viewport(device)
            })
        
        it.only('01 - Create a new deal, pay the appointment and go to the main view of UD', () => {
            const fakeFirstName = faker.name.firstName()
            const fakeLastName = faker.name.lastName()
            const poQuiz = new quizElements()
            const poAppointment = new appointmentElements()
            const poNewCheckout = new newCheckoutElements()
            const poNewThankYouPage = new newThankYouPage()
            const poUserDash = new userDashboard()

            cy.fixture('quizData').then(function(data){
                this.data=data
                cy.visit(this.data.mxQuizDev)
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
                cy.wait(6000)
                poAppointment.getAppointmentModal().should('be.visible')
                poAppointment.getAppointmentButton().click()
                cy.wait(3500)
                poAppointment.getCenterSatelite().click()
                cy.wait(3500)
                poAppointment.getCenterHour().click()
                cy.wait(5500) //wait for the place to be displayed on the Newcheckout
                poAppointment.getPagarCita().click()
                cy.wait(7500)
                cy.reload()
                cy.addCorrectCard()
                cy.wait(3500)
                poNewCheckout.getButtonPagar().click()
                cy.wait(7500)
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                  })
                poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible').click()
                cy.wait(5000)
                poUserDash.getModalUserDash().should('be.visible')
                poUserDash.getContainerName().should('contain.text', fakeFirstName).should('contain.text', fakeLastName)
                poUserDash.getFirstButton().click()
                poUserDash.getButtonSkipPass().click()
                poUserDash.getThirdButton().click()
                poUserDash.getFourthButton().click()
                cy.fixture('userDashboard').then(function(udData){
                    this.data = udData
                    cy.wait(1000)
                    poUserDash.getUDTitle().should('be.visible').should('contain.text', this.data.correctTitle)
                })
            })//End fixture
        })// End of 009 - Answer only Q1, Q2, Q3 with incorrect Phone

        })// End Context
    })
})//End Describe