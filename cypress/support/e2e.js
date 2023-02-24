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
import quizElements from "../e2e/PageObject/quizPO"
import checkoutElements from "../e2e/PageObject/checkoutV3PO"
import omsElements from "../e2e/PageObject/omsPO"


Cypress.Commands.add('addFakeMailMx', () =>{
    const uuid = () => Cypress._.random(0, 1e4);
    const mail = uuid();
    const emailFake = `userTest.${mail}@cypress.mx`;
    const poQuiz = new quizElements()

    cy.log(emailFake)
    poQuiz.getCampoCorreo().type(emailFake)
})

Cypress.Commands.add('addFakeMailCo', () =>{
    const uuid = () => Cypress._.random(0, 1e4);
    const mail = uuid();
    const emailFake = `userTest.${mail}@cypress.co`;
    
    const poQuiz = new quizElements()
    cy.log(emailFake)
    poQuiz.getCampoCorreo().type(emailFake)
})

Cypress.Commands.add('addFakeMailPe', () =>{
    const uuid = () => Cypress._.random(0, 1e4);
    const mail = uuid();
    const emailFake = `userTest.${mail}@cypress.pe`;
    const poQuiz = new quizElements()

    cy.log(emailFake)
    poQuiz.getCampoCorreo().type(emailFake)
})
Cypress.Commands.add('addFakeNumber', () =>{
    const uuid = () => Cypress._.random(0, 1e10);
    const phone = uuid();
    const numberFake = `${phone}`;
    const poQuiz = new quizElements()

    cy.log(numberFake)
    poQuiz.getCampoWhatsApp().type(numberFake)
})

Cypress.Commands.add('addCorrectNumber', () =>{
    const uuid = () => Cypress._.random(0, 1e11);
    const phone = uuid();
    const numberCorrect = `${phone}`;
    const poQuiz = new quizElements()

    cy.log(numberCorrect)
    poQuiz.getCampoWhatsApp().type(numberCorrect)
})
Cypress.Commands.add('addCorrectNumberPe', () =>{
    const uuid = () => Cypress._.random(0, 1e11);
    const phone = uuid();
    const numberCorrect = `${phone}`;
    const poQuiz = new quizElements()

    cy.log(numberCorrect)
    poQuiz.getCampoWhatsAppPe().type(numberCorrect)
})
Cypress.Commands.add('addCorrectNumberCo', () =>{
    const uuid = () => Cypress._.random(0, 1e10);
    const phone = uuid();
    const numberCorrect = `${phone}`;
    const poQuiz = new quizElements()

    cy.log(numberCorrect)
    cy.wait(1000)
    poQuiz.getCampoWhatsApp().type(numberCorrect)
    cy.wait(1000)
})

Cypress.Commands.add('addCorrectCard', () =>{
    const poCheckoutV3 = new checkoutElements()

    cy.fixture('creditCardsData').then(function(data){
        this.data=data
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
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poOms.getEmail().should('be.visible').type(this.data.userMailDev)
        poOms.getPassword().should('be.visible').type(this.data.userPassDev)
        poOms.getLogin().should('be.enabled').click()
        cy.wait(2300)
    })
})

