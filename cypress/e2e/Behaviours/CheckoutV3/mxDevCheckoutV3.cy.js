/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPageObject"
import appointmentElements from "../../PageObject/appointmentPageObject"
import newCheckoutElements from "../../PageObject/newCheckoutPageObject"

describe ('New Checkout', () => {
    const faker = require("faker");
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('Execution of several test cases to create anew deal in the QUIZ, selecting Hour and Place to go to the New Checkout', () => {
            beforeEach(function(){
                cy.viewport(device)
            })
        for(let i=0; i<1; i++){
            it(''+ (i+1) +' - Create a new deal, select and go to the main view of NewCheckout', () => {
                const fakeFirstName = faker.name.firstName()
                const fakeLastName = faker.name.lastName()
                const poQuiz = new quizElements()
                const poAppointment = new appointmentElements()
                const poNewCheckout = new newCheckoutElements()
    
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
                    poAppointment.getAppointmentModal().should('be.visible')
                    poAppointment.getAppointmentButton().click()
                    cy.wait(2500)
                    poAppointment.getCenterSatelite().click()
                    poAppointment.getCenterHour().click()
                    //cy.wait(3500) //wait for the place to be displayed on the Newcheckout
                    poAppointment.getPagarCita().click()
                    poNewCheckout.getButtonPagar().should('be.visible')
                    Cypress.on('uncaught:exception', (err, runnable) => {
                        // returning false here prevents Cypress from
                        // failing the test
                        return false
                      })
                })//End fixture
            })// End of 01 - Create a new deal, select and go to the main view of NewCheckout
        }
        })// End Context
    })
})//End Describe