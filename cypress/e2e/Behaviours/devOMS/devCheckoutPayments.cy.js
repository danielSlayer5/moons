/// <reference types="Cypress"/>

import omsElements from "../../PageObject/omsPO"
import checkoutElements from "../../PageObject/checkoutV3PO"
import newThankYouPage from "../../PageObject/newThankYouPagePO"
//npx cypress run --record --key 62418e84-7fbd-4ce5-a2c4-f5440a0e75f9
const environment = Cypress.env('omsDev')

describe('OMS - Pay LITE treatment', { retries: 2 }, () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('MX - OMS', () => {
            beforeEach(function(){
                cy.clearCookies()
                cy.clearLocalStorage()
                cy.viewport(device)
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('Pay LITE treatment', () => {
                cy.visit(environment)
                const poOms = new omsElements()
                const pocheckoutV3 = new checkoutElements()
                const poNewThankYouPage = new newThankYouPage()
                //cy.visit(environment)
                cy.loginIntoCartConfigurator()
                // -- BUSQUEDA DE USUARIO --
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getResult().should('be.visible')
                poOms.getButtonResult().click()
                // -- CREATE CART
                poOms.getButtonCreateCart().click()
                // Seleccionar ALINEADORES en el MODAL
                poOms.getAlineadoresButton().click()
                poOms.getChoosePayment().click()
                poOms.getLiquidacionButton().click()
                poOms.getAddToCart().click()
                // VER CARRITO
                poOms.getViewCart().should('be.enabled').click()
                // CONFIRMAR CARRITO
                poOms.getButtonConfirmCart().click()
                // REALIZAR PAGO
                poOms.getButtonRealizarPago().click()
                poOms.getButtonLinkPago().click()
                cy.wait(5000)
                // OBTENER LINK DE PAGO E INGRESAR AL CHECKOUT V3
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                const newUrl = $e1.text()
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                        return false
                        })
                    }
                })
                // CHECKOUT V3
                pocheckoutV3.getButtonPagar().should('be.visible')
                pocheckoutV3.getButtonAddDirection().should('be.visible')
                cy.addCorrectDirectionMx()
                cy.addCorrectCard()
                pocheckoutV3.getButtonPagar().click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                poNewThankYouPage.getNButtonIrAMiCuenta().should('be.visible')
            })
        })// End Context
    })// End devices
})//End Describe
describe('OMS - Pay LITE treatment with referral discount added in OMS', { retries: 2 }, () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('MX - OMS', () => {
            beforeEach(function(){
                cy.clearCookies()
                cy.clearLocalStorage()
                cy.viewport(device)
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('Pay LITE treatment with referral discount added in OMS', () => {
                cy.visit(environment)
                const poOms = new omsElements()
                const pocheckoutV3 = new checkoutElements()
                const poNewThankYouPage = new newThankYouPage()
                //cy.visit(environment)
                cy.loginIntoCartConfigurator()
                // BUSQUEDA DE USUARIO
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getResult().should('be.visible')
                poOms.getButtonResult().click()
                // -- CREATE CART
                poOms.getButtonCreateCart().click()
                // Seleccionar ALINEADORES en el MODAL
                poOms.getAlineadoresButton().click()
                poOms.getChoosePayment().click()
                poOms.getLiquidacionButton().click()
                poOms.getAddToCart().click()
                // VER CARRITO
                poOms.getViewCart().should('be.enabled').click()
                // ADD COUPON
                poOms.getAddCuponOms().click()
                cy.fixture('omsData').then(function(data){
                    this.data=data
                    poOms.getAddMainCupon().should('be.visible').type(this.data.cuponMXReferall)
                    poOms.getAddCodeCupon().should('be.visible').type(this.data.cuponMXCode)
                })
                poOms.getButtonAplicateCupon().click()
                poOms.getCuponContainer().should('be.visible')
                // CONFIRMAR CARRITO
                poOms.getButtonConfirmCart().click()
                // REALIZAR PAGO
                poOms.getButtonRealizarPago().click()
                poOms.getButtonLinkPago().click()
                cy.wait(5000)
                // OBTENER LINK DE PAGO E INGRESAR AL CHECKOUT V3
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                    const newUrl = $e1.text()
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
                    }
                })
                // CHECKOUT V3
                pocheckoutV3.getButtonPagar().should('be.visible')
                pocheckoutV3.getButtonAddDirection().should('be.visible')
                cy.addCorrectDirectionMx()
                cy.addCorrectCard()
                pocheckoutV3.getButtonPagar().click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                poNewThankYouPage.getNButtonIrAMiCuenta().should('be.visible')
            })
        })// End Context
    })// End devices
})//End Describe
describe('OMS - Pay LITE treatment with referral discount added in Checkout', { retries: 2 }, () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('MX - OMS', () => {
            beforeEach(function(){
                cy.clearCookies()
                cy.clearLocalStorage()
                cy.viewport(device)
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('Pay LITE treatment with referral discount added in Checkout', () => {
                cy.visit(environment)
                const poOms = new omsElements()
                const pocheckoutV3 = new checkoutElements()
                const poNewThankYouPage = new newThankYouPage()
                //cy.visit(environment)
                cy.loginIntoCartConfigurator()
                // BUSQUEDA DE USUARIO
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getResult().should('be.visible')
                poOms.getButtonResult().click()
                // -- CREATE CART
                poOms.getButtonCreateCart().click()
                // Seleccionar ALINEADORES en el MODAL
                poOms.getAlineadoresButton().click()
                poOms.getChoosePayment().click()
                poOms.getLiquidacionButton().click()
                poOms.getAddToCart().click()
                // VER CARRITO
                poOms.getViewCart().should('be.enabled').click()
                // CONFIRMAR CARRITO
                poOms.getButtonConfirmCart().click()
                // REALIZAR PAGO
                poOms.getButtonRealizarPago().click()
                poOms.getButtonLinkPago().click()
                cy.wait(5000)
                // OBTENER LINK DE PAGO E INGRESAR AL CHECKOUT V3
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                    const newUrl = $e1.text()
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
                    }
                })
                // CHECKOUT V3
                pocheckoutV3.getButtonPagar().should('be.visible')
                pocheckoutV3.getButtonAddDirection().should('be.visible')
                cy.addCorrectDirectionMx()
                // AGREGAR CUPÓN
                cy.fixture('omsData').then(function(data){
                    this.data = data
                    pocheckoutV3.getCuponfield().should('be.visible').type(this.data.cuponMXReferall)
                    pocheckoutV3.getCuponCode().should('be.visible').type(this.data.cuponMXCode)
                })
                pocheckoutV3.getAplicateButton().click()
                //
                pocheckoutV3.getMainModalCoupon().should('be.visible')
                pocheckoutV3.getMainModalCouponButton().click()
                //
                cy.addCorrectCard()
                pocheckoutV3.getButtonPagar().click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                poNewThankYouPage.getNButtonIrAMiCuenta().should('be.visible')
            })
        })// End Context
    })// End devices
})//End Describe
describe('OMS - Pay VIP treatment', { retries: 2 }, () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('MX - OMS', () => {
            beforeEach(function(){
                cy.clearCookies()
                cy.clearLocalStorage()
                cy.viewport(device)
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('Pay VIP treatment', () => {
                cy.visit(environment)
                const poOms = new omsElements()
                const pocheckoutV3 = new checkoutElements()
                const poNewThankYouPage = new newThankYouPage()
                cy.loginIntoCartConfigurator()
                // BUSQUEDA DE USUARIO
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getResult().should('be.visible')
                poOms.getButtonResult().click()
                // -- CREATE CART
                poOms.getButtonCreateCart().click()
                // Seleccionar ALINEADORES en el MODAL
                poOms.getAlineadoresButton().click()
                poOms.getAlineadoresVIP().click()
                poOms.getChoosePayment().click()
                poOms.getLiquidacionButtonVip().click()
                poOms.getAddToCart().click()
                // VER CARRITO
                poOms.getViewCart().should('be.enabled').click()
                // CONFIRMAR CARRITO
                poOms.getButtonConfirmCart().click()
                // REALIZAR PAGO
                poOms.getButtonRealizarPago().click()
                poOms.getButtonLinkPago().click()
                cy.wait(5000)
                // OBTENER LINK DE PAGO E INGRESAR AL CHECKOUT V3
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                    const newUrl = $e1.text()
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
                    }
                })
                // CHECKOUT V3
                cy.get('#Check_AddressSelector_SelectAddress').should('be.visible')
                pocheckoutV3.getButtonPagar().should('be.visible')
                cy.addCorrectDirectionMx()
                cy.addCorrectCard()
                pocheckoutV3.getButtonPagar().click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                poNewThankYouPage.getNButtonIrAMiCuenta().should('be.visible')
            })
        })// End Context
    })// End devices
})//End Describe
describe('OMS - Pay VIP treatment with referral discount added in OMS', { retries: 2 }, () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('MX - OMS', () => {
            beforeEach(function(){
                cy.clearCookies()
                cy.clearLocalStorage()
                cy.viewport(device)
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('Pay VIP treatment with referral discount added in OMS', () => {
                cy.visit(environment)
                const poOms = new omsElements()
                const pocheckoutV3 = new checkoutElements()
                const poNewThankYouPage = new newThankYouPage()
                //cy.visit(environment)
                cy.loginIntoCartConfigurator()
                // BUSQUEDA DE USUARIO
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getResult().should('be.visible')
                poOms.getButtonResult().click()
                // -- CREATE CART
                poOms.getButtonCreateCart().click()
                // Seleccionar ALINEADORES en el MODAL
                poOms.getAlineadoresButton().click()
                poOms.getAlineadoresVIP().click()
                poOms.getChoosePayment().click()
                poOms.getLiquidacionButtonVip().click()
                poOms.getAddToCart().click()
                // VER CARRITO
                poOms.getViewCart().should('be.enabled').click()
                // ADD COUPON
                poOms.getAddCuponOms().click()
                cy.fixture('omsData').then(function(data){
                    this.data=data
                    poOms.getAddMainCupon().should('be.visible').type(this.data.cuponMXReferall)
                    poOms.getAddCodeCupon().should('be.visible').type(this.data.cuponMXCode)
                })
                poOms.getButtonAplicateCupon().click()
                poOms.getCuponContainer().should('be.visible')
                // CONFIRMAR CARRITO
                poOms.getButtonConfirmCart().click()
                // REALIZAR PAGO
                poOms.getButtonRealizarPago().click()
                poOms.getButtonLinkPago().click()
                cy.wait(5000)
                // OBTENER LINK DE PAGO E INGRESAR AL CHECKOUT V3
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                    const newUrl = $e1.text()
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
                    }
                })
                // CHECKOUT V3
                pocheckoutV3.getButtonPagar().should('be.visible')
                pocheckoutV3.getButtonAddDirection().should('be.visible')
                cy.addCorrectDirectionMx()
                cy.addCorrectCard()
                pocheckoutV3.getButtonPagar().click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                poNewThankYouPage.getNButtonIrAMiCuenta().should('be.visible')
            })
        })// End Context
    })// End devices
})//End Describe
describe('OMS - Pay VIP treatment with referral discount added in Checkout', { retries: 2 }, () => {
    //const devices = ["ipad-2","iphone-6"]
    const devices = ["macbook-15"]
    devices.forEach((device) => {
        context ('MX - OMS', () => {
            beforeEach(function(){
                cy.clearCookies()
                cy.clearLocalStorage()
                cy.viewport(device)
            })// End BeforeEach
            it('Create a NEW DEAL', () => {
                cy.createNewDeal()
            })
            it('Pay VIP treatment with referral discount added in Checkout', () => {
                cy.visit(environment)
                const poOms = new omsElements()
                const pocheckoutV3 = new checkoutElements()
                const poNewThankYouPage = new newThankYouPage()
                //cy.visit(environment)
                cy.loginIntoCartConfigurator()
                // BUSQUEDA DE USUARIO
                cy.fixture('dataEmail').then(function(data){
                    this.data = data
                    poOms.getGloblalSearch().should('be.visible').type(this.data.email)
                })
                poOms.getSearchButton().click()
                poOms.getResult().should('be.visible')
                poOms.getButtonResult().click()
                // -- CREATE CART
                poOms.getButtonCreateCart().click()
                // Seleccionar ALINEADORES en el MODAL
                poOms.getAlineadoresButton().click()
                poOms.getAlineadoresVIP().click()
                poOms.getChoosePayment().click()
                poOms.getLiquidacionButtonVip().click()
                poOms.getAddToCart().click()
                // VER CARRITO
                poOms.getViewCart().should('be.enabled').click()
                // CONFIRMAR CARRITO
                poOms.getButtonConfirmCart().click()
                // REALIZAR PAGO
                poOms.getButtonRealizarPago().click()
                poOms.getButtonLinkPago().click()
                cy.wait(5000)
                // OBTENER LINK DE PAGO E INGRESAR AL CHECKOUT V3
                cy.get('div .MuiChip-root').each(($e1, index, $list) => {
                    const newUrl = $e1.text()
                    if(index==[1]){
                        cy.log(index)
                        cy.log(newUrl)
                        cy.visit(newUrl)
                        Cypress.on('uncaught:exception', (err, runnable) => {
                            // returning false here prevents Cypress from
                            // failing the test
                            return false
                          })
                    }
                })
                // CHECKOUT V3
                pocheckoutV3.getButtonPagar().should('be.visible')
                pocheckoutV3.getButtonAddDirection().should('be.visible')
                cy.addCorrectDirectionMx()
                // AGREGAR CUPÓN
                cy.fixture('omsData').then(function(data){
                    this.data = data
                    pocheckoutV3.getCuponfield().should('be.visible').type(this.data.cuponMXReferall)
                    pocheckoutV3.getCuponCode().should('be.visible').type(this.data.cuponMXCode)
                })
                pocheckoutV3.getAplicateButton().click()
                //
                pocheckoutV3.getMainModalCoupon().should('be.visible')
                pocheckoutV3.getMainModalCouponButton().click()
                //
                cy.addCorrectCard()
                pocheckoutV3.getButtonPagar().click()
                Cypress.on('uncaught:exception', (err, runnable) => {
                    // returning false here prevents Cypress from
                    // failing the test
                    return false
                })
                poNewThankYouPage.getNButtonIrAMiCuenta().should('be.visible')
            })
        })// End Context
    })// End devices
})//End Describe