Cypress.Commands.add('cartAppointment', () => {
    const poOms = new omsElements()
    cy.wait(3500)
    poOms.getCitaButton().click({ force: true })
    cy.wait(1150)
})
Cypress.Commands.add('cartAppointment', () => {
    const poCartConfigurator = new omsElements()
    cy.wait(3500)
    poCartConfigurator.getCitaButton().click({ force: true })
    cy.wait(1150)
})
Cypress.Commands.add('globalSearchUserMx', () => {
    const poOms = new omsElements()
    cy.fixture('cartConfiguratorData').then(function(data){
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
Cypress.Commands.add('globalSearchUserDeleteCartsMx', () => {
    const poOms = new omsElements()
    cy.fixture('cartConfiguratorData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.userDeleteCarts)
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
    cy.fixture('cartConfiguratorData').then(function(data){
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
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        //poCartConfigurator.getListOfProducts().should('contain.text', this.data.listProduct1)
        poOms.getListOfProducts()
        poOms.getListOfProducts().should('contain.text', this.data.listProduct2)
        poOms.getListOfProducts().should('contain.text', this.data.listProduct3)
        poOms.getListOfProducts().should('contain.text', this.data.listProduct4)
        poOms.getListOfProducts().should('contain.text', this.data.listProduct5)
    })
})
Cypress.Commands.add('appointmentAndProduct', () => {
    const poOms = new omsElements()
    cy.wait(3500)
    //poCartConfigurator.getMainUserContainer().should('be.visible')
    //poCartConfigurator.getButtonCreateCart().should('be.visible').click()
    poOms.getCitaButton().click({ force: true })
    cy.wait(1630)
    poOms.getProductsSection().click()
    poOms.getPastaDentalButton().should('be.visible').click()
    cy.wait(1500)
})
Cypress.Commands.add('alineadoresA_1', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    cy.wait(300)
    poOms.getApartadoButton().click()
    cy.wait(400)
    poOms.getAmountButton1().click()
    cy.wait(500)
    poOms.getAddToCart().click()
})
Cypress.Commands.add('alineadoresA_2', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    cy.wait(300)
    poOms.getApartadoButton().click()
    cy.wait(400)
    poOms.getAmountButton3().click()
    cy.wait(500)
    poOms.getAddToCart().click()
})
Cypress.Commands.add('alineadoresPC_1', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    cy.wait(300)
    poOms.getPagoComplementarioButton().click()
    cy.wait(400)
    poOms.getAmountButton1().click()
    cy.wait(500)
    poOms.getAddToCart().click()
})
Cypress.Commands.add('alineadoresPC_2', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    cy.wait(300)
    poOms.getPagoComplementarioButton().click()
    cy.wait(400)
    poOms.getAmountButton3().click()
    cy.wait(500)
    poOms.getAddToCart().click()
})
Cypress.Commands.add('alineadoresLiquidation', () => {
    const poOms = new omsElements()
    poOms.getAlineadoresButton().click({ force: true })
    cy.wait(1300)
    poOms.getChoosePayment().click()
    cy.wait(300)
    poOms.getLiquidacionButton().click()
    cy.wait(500)
    poOms.getAddToCart().click()
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

})
Cypress.Commands.add('createPaymentLink', () => {
    const poOms = new omsElements()
    poOms.getViewCart().click()
    cy.wait(900)
    poOms.getButtonConfirmCart().click()
    poOms.getButtonRealizarPago().click()
    poOms.getButtonLinkPago().click()
    cy.wait(2200)
    poOms.getModalMainContainer().should('be.visible')
})
Cypress.Commands.add('deleteCart', () =>{
    const poOms = new omsElements()
    cy.wait(2310)
    poOms.getCloseButtonModalContainer().click()
    poOms.getButtonVolverAlInicio().click()
    cy.wait(3400)
    poOms.getMainSectionCart().should('be.visible')
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poOms.getFirstSection().should('be.visible').should('contain.text', this.data.titleFirstSection)
    })
    cy.wait(2300)
    poOms.getButtonEliminar().click()
    cy.wait(1201)
    poOms.getButtonForDeleteCart().click()
    cy.get('.MuiTabPanel-root > :nth-child(1)').should('contain.text', 'Aún no tienes carritos activos')
    cy.wait(1101)
    cy.get('#createCartButton').should('be.visible')
})
Cypress.Commands.add('globalSearchPayAppointment', () => {
    const poOms = new omsElements()
    cy.fixture('cartConfiguratorData').then(function(data){
        poOms.getMainContainer().should('contain.text', this.data.titleUno)
        poOms.getGloblalSearch().should('be.visible').type(this.data.paymentCashTestUserMx01)
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
    cy.fixture('cartConfiguratorData').then(function(data){
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
Cypress.Commands.add('PayCartWithCash', () => {
    const v = new omsElements()
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poOms.getButtonRealizarPago().click()
        poOms.getButtonEfectivo().click()
        poOms.getModalMainContainerEfectivo().should('be.visible')
        poOms.getButtonConfirmPayment().click()
        cy.wait(3000)
        poOms.getAmountToDeliver().should('be.visible').click()
        poOms.getSelectOneToDeliver().click()
        poOms.getConfirmButton().should('be.enabled').click()
        poOms.getButtonVolverAlInicio().should('be.visible').click({force: true})
        poOms.getMainContainerNoCarts().should('be.visible').and('contain.text', this.data.titleTres)
    })
})
Cypress.Commands.add('ValidatePaymentWitCash', () => {
    const poOms = new omsElements()
    cy.fixture('cartConfiguratorData').then(function(data){
        this.data=data
        poOms.getSectionPagados().click()
        poOms.getPaidCartCard().should('be.visible')
        poOms.getButtonViewDetails().should('be.visible').click()
        poOms.getDetailsCart().should('be.visible')
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
