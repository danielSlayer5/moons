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

// Alternatively you can use CommonJS syntax:
// require('./commands')
import mxQuizElements from "../e2e/PageObject/quizPageObject"
import mxNewCheckoutElements from "../e2e/PageObject/newCheckoutPageObject"
import cartConfigurator from "../e2e/PageObject/cartConfigurator"


Cypress.Commands.add('addFakeMailMx', () =>{
    const uuid = () => Cypress._.random(0, 1e4);
    const mail = uuid();
    const emailFake = `userTest.${mail}@cypress.mx`;
    
    const poMxQuiz = new mxQuizElements()
    cy.log(emailFake)
    poMxQuiz.getCampoCorreo().type(emailFake)
})

Cypress.Commands.add('addFakeMailCo', () =>{
    const uuid = () => Cypress._.random(0, 1e4);
    const mail = uuid();
    const emailFake = `userTest.${mail}@cypress.co`;
    
    const poMxQuiz = new mxQuizElements()
    cy.log(emailFake)
    poMxQuiz.getCampoCorreo().type(emailFake)
})

Cypress.Commands.add('addFakeMailPe', () =>{
    const uuid = () => Cypress._.random(0, 1e4);
    const mail = uuid();
    const emailFake = `userTest.${mail}@cypress.pe`;
    
    const poMxQuiz = new mxQuizElements()
    cy.log(emailFake)
    poMxQuiz.getCampoCorreo().type(emailFake)
})
Cypress.Commands.add('addFakeNumber', () =>{
    const uuid = () => Cypress._.random(0, 1e10);
    const phone = uuid();
    const numberFake = `${phone}`;
    
    const poMxQuiz = new mxQuizElements()

    cy.log(numberFake)
    poMxQuiz.getCampoWhatsApp().type(numberFake)
})

Cypress.Commands.add('addCorrectNumber', () =>{
    const uuid = () => Cypress._.random(0, 1e11);
    const phone = uuid();
    const numberCorrect = `${phone}`;
    
    const poMxQuiz = new mxQuizElements()
    cy.log(numberCorrect)
    poMxQuiz.getCampoWhatsApp().type(numberCorrect)
})
Cypress.Commands.add('addCorrectNumberPe', () =>{
    const uuid = () => Cypress._.random(0, 1e11);
    const phone = uuid();
    const numberCorrect = `${phone}`;
    
    const poMxQuiz = new mxQuizElements()
    cy.log(numberCorrect)
    poMxQuiz.getCampoWhatsAppPe().type(numberCorrect)
})
Cypress.Commands.add('addCorrectNumberCo', () =>{
    const uuid = () => Cypress._.random(0, 1e10);
    const phone = uuid();
    const numberCorrect = `${phone}`;
    
    const poMxQuiz = new mxQuizElements()
    cy.log(numberCorrect)
    cy.wait(1000)
    poMxQuiz.getCampoWhatsApp().type(numberCorrect)
    cy.wait(1000)
})

Cypress.Commands.add('addCorrectCard', () =>{
    const poMxNewCheckout = new mxNewCheckoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        cy.wait(3500)
        poMxNewCheckout.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poMxNewCheckout.getFieldCardNumber().type(this.data.creditCard)
        cy.wait(1500)
        poMxNewCheckout.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poMxNewCheckout.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectCardStripe', () =>{
    const poMxNewCheckout = new mxNewCheckoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        cy.wait(3500)
        poMxNewCheckout.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poMxNewCheckout.getFieldCardNumber().type(this.data.creditCardStripe)
        cy.wait(1500)
        poMxNewCheckout.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poMxNewCheckout.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectCardConekta', () =>{
    const poMxNewCheckout = new mxNewCheckoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        cy.wait(3500)
        poMxNewCheckout.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poMxNewCheckout.getFieldCardNumber().type(this.data.creditCardConekta)
        cy.wait(1500)
        poMxNewCheckout.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poMxNewCheckout.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectCardCo', () =>{
    const poMxNewCheckout = new mxNewCheckoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poMxNewCheckout.getSelectorBank().click()
        poMxNewCheckout.getFieldType().click()
        poMxNewCheckout.getFieldNumber().type(this.data.coCedulaNumb)
        cy.wait(3500)
        poMxNewCheckout.getFieldName().type(this.data.nameComplete)
        cy.wait(1500)
        poMxNewCheckout.getFieldCardNumber().type(this.data.creditCard)
        cy.wait(1500)
        poMxNewCheckout.getFieldMonthYear().type(this.data.monthYear)
        cy.wait(1500)
        poMxNewCheckout.getFieldCvc().type(this.data.cvc)
    })
})

