/// <reference types="Cypress"/>

import cartConfigurator from "../../PageObject/cartConfigurator"

describe('DEV - Validate the BACK of CartConfigurator getting some status from the APIs of Cart configrator', () =>{
    it('get status 200 from API GET all Carts ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET',  this.data.urlDev + this.data.apiGetAllCarts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Products ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllProducts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Inventory ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllInventory).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Customers ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllCustomers).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Payments ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllPayments).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Discounts ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllDiscounts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Orders ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET',this.data.urlDev +  this.data.apiGetAllOrders).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET checkout Health ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.devCheckout + this.data.apiCheckoutHealth).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
}) // End of describe

describe('DEV - Validate the FRONT of CartConfigurator creating and deleting CARTS to ensure the functionality ', () => {
    const devices = ["ipad-2"]
    devices.forEach((device) => {
        context ('CartConfigurator for MX', () => {
            beforeEach(function(){
                cy.viewport(device, 'landscape')
                cy.fixture('cartConfiguratorData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxCartConfiguratorDev)
                })//End Fixture
            })// End BeforeEach
            it('001 - CartConfigurator Login', () => {
                const poCartConfigurator = new cartConfigurator()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                    cy.loginIntoCartConfigurator()
                    poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                    poCartConfigurator.getGloblalSearch().should('be.visible')
                    poCartConfigurator.getSearchButton().should('be.disabled')
                })
            })// End of 001 - CartConfigurator Login
            it('002 - Search an user', () => {
                const poCartConfigurator = new cartConfigurator()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                poCartConfigurator.getEmail().should('be.visible').type(this.data.userMailDev)
                poCartConfigurator.getPassword().should('be.visible').type(this.data.userPassDev)
                poCartConfigurator.getLogin().should('be.enabled').click()
                cy.wait(1500)
                poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.testUserMx)
                poCartConfigurator.getSearchButton().click()
                cy.wait(800)
                poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                poCartConfigurator.getResult().should('be.visible')
                
                })
            })// End of 002 - Search an user
            it('003 - Search an user and open the default options', () => {
                const poCartConfigurator = new cartConfigurator()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                cy.fixture('cartConfiguratorData').then(function(data){
                poCartConfigurator.getEmail().should('be.visible').type(this.data.userMailDev)
                poCartConfigurator.getPassword().should('be.visible').type(this.data.userPassDev)
                poCartConfigurator.getLogin().should('be.enabled').click()
                cy.wait(1500)
                poCartConfigurator.getMainContainer().should('contain.text', this.data.titleUno)
                poCartConfigurator.getGloblalSearch().should('be.visible').type(this.data.testUserMx)
                poCartConfigurator.getSearchButton().click()
                cy.wait(800)
                poCartConfigurator.getSecondTitle().should('be.visible').should('contain.text', this.data.titleDos)
                poCartConfigurator.getResult().should('be.visible')
                poCartConfigurator.getButtonResult().click()
                cy.wait(750)
                poCartConfigurator.getMainUserContainer().should('be.visible')
                
                })
            })// End of 003 - Search an user and go inside
            it('004 - Create cart with only- Cita', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.cartAppointment()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 004 - Cart- Appointment
            it('005 - Cart- Alineadores Apartado 2,000', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.alineadoresA_1()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 004 - Cart- Alineadores Apartado 2,000
            it('006 - Cart- Alineadores Apartado 5,000', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.alineadoresA_2()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 005 - Cart- Alineadores Apartado 5,000
            it('007 - Cart- Alineadores Pago Complementario  2,000', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.alineadoresPC_1()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 007 - Cart- Pago Complementario Apartado 2,000
            it('008 - Cart- Alineadores Pago Complementario  5,000', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.alineadoresPC_2()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 007 - Cart- Pago Complementario Apartado 2,000
            it('008 - Cart- Alineadores With Liquidation', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.alineadoresLiquidation()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 007 - Cart- Pago Complementario Apartado 2,000
            it('009 - Cart- Create a cart with an Appointment and product', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.appointmentAndProduct()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 004 - Cart- Appointment
            it('010 - Cart- Create a cart with only Products', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchUserDeleteCartsMx()
                cy.createNewCart()
                cy.onlyProducts()
                cy.createPaymentLink()
                cy.deleteCart()
            })// End of 004 - Cart- Appointment
        })// End Context
    })// End devices
})//End Describe

describe('DEV - Validate the functionality of Payment Carts with Cash', () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["ipad-2"]
    devices.forEach((device) => {
        context ('MX - CartConfigurator - Cash', () => {
            beforeEach(function(){
                cy.viewport(device, 'landscape')
                cy.fixture('cartConfiguratorData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxCartConfiguratorDev)
                })//End Fixture
            })// End BeforeEach
            it('001 - Cart- Pay with cash an appointment', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchPayAppointment()
                cy.createNewCart()
                cy.appointmentAndProduct()
                cy.createCartCash()
                cy.PayCartWithCash()
            })// End of 004 - Cart- Appointment
            it('002 - Cart- Verify the payment with cash', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchPayAppointment()
                cy.ValidatePaymentWitCash()
            })// End of 004 - Cart- Appointment
        })// End Context
    })// End devices
})//End Describe

describe.skip('DEV - Validate the functionality of Payment Carts with the new checkout', () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["ipad-2"]
    devices.forEach((device) => {
        context ('MX - CartConfigurator - Cash', () => {
            beforeEach(function(){
                cy.viewport(device, 'landscape')
                cy.fixture('cartConfiguratorData').then(function(data){
                    this.data=data
                    cy.visit(this.data.mxCartConfiguratorDev)
                })//End Fixture
            })// End BeforeEach
            it('visit', () => {
                //cy.visit('https://checkout.v3.moons.rocks/?clinicId=undefined&agentId=rFnndbYvVj&agentName=Cesar%20Lim%C3%B3n&cart=76221655-672a-4fef-9cb5-04357197f079&name=Sam%20Heaney&origin=payment-links&customerId=EQV87HKR')
                //cy.visit('https://checkout.v3.moons.rocks/?clinicId=undefined&agentId=rFnndbYvVj&agentName=Cesar%20Lim%C3%B3n&cart=                                    &name=Verlie%20Considine&origin=payment-links&customerId=WDFANA9Q')
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                  })
            })
            it('004 - Cart- Cita visiting the new checkout', () => {
                cy.loginIntoCartConfigurator()
                cy.globalSearchTestUser()
                cy.wait(750)
                cy.createNewCart()
                cy.cartAppointment()
                cy.wait(1321)
                //cy.createPaymentLink()
                const poCartConfigurator = new cartConfigurator()
                poCartConfigurator.getViewCart().click()
                cy.wait(900)
                poCartConfigurator.getButtonConfirmCart().click()
                poCartConfigurator.getButtonRealizarPago().click()
                poCartConfigurator.getButtonLinkPago().click()
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                    const newUrl = $e1.text()
                    // cy.log($e1)
                    // cy.log('--')
                    // cy.log(index)
                    // cy.log('--')
                    // cy.log(newUrl)
                    // cy.log('----------------')
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
                        //cy.wait(4000)
                        //cy.reload()
                        //cy.wait(4000)
                        //cy.visit(newUrl)
                    }
                })

            })// End of 004 - Cart- Appointment
        })// End Context
    })// End devices
})//End Describe