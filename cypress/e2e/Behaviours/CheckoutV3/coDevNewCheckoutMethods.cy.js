/// <reference types="Cypress"/>

import quizElements from "../../PageObject/quizPO"
import appointmentElements from "../../PageObject/appointmentPO"
import newCheckoutElements from "../../PageObject/checkoutV3PO"
import newThankYouPage from "../../PageObject/newThankYouPagePO"

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
                const poCheckoutV3 = new newCheckoutElements()
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
                poAppointment.getAppointmentModal().should('be.visible')
                poAppointment.getAppointmentButton().click()
                poAppointment.getCenterOdontologiaPena().click()
                poAppointment.getCenterHour().click()
                poAppointment.getPagarCita().click()
                poCheckoutV3.getButtonCreditCard().should('be.visible').click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.wait(2500)
                poCheckoutV3.getButtonPagar().click()
                cy.fixture('creditCardsData').then(function(data){
                    this.data= data
                    poCheckoutV3.getAddressContainerError().should('have.text', this.data.ErrorNoDirection)
                    cy.wait(1000)
                    poCheckoutV3.getButtonAddDirection().click()
                    cy.wait(1000)
                    poCheckoutV3.getAddressModal().should('be.visible')
                    poCheckoutV3.getStreet().type(this.data.coStreet)
                    poCheckoutV3.getAddressNumber().type(this.data.coAddressNumber)
                    poCheckoutV3.getReferences().type(this.data.coApto)
                    poCheckoutV3.getState().type(this.data.coState)
                    poCheckoutV3.getNeighborhood().type(this.data.coNeighborhood)
                    poCheckoutV3.getDepartment().type(this.data.coDepartment)
                    poCheckoutV3.getButtonAddDirection().should('be.enabled').click({force: true})
                    poCheckoutV3.getButtonSaveAddress().click({force: true})
                    cy.wait(1000)
                    //poCheckoutV3.getAddressModal().should('not.be.visible')
                    poCheckoutV3.getButtonPagar().click()
                    poCheckoutV3.getErrorTdc1().should('have.text', this.data.ErrorTDC1)
                    poCheckoutV3.getErrorTdc2().should('have.text', this.data.ErrorTDC2)
                    poCheckoutV3.getErrorTdc3().should('have.text', this.data.ErrorTDC3)
                    poCheckoutV3.getErrorTdc4().should('have.text', this.data.ErrorTDC4)
                    poCheckoutV3.getErrorTdc5().should('have.text', this.data.ErrorTDC5)
                }) 
                //
                cy.addCorrectCardCo()
                //
                poCheckoutV3.getButtonPagar().click()
                //
                cy.wait(5000)
                cy.fixture('thankYouPage').then(function(data){
                    this.data= data
                    poNewThankYouPage.getMainContainer().should('contain.text', this.data.mainTitle)
                    //poNewThankYouPage.getNButtonIraMiCuenta().should('be.visible')
                })
    
    
      
                    //poCheckoutV3.getButtonEfectivo().should('be.visible')
    
        })// End of 002 - Validate CreditCard
        it('002 - Validate PSE', () => {
            const fakeFirstName = faker.name.firstName()
            const fakeLastName = faker.name.lastName()
            const poQuiz = new quizElements()
            const poAppointment = new appointmentElements()
            const poCheckoutV3 = new newCheckoutElements()
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
                //poCheckoutV3.getButtonPagar().should('be.visible').should('be.enabled')
            cy.wait(3500)
                //poCheckoutV3.getButtonCreditCard().should('be.visible')
            poCheckoutV3.getButtonPse().should('be.visible').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.wait(2500)
            poCheckoutV3.getButtonPSEContinuar().click()
            cy.fixture('creditCardsData').then(function(data){
                this.data= data
                poCheckoutV3.getAddressContainerError().should('have.text', this.data.ErrorNoDirection)
                cy.wait(1000)
                poCheckoutV3.getButtonAddDirection().click()
                cy.wait(1000)
                poCheckoutV3.getAddressModal().should('be.visible')
                poCheckoutV3.getStreet().type(this.data.coStreet)
                poCheckoutV3.getAddressNumber().type(this.data.coAddressNumber)
                poCheckoutV3.getReferences().type(this.data.coApto)
                poCheckoutV3.getState().type(this.data.coState)
                poCheckoutV3.getNeighborhood().type(this.data.coNeighborhood)
                poCheckoutV3.getDepartment().type(this.data.coDepartment)
                poCheckoutV3.getButtonAddDirection().should('be.enabled').click({force: true})
                poCheckoutV3.getButtonSaveAddress().click({force: true})
                cy.wait(1000)
                //poCheckoutV3.getAddressModal().should('not.be.visible')
                poCheckoutV3.getButtonPSEContinuar().click()
                poCheckoutV3.getErrorPse1().should('have.text', this.data.ErrorPse1)
                poCheckoutV3.getErrorPse2().should('have.text', this.data.ErrorPse2)
                poCheckoutV3.getErrorPse3().should('have.text', this.data.ErrorPse3)
                poCheckoutV3.getErrorPse4().should('have.text', this.data.ErrorPse4)
            })
            cy.addCorrectPseData()
            //
            cy.wait(1000)
            poCheckoutV3.getButtonPSEContinuar().click()
            cy.wait(7000)
            poCheckoutV3.getGoToPse().should('be.visible').click()
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
            const poCheckoutV3 = new newCheckoutElements()
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
                //poCheckoutV3.getButtonCreditCard().should('be.visible')
            poCheckoutV3.getButtonEfectivo().should('be.visible').click()
            Cypress.on('uncaught:exception', (err, runnable) => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.wait(2500)
            poCheckoutV3.getButtonPayEfecty().click()
            cy.fixture('creditCardsData').then(function(data){
                this.data= data
                poCheckoutV3.getAddressContainerError().should('have.text', this.data.ErrorNoDirection)
                cy.wait(1000)
                poCheckoutV3.getButtonAddDirection().click()
                cy.wait(1000)
                poCheckoutV3.getAddressModal().should('be.visible')
                poCheckoutV3.getStreet().type(this.data.coStreet)
                poCheckoutV3.getAddressNumber().type(this.data.coAddressNumber)
                poCheckoutV3.getReferences().type(this.data.coApto)
                poCheckoutV3.getState().type(this.data.coState)
                poCheckoutV3.getNeighborhood().type(this.data.coNeighborhood)
                poCheckoutV3.getDepartment().type(this.data.coDepartment)
                poCheckoutV3.getButtonAddDirection().should('be.enabled').click({force: true})
                poCheckoutV3.getButtonSaveAddress().click({force: true})
                cy.wait(1000)
                //poCheckoutV3.getAddressModal().should('not.be.visible')
                poCheckoutV3.getButtonPayEfecty().click()
                cy.wait(3000)
                cy.url().should('contain', this.data.urlMercadoPago)
            })   
                //poCheckoutV3.getButtonEfectivo().should('be.visible')

        })// End of 003 - Validate Efecty

        })// End Context
    })
})//End Describe