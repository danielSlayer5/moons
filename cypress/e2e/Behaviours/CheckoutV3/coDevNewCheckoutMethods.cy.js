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
            })
        it('001 - Validate CreditCard', () => {
                const fakeFirstName = faker.name.firstName()
                const fakeLastName = faker.name.lastName()
                const poQuiz = new quizElements()
                const poAppointment = new appointmentElements()
                const poNewCheckout = new newCheckoutElements()
                const poNewThankYouPage = new newThankYouPage()
    
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    cy.visit(this.data.coQuizDev)
                    poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                    poQuiz.getCampoNombre().type(fakeFirstName)
                    cy.log(fakeFirstName)
                    poQuiz.getCampoApellido().type(fakeLastName)
                    cy.log(fakeLastName)
                    cy.addFakeMailCo()
                    cy.addCorrectNumberCo()
                    poQuiz.getCheckboxWaCo().check()
                })//End fixture
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
                cy.wait(3500)
                    //poNewCheckout.getButtonCreditCard().should('be.visible')
                poNewCheckout.getButtonCreditCard().should('be.visible').click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.wait(2500)
                poNewCheckout.getButtonPagar().click()
                cy.fixture('creditCardsData').then(function(data){
                    this.data= data
                    poNewCheckout.getAddressContainerError().should('have.text', this.data.ErrorNoDirection)
                    cy.wait(1000)
                    poNewCheckout.getButtonAddDirection().click()
                    cy.wait(1000)
                    poNewCheckout.getAddressModal().should('be.visible')
                    poNewCheckout.getStreet().type(this.data.coStreet)
                    poNewCheckout.getAddressNumber().type(this.data.coAddressNumber)
                    poNewCheckout.getReferences().type(this.data.coApto)
                    poNewCheckout.getState().type(this.data.coState)
                    poNewCheckout.getNeighborhood().type(this.data.coNeighborhood)
                    poNewCheckout.getDepartment().type(this.data.coDepartment)
                    poNewCheckout.getButtonAddDirection().should('be.enabled').click({force: true})
                    poNewCheckout.getButtonSaveAddress().click({force: true})
                    cy.wait(1000)
                    //poNewCheckout.getAddressModal().should('not.be.visible')
                    poNewCheckout.getButtonPagar().click()
                    poNewCheckout.getErrorTdc1().should('have.text', this.data.ErrorTDC1)
                    poNewCheckout.getErrorTdc2().should('have.text', this.data.ErrorTDC2)
                    poNewCheckout.getErrorTdc3().should('have.text', this.data.ErrorTDC3)
                    poNewCheckout.getErrorTdc4().should('have.text', this.data.ErrorTDC4)
                    poNewCheckout.getErrorTdc5().should('have.text', this.data.ErrorTDC5)
                }) 
                //
                cy.addCorrectCardCo()
                //
                poNewCheckout.getButtonPagar().click()
                //
                cy.wait(5000)
                cy.fixture('thankYouPage').then(function(data){
                    this.data= data
                    poNewThankYouPage.getMainContainer().should('contain.text', this.data.mainTitle)
                    //poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                })
    
    
      
                    //poNewCheckout.getButtonEfectivo().should('be.visible')
    
        })// End of 002 - Validate CreditCard
        it('002 - Validate PSE', () => {
            const fakeFirstName = faker.name.firstName()
            const fakeLastName = faker.name.lastName()
            const poQuiz = new quizElements()
            const poAppointment = new appointmentElements()
            const poNewCheckout = new newCheckoutElements()
            const poNewThankYouPage = new newThankYouPage()

            cy.fixture('quizData').then(function(data){
                this.data=data
                cy.visit(this.data.coQuizDev)
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(fakeFirstName)
                cy.log(fakeFirstName)
                poQuiz.getCampoApellido().type(fakeLastName)
                cy.log(fakeLastName)
                cy.addFakeMailCo()
                cy.addCorrectNumberCo()
                poQuiz.getCheckboxWaCo().check()
            })//End fixture
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
                //cy.wait(13500)
                //cy.reload()
                //cy.addCorrectCardCo()
                //cy.addCorrectDirectionCo()
                //poNewCheckout.getButtonPagar().should('be.visible').should('be.enabled')
            cy.wait(3500)
                //poNewCheckout.getButtonCreditCard().should('be.visible')
            poNewCheckout.getButtonPse().should('be.visible').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.wait(2500)
            poNewCheckout.getButtonPSEContinuar().click()
            cy.fixture('creditCardsData').then(function(data){
                this.data= data
                poNewCheckout.getAddressContainerError().should('have.text', this.data.ErrorNoDirection)
                cy.wait(1000)
                poNewCheckout.getButtonAddDirection().click()
                cy.wait(1000)
                poNewCheckout.getAddressModal().should('be.visible')
                poNewCheckout.getStreet().type(this.data.coStreet)
                poNewCheckout.getAddressNumber().type(this.data.coAddressNumber)
                poNewCheckout.getReferences().type(this.data.coApto)
                poNewCheckout.getState().type(this.data.coState)
                poNewCheckout.getNeighborhood().type(this.data.coNeighborhood)
                poNewCheckout.getDepartment().type(this.data.coDepartment)
                poNewCheckout.getButtonAddDirection().should('be.enabled').click({force: true})
                poNewCheckout.getButtonSaveAddress().click({force: true})
                cy.wait(1000)
                //poNewCheckout.getAddressModal().should('not.be.visible')
                poNewCheckout.getButtonPSEContinuar().click()
                poNewCheckout.getErrorPse1().should('have.text', this.data.ErrorPse1)
                poNewCheckout.getErrorPse2().should('have.text', this.data.ErrorPse2)
                poNewCheckout.getErrorPse3().should('have.text', this.data.ErrorPse3)
                poNewCheckout.getErrorPse4().should('have.text', this.data.ErrorPse4)
            })
            cy.addCorrectPseData()
            //
            cy.wait(1000)
            poNewCheckout.getButtonPSEContinuar().click()
            cy.wait(7000)
            poNewCheckout.getGoToPse().should('be.visible').click()
            cy.wait(6500)
            cy.fixture('thankYouPage').then(function(data){
                this.data= data
                poNewThankYouPage.getMainContainer().should('contain.text', this.data.mainTitle)
            })
        })// End of 001 - Validate PSE
        it('003 - Validate Efecty', () => {
            const fakeFirstName = faker.name.firstName()
            const fakeLastName = faker.name.lastName()
            const poQuiz = new quizElements()
            const poAppointment = new appointmentElements()
            const poNewCheckout = new newCheckoutElements()
            const poNewThankYouPage = new newThankYouPage()

            cy.fixture('quizData').then(function(data){
                this.data=data
                cy.visit(this.data.coQuizDev)
                poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                cy.get(this.data.Img1).click()
                poQuiz.getCampoNombre().type(fakeFirstName)
                cy.log(fakeFirstName)
                poQuiz.getCampoApellido().type(fakeLastName)
                cy.log(fakeLastName)
                cy.addFakeMailCo()
                cy.wait(1500)
                cy.addCorrectNumberCo()
                poQuiz.getCheckboxWaCo().check()
            })//End fixture
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
            cy.wait(3500)
                //poNewCheckout.getButtonCreditCard().should('be.visible')
            poNewCheckout.getButtonEfectivo().should('be.visible').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.wait(2500)
            poNewCheckout.getButtonPayEfecty().click()
            cy.fixture('creditCardsData').then(function(data){
                this.data= data
                poNewCheckout.getAddressContainerError().should('have.text', this.data.ErrorNoDirection)
                cy.wait(1000)
                poNewCheckout.getButtonAddDirection().click()
                cy.wait(1000)
                poNewCheckout.getAddressModal().should('be.visible')
                poNewCheckout.getStreet().type(this.data.coStreet)
                poNewCheckout.getAddressNumber().type(this.data.coAddressNumber)
                poNewCheckout.getReferences().type(this.data.coApto)
                poNewCheckout.getState().type(this.data.coState)
                poNewCheckout.getNeighborhood().type(this.data.coNeighborhood)
                poNewCheckout.getDepartment().type(this.data.coDepartment)
                poNewCheckout.getButtonAddDirection().should('be.enabled').click({force: true})
                poNewCheckout.getButtonSaveAddress().click({force: true})
                cy.wait(1000)
                //poNewCheckout.getAddressModal().should('not.be.visible')
                poNewCheckout.getButtonPayEfecty().click()
                cy.wait(3000)
                cy.url().should('contain', this.data.urlMercadoPago)
            })   
                //poNewCheckout.getButtonEfectivo().should('be.visible')

        })// End of 003 - Validate Efecty

        })// End Context
    })
})//End Describe