Cypress.Commands.add('addCorrectPseData', () =>{
    const poMxNewCheckout = new mxNewCheckoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poMxNewCheckout.getFieldBank().click()
        poMxNewCheckout.getFieldType().click()
        poMxNewCheckout.getFieldClientType().click()
        poMxNewCheckout.getFieldClientOption().click()
        poMxNewCheckout.getIdType().click()
        poMxNewCheckout.getIdOption().click()
        poMxNewCheckout.getFieldDocumentNumber().type(this.data.coCedulaNumb)
    })
})

Cypress.Commands.add('addCorrectDirectionCo', () =>{
    const poMxNewCheckout = new mxNewCheckoutElements()
    cy.fixture('creditCardsData').then(function(data){
        this.data=data
        poMxNewCheckout.getButtonAddDirection().click()

        poMxNewCheckout.getStreet().type(this.data.coStreet)
        poMxNewCheckout.getAddressNumber().type(this.data.coAddressNumber)
        poMxNewCheckout.getState().type(this.data.coState)
        poMxNewCheckout.getNeighborhood().type(this.data.coNeighborhood)
        poMxNewCheckout.getDepartment().type(this.data.coDepartment)

        cy.wait(1200)
        poMxNewCheckout.getButtonSaveAddress().click()
    })
})

Cypress.Commands.add('loginIntoCartConfigurator', () =>{
    const poCartConfigurator = new cartConfigurator()
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
    })
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poCartConfigurator.getEmail().should('be.visible').type(this.data.userMailDev)
        poCartConfigurator.getPassword().should('be.visible').type(this.data.userPassDev)
        poCartConfigurator.getLogin().should('be.enabled').click()
        cy.wait(2300)
    })
})

