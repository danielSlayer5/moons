/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPageObject"
import appointmentElements from "../../PageObject/appointmentPageObject"
import newCheckoutElements from "../../PageObject/newCheckoutPageObject"
import mxOldThankYouPage from "../../PageObject/MxDevOldThankYouPage"
import newThankYouPage from "../../PageObject/newThankYouPageObject"
import userDashboard from "../../PageObject/userDashboardPageObject"


describe ('SuitCase: MX - PROD - CheckoutV3', () => {
    const faker = require("faker")
    const devices = ["macbook-15"]
    const totalDeals =3
    devices.forEach((device) => {
        context ('Execution of ' + totalDeals + ' test cases in PROD to create deals to go to the New Checkout', () => {
            beforeEach(function(){
                cy.viewport(device)
            })
        for(let i=0; i<1; i++){
            it('DEAL: '+(i+1) +' of : ' + totalDeals +' for checkoutV3', () => {
                const fakeFirstName = faker.name.firstName()
                const fakeLastName = faker.name.lastName()
                const poQuiz = new quizElements()
                const poAppointment = new appointmentElements()
                const poNewCheckout = new newCheckoutElements()
                const poNewThankYouPage = new newThankYouPage()
                const poUserDash = new userDashboard()
    
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxQuizProd)
                    poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poQuiz.getCampoNombre().type(fakeFirstName)
                    cy.log(fakeFirstName)
                    poQuiz.getCampoApellido().type(fakeLastName)
                    cy.log(fakeLastName)
                    cy.addFakeMailMx()
                    cy.addCorrectNumber()
                    cy.wait(1000)
                    poQuiz.getCheckboxWa().check()
                    poQuiz.getFinalizarQuizButton().click()
                    cy.wait(3500)
                    poAppointment.getAppointmentModal().should('be.visible')
                    poAppointment.getAppointmentButton().click()
                    cy.wait(2500)
                    poAppointment.getCenterCoyoacan().click()
                    //cy.wait(3500)
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