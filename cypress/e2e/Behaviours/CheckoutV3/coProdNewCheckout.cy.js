/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPageObject"
import appointmentElements from "../../PageObject/appointmentPageObject"
import newCheckoutElements from "../../PageObject/newCheckoutPageObject"
import mxOldThankYouPage from "../../PageObject/MxDevOldThankYouPage"
import newThankYouPage from "../../PageObject/newThankYouPageObject"
import mxUserDashboard from "../../PageObject/userDashboardPageObject"


describe ('Quiz CO', () => {
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
        for(let i=0; i<1; i++){
            it(''+(i+1) +' - 100% of deals must reach theCheckout V3.0', () => {
                const fakeFirstName = faker.name.firstName()
                const fakeLastName = faker.name.lastName()
                const poQuiz = new quizElements()
                const poAppointment = new appointmentElements()
                const poNewCheckout = new newCheckoutElements()

                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poQuiz.getCampoNombre().type(fakeFirstName)
                    cy.log(fakeFirstName)
                    poQuiz.getCampoApellido().type(fakeLastName)
                    cy.log(fakeLastName)
                    cy.addFakeMailCo()
                    cy.wait(1000)
                    cy.addCorrectNumberCo()
                    cy.wait(1000)
                    poQuiz.getCheckboxWaCo().check()
                    poQuiz.getFinalizarQuizButton().click()
                    cy.wait(4500)
                    poAppointment.getAppointmentModal().should('be.visible')
                    poAppointment.getAppointmentButton().click()
                    cy.wait(3500)
                    poAppointment.getCenterOdontologiaPena().click()
                    cy.wait(3500)
                    poAppointment.getCenterHour().click()
                    cy.wait(8500) //wait for the place to be displayed on the Newcheckout
                    poAppointment.getPagarCita().click()
                    poNewCheckout.getButtonAddDirection().should('exist')
                    poNewCheckout.getButtonPagar().should('be.visible')
                    // cy.wait(1500)
                    // cy.addCorrectCardCo()
                    // cy.addCorrectDirectionCo()
                    // cy.wait(1500)
                    // poNewCheckout.getButtonPagar().click()
                    // cy.wait(1000)
                    // poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                    //cy.pause()
                })//End fixture
            })// End of 012 - Create a new DEAL and pay the appointment
        }
        })// End Context
    })
})//End Describe