Cypress.Commands.add('cartAppointment', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.wait(3500)
    poCartConfigurator.getCitaButton().click({ force: true })
    cy.wait(1150)
})
Cypress.Commands.add('cartAppointment', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.wait(3500)
    poCartConfigurator.getCitaButton().click({ force: true })
    cy.wait(1150)
})
Cypress.Commands.add('globalSearchUserMx', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.fixture('cartConfiguratorData').then(function(data){
        poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
        poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.testAppointment)
        poCartConfigurator.getSearchButton().click()
        cy.wait(1500)
        poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poCartConfigurator.getResult().should('be.visible')
        cy.wait(1750)
        poCartConfigurator.getButtonResult().click()
    })
})
Cypress.Commands.add('globalSearchUserDeleteCartsMx', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.fixture('cartConfiguratorData').then(function(data){
        poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
        poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.userDeleteCarts)
        poCartConfigurator.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poCartConfigurator.getResult().should('be.visible')
        cy.wait(1750)
        poCartConfigurator.getButtonResult().click()
        cy.wait(2100)
    })
})
Cypress.Commands.add('globalSearchTestUser', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.fixture('cartConfiguratorData').then(function(data){
        poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
        poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.user2)
        poCartConfigurator.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poCartConfigurator.getResult().should('be.visible')
        cy.wait(1750)
        poCartConfigurator.getButtonResult().click()
        cy.wait(2100)
    })
})
Cypress.Commands.add('createNewCart', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getMainUserContainer().should('be.visible')
    poCartConfigurator.getButtonCreateCart().should('be.visible').click()
    //cy.wait(20100)
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        //poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct1)
        poCartConfigurator.getListOfProducts()
        poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct2)
        poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct3)
        poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct4)
        poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct5)
    })
})
Cypress.Commands.add('appointmentAndProduct', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.wait(3500)
    //poCartConfigurator.getMainUserContainer().should('be.visible')
    //poCartConfigurator.getButtonCreateCart().should('be.visible').click()
    poCartConfigurator.getCitaButton().click({ force: true })
    cy.wait(1630)
    poCartConfigurator.getProductsSection().click()
    poCartConfigurator.getPastaDentalButton().should('be.visible').click()
    cy.wait(1500)
})
Cypress.Commands.add('alineadoresA_1', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poCartConfigurator.getChoosePayment().click()
    cy.wait(300)
    poCartConfigurator.getApartadoButton().click()
    cy.wait(400)
    poCartConfigurator.getAmountButton1().click()
    cy.wait(500)
    poCartConfigurator.getAddToCart().click()
})
Cypress.Commands.add('alineadoresA_2', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poCartConfigurator.getChoosePayment().click()
    cy.wait(300)
    poCartConfigurator.getApartadoButton().click()
    cy.wait(400)
    poCartConfigurator.getAmountButton3().click()
    cy.wait(500)
    poCartConfigurator.getAddToCart().click()
})
Cypress.Commands.add('alineadoresPC_1', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poCartConfigurator.getChoosePayment().click()
    cy.wait(300)
    poCartConfigurator.getPagoComplementarioButton().click()
    cy.wait(400)
    poCartConfigurator.getAmountButton1().click()
    cy.wait(500)
    poCartConfigurator.getAddToCart().click()
})
Cypress.Commands.add('alineadoresPC_2', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poCartConfigurator.getChoosePayment().click()
    cy.wait(300)
    poCartConfigurator.getPagoComplementarioButton().click()
    cy.wait(400)
    poCartConfigurator.getAmountButton3().click()
    cy.wait(500)
    poCartConfigurator.getAddToCart().click()
})
Cypress.Commands.add('alineadoresLiquidation', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poCartConfigurator.getChoosePayment().click()
    cy.wait(300)
    poCartConfigurator.getLiquidacionButton().click()
    cy.wait(500)
    poCartConfigurator.getAddToCart().click()
})
Cypress.Commands.add('onlyProducts', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.wait(3500)
    poCartConfigurator.getProductsSection().click()
    cy.wait(2000)
    poCartConfigurator.getPastaDentalButton().should('be.visible').click()
    cy.wait(3500)
    poCartConfigurator.getEnjuagueBucal().should('be.visible').click()
    cy.wait(3600)

})
Cypress.Commands.add('createPaymentLink', () => {
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getViewCart().click()
    cy.wait(900)
    poCartConfigurator.getButtonConfirmCart().click()
    poCartConfigurator.getButtonRealizarPago().click()
    poCartConfigurator.getButtonLinkPago().click()
    cy.wait(2200)
    poCartConfigurator.getModalMainContainer().should('be.visible')
})
Cypress.Commands.add('deleteCart', () =>{
    const poCartConfigurator = new cartConfigurator()
    cy.wait(2310)
    poCartConfigurator.getCloseButtonModalContainer().click()
    poCartConfigurator.getButtonVolverAlInicio().click()
    cy.wait(3400)
    poCartConfigurator.getMainSectionCart().should('be.visible')
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poCartConfigurator.getFirstSection().should('be.visible').should('contain.text', this.data.titleFirstSection)
    })
    cy.wait(2300)
    poCartConfigurator.getButtonEliminar().click()
    cy.wait(1201)
    poCartConfigurator.getButtonForDeleteCart().click()
    cy.get('.MuiTabPanel-root > :nth-child(1)').should('contain.text', 'Aún no tienes carritos activos')
    cy.wait(1101)
    cy.get('#createCartButton').should('be.visible')
})
Cypress.Commands.add('globalSearchPayAppointment', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.fixture('cartConfiguratorData').then(function(data){
        poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
        poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.paymentCashTestUserMx01)
        poCartConfigurator.getSearchButton({timeout:5000}).click()
        cy.wait(1500)
        poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
        poCartConfigurator.getResult().should('be.visible')
        cy.wait(1750)
        poCartConfigurator.getButtonResult().click()
        cy.wait(2100)
    })
})
Cypress.Commands.add('createCartCash', () =>{
    const poCartConfigurator = new cartConfigurator()
    poCartConfigurator.getViewCart().click()
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        //poCartConfigurator.getPriceCartDetail().should('have.text', this.data.AppointmentPrice)
        poCartConfigurator.getPriceCartDetail().each(($e1, index, $list) => {
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
        poCartConfigurator.getButtonConfirmCart().click()
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
Cypress.Commands.add('PayCartWithCash', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poCartConfigurator.getButtonRealizarPago().click()
        poCartConfigurator.getButtonEfectivo().click()
        poCartConfigurator.getModalMainContainerEfectivo().should('be.visible')
        poCartConfigurator.getButtonConfirmPayment().click()
        cy.wait(3000)
        poCartConfigurator.getAmountToDeliver().should('be.visible').click()
        poCartConfigurator.getSelectOneToDeliver().click()
        poCartConfigurator.getConfirmButton().should('be.enabled').click()
        poCartConfigurator.getButtonVolverAlInicio().should('be.visible').click({force: true})
        poCartConfigurator.getMainContainerNoCarts().should('be.visible').and('contain.text', this.data.titleTres)
    })
})
Cypress.Commands.add('ValidatePaymentWitCash', () => {
    const poCartConfigurator = new cartConfigurator()
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poCartConfigurator.getSectionPagados().click()
        poCartConfigurator.getPaidCartCard().should('be.visible')
        poCartConfigurator.getButtonViewDetails().should('be.visible').click()
        poCartConfigurator.getDetailsCart().should('be.visible')
        poCartConfigurator.getPriceCartDetail().each(($e1, index, $list) => {
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
    })
})
Cypress.Commands.add('loginGlobalRetail', () => {
    cy.fixture('appRetail').then(function(){
        this.data=this.data
        cy.get('.sc-khIhcJ', {timeout:10000}).each(($e1, index, $list) => {
            cy.wrap($e1).type(this.data.userMoonsOs)
        })
        cy.get('#qcy3g0g1tm > .sc-vMGFs > [data-testid="input-container"] > .sc-khIhcJ > .sc-cOohqI > .bp3-popover-wrapper > .bp3-popover-target > .bp3-input-group > .bp3-input', {timeout:6000}).clear().type(this.data.passMoonsOs)
        cy.get('.sc-kSyTsM').click()
    })
})
