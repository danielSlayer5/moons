// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
const faker = require("faker")

// Alternatively you can use CommonJS syntax:
// require('./commands')
import quizElements from "../e2e/PageObject/quizPO"
import checkoutElements from "../e2e/PageObject/checkoutV3PO"
import omsElements from "../e2e/PageObject/omsPO"

Cypress.Commands.add('createNewDeal', () =>{
    cy.exec('node cypress/support/createDataMx.js')
                const environment = Cypress.env('mxQuizDev')
                const poQuiz = new quizElements()
                cy.visit(environment) 
                cy.fixture('quizData').then(function(data){
                    this.data=data
                    poQuiz.getSeleccionaEdad().select(this.data.Edad2)
                    cy.get(this.data.Img1).click()
                })//End fixture
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poQuiz.getCampoNombre().type(this.data.nombre)
                    poQuiz.getCampoApellido().type(this.data.apellido + ' Cypress')
                    poQuiz.getCampoCorreo().type(this.data.email)
                    poQuiz.getCampoWhatsAppMx().type(this.data.number)
                })
                poQuiz.getCheckboxWaMx().check()
                poQuiz.getFinalizarQuizButton().click()
                poQuiz.getFinalizarQuizButton().should('not.exist')
                //Appointment Platform
                poQuiz.getAppointmentModal().should('be.visible')
})
Cypress.Commands.add('createNewTicketNumber', () =>{
    cy.exec('node cypress/support/createTicketNumber.js')
    const poOms = new omsElements()
        cy.fixture('ticketNumber').then(function(data){
        this.data = data
        poOms.getTicketNumber().type(this.data.ticketNumber)
    })
})
Cypress.Commands.add('addCorrectCard', () =>{
    const poCheckoutV3 = new checkoutElements()

    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poCheckoutV3.getFieldName().type(this.data.nameComplete)
        poCheckoutV3.getFieldCardNumber().type(this.data.creditCard)
        poCheckoutV3.getFieldMonthYear().type(this.data.monthYear)
        poCheckoutV3.getFieldCvc().type(this.data.cvc)
        cy.wait(2000)
    })
})
Cypress.Commands.add('addCorrectDirectionMx', () =>{
    const poCheckoutV3 = new checkoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poCheckoutV3.getButtonAddDirection().click()
        poCheckoutV3.getStreet().type(this.data.mxStreet)
        poCheckoutV3.getNumber().type(this.data.mxAddressNumber)
        poCheckoutV3.getZipcode().type(this.data.mxZip_Code)
        cy.wait(2000)
        poCheckoutV3.getButtonSaveAddress().click()
    })
})
Cypress.Commands.add('addCorrectCardStripe', () =>{
    const poCheckoutV3 = new checkoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        cy.wait(3500)
        poCheckoutV3.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poCheckoutV3.getFieldCardNumber().type(this.data.creditCardStripe)
        cy.wait(1500)
        poCheckoutV3.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poCheckoutV3.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectCardConekta', () =>{
    const poCheckoutV3 = new checkoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        cy.wait(3500)
        poCheckoutV3.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poCheckoutV3.getFieldCardNumber().type(this.data.creditCardConekta)
        cy.wait(1500)
        poCheckoutV3.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poCheckoutV3.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectCardCo', () =>{
    const poCheckoutV3 = new checkoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poCheckoutV3.getSelectorBank().click()
        poCheckoutV3.getFieldType().click()
        poCheckoutV3.getFieldNumber().type(this.data.coCedulaNumb)
        cy.wait(3500)
        poCheckoutV3.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poCheckoutV3.getFieldCardNumber().type(this.data.creditCard)
        cy.wait(1500)
        poCheckoutV3.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poCheckoutV3.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectPseData', () =>{
    const poCheckoutV3 = new checkoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poCheckoutV3.getFieldBank().click()
        poCheckoutV3.getFieldType().click()
        poCheckoutV3.getFieldClientType().click()
        poCheckoutV3.getFieldClientOption().click()
        poCheckoutV3.getIdType().click()
        poCheckoutV3.getIdOption().click()
        poCheckoutV3.getFieldDocumentNumber().type(this.data.coCedulaNumb)
    })
})

