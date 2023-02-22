/// <reference types="Cypress"/>
//HOLA

import quizElements from "../../PageObject/quizPageObject"
import appointmentElements from "../../PageObject/appointmentPageObject"
import newCheckoutElements from "../../PageObject/newCheckoutPageObject"
import newThankYouPage from "../../PageObject/newThankYouPageObject"


describe ('Massive creation of DEALS in the CO Quiz to pay for these and ensure redirection to checkout v3', () => {
    const faker = require("faker");
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('Execution of test cases for the QUIZ CO', () => {
            beforeEach(function(){
                cy.viewport(device)
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    cy.visit(this.data.coQuizDev)
                })
            })
        for(let i=0; i<1; i++){
            it(''+(i+1) +' - 100% of deals must reach theCheckout V3.0', () => {
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
                    poAppointment.getAppointmentModal().should('be.visible')
                    poAppointment.getAppointmentButton().click()
                    poAppointment.getCenterOdontologiaPena().click()
                    poAppointment.getCenterHour().click()
                    cy.wait(8500) //wait for the place to be displayed on the Newcheckout
                    poAppointment.getPagarCita().click()
                    poNewCheckout.getButtonPagar().should('be.visible')
                    cy.addCorrectCardCo()
                    cy.addCorrectDirectionCo()
                    poNewCheckout.getButtonPagar().click()
                    poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                    //cy.pause()
                })//End fixture
            })// End of 012 - Create a new DEAL and pay the appointment
        }
        })// End Context
    })
})//End Describe