/// <reference types="Cypress"/>

import omsElements from "../../PageObject/omsPO"

describe('OMS - Pay two products with CASH', () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["ipad-2"]
    devices.forEach((device) => {
        context ('MX - Pay Products', () => {
            beforeEach(function(){
                cy.viewport(device, 'landscape')
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('OMS - Pay two products with CASH', () => {
                const poOms = new omsElements()
                cy.visit('https://dev-custom-payments-generator.web.app/login')
                cy.loginIntoCartConfigurator()
                // BUSQUEDA DE USUARIO
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getButtonResult().click()
                // INSIDE THE USER
                cy.createNewCart()
                cy.onlyProducts()
                cy.fixture('omsData').then(function(data){
                    this.data=data
                    poOms.getButtonRealizarPago().click()
                    // PAYMENT
                    poOms.getPagoOfflineButton().click()
                    //OFF LINE PAYMENT
                    poOms.getPaymentMethodCash().click()
                    poOms.getMercadoPagoCash().click()
                    cy.createNewTicketNumber()
                    poOms.getSelectFile().click()
                    //poOms.getButtonEfectivo().click()
                    // poOms.getModalMainContainerEfectivo().should('be.visible')
                    // cy.wait(3000)
                    // poOms.getButtonConfirmPayment().click()
                    // poOms.getAmountToDeliver().should('be.visible').click()
                    // poOms.getSelectOneToDeliver().click()

                    // poOms.getAmount2ToDeliver().click()
                    // poOms.getSelectOneToDeliver().click()
                    // poOms.getConfirmButton().should('be.enabled').click()
                    // poOms.getButtonVolverAlInicio().should('be.visible').click({force: true})
                    // poOms.getMainContainerNoCarts().should('be.visible').and('contain.text', this.data.titleTres)
                })
            })// End of 004 - Cart- Appointment
        })// End Context
    })// End devices
})//End Describe