Cypress.Commands.add('addCorrectDirectionCo', () =>{
    const poCheckoutV3 = new checkoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poCheckoutV3.getButtonAddDirection().click()
        poCheckoutV3.getStreet().type(this.data.coStreet)
        poCheckoutV3.getAddressNumber().type(this.data.coAddressNumber)
        poCheckoutV3.getState().type(this.data.coState)
        poCheckoutV3.getNeighborhood().type(this.data.coNeighborhood)
        poCheckoutV3.getDepartment().type(this.data.coDepartment)
        cy.wait(1200)
        poCheckoutV3.getButtonSaveAddress().click()
    })
})

Cypress.Commands.add('loginIntoCartConfigurator', () =>{
    const poOms = new omsElements()
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.fixture('omsData').then(function(data){
        this.data=data
        poOms.getEmail().should('be.visible').type(this.data.userMailDev)
        poOms.getPassword().should('be.visible').type(this.data.userPassDev)
        poOms.getLogin().should('be.enabled').click()
        cy.wait(2300)
    })
})

Cypress.Commands.add('globalSearchUserMx', () => {
    const poOms = new omsElements()
    cy.fixture('omsData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.testAppointment)
        poOms.getSearchButton().click()
        cy.wait(1500)
        poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poOms.getResult().should('be.visible')
        cy.wait(1750)
        poOms.getButtonResult().click()
    })
})

Cypress.Commands.add('addAppointment', () => {
    const poOms = new omsElements()
    cy.wait(3500)
    poOms.getCitaButton().click({ force: true })
    cy.wait(1150)
    poOms.getViewCart().click()
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    poOms.getModalMainContainer().should('be.visible')
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()
})

