/// <reference types="Cypress"/>
//HOLA

import quizElements from "../../PageObject/quizPO"
import appointmentElements from "../../PageObject/appointmentPO"
import checkoutElements from "../../PageObject/checkoutV3PO"
import newThankYouPage from "../../PageObject/newThankYouPagePO"


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
                const poCheckoutV3 = new checkoutElements()
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
                    poAppointment.getPagarCita().click()
                    poCheckoutV3.getButtonPagar().should('be.visible')
                    cy.addCorrectCardCo()
                    cy.addCorrectDirectionCo()
                    poCheckoutV3.getButtonPagar().click()
                    poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                    //cy.pause()
                })//End fixture
            })// End of 012 - Create a new DEAL and pay the appointment
        }
        })// End Context
    })
})//End Describe