Cypress.Commands.add('addAlineadoresA_1', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    //Select APARTADO
    cy.get('input[type="radio"]').each(($e1, index, $list) => {
        if(index == 0)
        {
            cy.get($e1[index]).click()
        }
    })
    poOms.getAmountButton1().click()
    poOms.getAddToCart().click()
    poOms.getViewCart().click()
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    poOms.getModalMainContainer().should('be.visible')
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()
})
Cypress.Commands.add('addAlineadoresA_2', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    //Select APARTADO
    cy.get('input[type="radio"]').each(($e1, index, $list) => {
        if(index == 0)
        {
            cy.get($e1[index]).click()
        }
    })
    poOms.getAmountButton3().click()
    poOms.getAddToCart().click({ force: true})
    poOms.getViewCart().click()
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    poOms.getModalMainContainer().should('be.visible')
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()
})
Cypress.Commands.add('addliquidation', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    poOms.getLiquidacionButton().click()
    poOms.getAddToCart().click()
    poOms.getViewCart().click()
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    poOms.getModalMainContainer().should('be.visible')
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()
})
Cypress.Commands.add('appointmentAndProduct', () => {
    const poOms = new omsElements()
    cy.wait(3500)
    poOms.getCitaButton().click({ force: true })
    cy.wait(1630)
    poOms.getProductsSection().click()
    poOms.getPastaDentalButton().should('be.visible').click()
    poOms.getViewCart().click()
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    poOms.getModalMainContainer().should('be.visible')
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()
})
Cypress.Commands.add('onlyProducts', () => {
    const poOms = new omsElements()
    cy.wait(3500)
    poOms.getProductsSection().click()
    cy.wait(2000)
    poOms.getPastaDentalButton().should('be.visible').click()
    cy.wait(3500)
    poOms.getEnjuagueBucal().should('be.visible').click()
    cy.wait(3600)
    poOms.getViewCart().click()
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    poOms.getModalMainContainer().should('be.visible')
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()

})
Cypress.Commands.add('deleteCart', () =>{
    const poOms = new omsElements()
    poOms.getMainSectionCart().should('be.visible')
    cy.fixture('omsData').then(function(data){
        this.data=data
        poOms.getFirstSection().should('be.visible').should('contain.text', this.data.titleFirstSection)
        poOms.getButtonEliminar().click()
        //poOms.getButtonForDeleteCart().click({force: true})
        // cy.get('.MuiButtonBase-root').each(($e1) => {
        //     const text=$e1.text()
        //     if(text.includes('Confirmar'))
        //     {
        //         cy.get($e1).click()
        //     }
        // })
        poOms.getButtonForDeleteCart().click()
        poOms.getTitleInCart().should('include.text', this.data.titleTres)
        cy.get('#createCartButton').should('be.visible')
    })
})
Cypress.Commands.add('globalSearchUserDeleteCartsMx', () => {
    const poOms = new omsElements()
    cy.fixture('omsData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.userToDeleteCarts)
        poOms.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poOms.getResult().should('be.visible')
        cy.wait(1750)
        poOms.getButtonResult().click()
        cy.wait(2100)
    })
})
Cypress.Commands.add('globalSearchTestUser', () => {
    const poOms = new omsElements()
    cy.fixture('omsData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.user2)
        poOms.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poOms.getResult().should('be.visible')
        cy.wait(1750)
        poOms.getButtonResult().click()
        cy.wait(2100)
    })
})
Cypress.Commands.add('createNewCart', () => {
    const poOms = new omsElements()
    poOms.getMainUserContainer().should('be.visible')
    poOms.getButtonCreateCart().should('be.visible').click()
    //cy.wait(20100)
    cy.fixture('omsData').then(function(data){
        this.data=data
        //poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct1)
        poOms.getListOfProducts()
        poOms.getListOfProducts().should('contain.text', this.data.listProduct2)
        poOms.getListOfProducts().should('contain.text', this.data.listProduct3)
        poOms.getListOfProducts().should('contain.text', this.data.listProduct4)
        poOms.getListOfProducts().should('contain.text', this.data.listProduct5)
    })
})
Cypress.Commands.add('globalSearchPayAppointment', () => {
    const poOms = new omsElements()
    cy.fixture('omsData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.cashPaymentUserMx01)
        poOms.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poOms.getResult().should('be.visible')
        cy.wait(1750)
        poOms.getButtonResult().click()
        cy.wait(2100)
    })
})
Cypress.Commands.add('globalSearchPayProducts', () => {
    const poOms = new omsElements()
    cy.fixture('omsData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.cashPaymentUserMx02)
        poOms.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poOms.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poOms.getResult().should('be.visible')
        cy.wait(1750)
        poOms.getButtonResult().click()
        cy.wait(2100)
    })
})

Cypress.Commands.add('createCartCash', () =>{
    const poOms = new omsElements()
    poOms.getViewCart().click()
    cy.fixture('omsData').then(function(data){
        this.data=data
        //poCartConfigurator.getPriceCartDetail().should('have.text', this.data.AppointmentPrice)
        poOms.getPriceCartDetail().each(($e1, index, $list) => {
            const v1= $e1.text()
            //const v3= $list.text()
            if(index == 9)
            {
                expect(v1).to.equal(this.data.CartPrice)
                // cy.log('-------------------------------------')
                // cy.log('valor de $e1 = ' + $e1 + ' texto = ' + v1)
                // cy.log('INDEX = ' + index)
                // cy.log('valor de $list' + $list + ' texto = ' + v3)
                // cy.log('-------------------------------------')
            }
        })
        poOms.getButtonConfirmCart().click()
    })
    
    // poCartConfigurator.getButtonConfirmCart().click()
    // cy.pause()
    // poCartConfigurator.getButtonRealizarPago().click()
    // poCartConfigurator.getButtonEfectivo().click()
    // cy.wait(2200)
    // poCartConfigurator.getModalMainContainerEfectivo().should('be.visible')
    // cy.pause()
    // poCartConfigurator.getButtonConfirmPayment().should('be.visible').click()
    // //cy.intercept()
    // cy.contains('Volver al inicio').should('be.visible').click({force:true})
    // //cy.reload()
    // poCartConfigurator.getButtonCreateCart().should('be.visible')
})