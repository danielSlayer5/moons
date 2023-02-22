/// <reference types="Cypress"/>
import webSiteElements from "../../PageObject/webSitePageObject"


describe('TestCases for the visit to the sites of all the countries', () => {
    //const devices = ["ipad-2", "ipad-mini", "iphone-7", "iphone-xr", "macbook-11", "macbook-13", "macbook-16", "samsung-note9", "samsung-s10"]
    const devices = ["ipad-2", "ipad-mini", "iphone-7", "iphone-xr", "macbook-16", "samsung-note9", "samsung-s10"]
    devices.forEach((device) => {
        context('Open the page in the device = '+ device + '', () => {
            beforeEach(function(){
            cy.viewport(device)
        })
        describe('Visit the MX page for mobile and desktop', () => {
            it('open the page mx and close the modal', () => {
                const webSitePo = new webSiteElements
                cy.fixture('webSite').then(function(data){
                    this.data=data
                    cy.visit(this.data.urlProdMx)
                    cy.url().should('eq', this.data.urlProdMx)
                    webSitePo.getMainModal().should('be.visible')
                    webSitePo.getMainModalButtonSkip().click()
                    webSitePo.getLiverpoolLogo().should('be.visible')
                    if(device == "macbook-16")
                    {
                        cy.log('Hola estoy en escritorio = ' + device)
                        webSitePo.getMenuIconForMobile().should('not.exist')
                        webSitePo.getMenuStore().should('be.visible')
                    }
                    else
                    {
                        cy.log('Hola estoy en Mobile = ' + device)
                        webSitePo.getMenuIconForMobile().should('be.visible')
                        webSitePo.getMenuStore().should('be.visible')
                    }
                })
            })
        })// End of Describe Visit the MX page for mobile and desktop

        describe('Visit the CO page for mobile and desktop', () => {
            it('open the page mx and close the modal', () => {
                const webSitePo = new webSiteElements
                cy.fixture('webSite').then(function(data){
                    this.data=data
                    cy.visit(this.data.urlProdCo)
                    cy.url().should('eq', this.data.urlProdCo)
                    webSitePo.getMainModal().should('be.visible')
                    webSitePo.getMainModalButtonSkip().click()
                    webSitePo.getLiverpoolLogo().should('not.exist')
                    if(device == "macbook-16")
                    {
                        cy.log('Hola estoy en escritorio = ' + device)
                        webSitePo.getMenuIconForMobile().should('not.exist')
                        webSitePo.getMenuStore().should('not.exist')
                    }
                    else
                    {
                        cy.log('Hola estoy en Mobile = ' + device)
                        webSitePo.getMenuIconForMobile().should('be.visible')
                        webSitePo.getMenuStore().should('not.exist')
                    }
                })
            })
        })// End of Describe Visit the MX page for mobile and desktop

        describe('Visit the PE page for mobile and desktop', () => {
            it('open the page mx and close the modal', () => {
                const webSitePo = new webSiteElements
                cy.fixture('webSite').then(function(data){
                    this.data=data
                    cy.visit(this.data.urlProdPe)
                    cy.url().should('eq', this.data.urlProdPe1)
                    webSitePo.getMainModal().should('be.visible')
                    webSitePo.getMainModalButtonSkip().click()
                    webSitePo.getLiverpoolLogo().should('not.exist')
                    if(device == "macbook-16")
                    {
                        cy.log('Hola estoy en escritorio = ' + device)
                        webSitePo.getMenuIconForMobile().should('not.exist')
                        webSitePo.getMenuStore().should('not.exist')
                    }
                    else
                    {
                        cy.log('Hola estoy en Mobile = ' + device)
                        webSitePo.getMenuIconForMobile().should('be.visible')
                        webSitePo.getMenuStore().should('not.exist')
                    }
                })
            })
        })// End of Describe Visit the MX page for mobile and desktop

        describe('Visit the CL page for mobile and desktop', () => {
            it('open the page mx and close the modal', () => {
                const webSitePo = new webSiteElements
                cy.fixture('webSite').then(function(data){
                    this.data=data
                    cy.visit(this.data.urlProdCl)
                    cy.url().should('eq', this.data.urlProdCl)
                    webSitePo.getMainModal().should('be.visible')
                    webSitePo.getMainModalButtonSkip().click()
                    webSitePo.getLiverpoolLogo().should('not.exist')
                    if(device == "macbook-16")
                    {
                        cy.log('Hola estoy en escritorio = ' + device)
                        webSitePo.getMenuIconForMobile().should('not.exist')
                        webSitePo.getMenuStore().should('not.exist')
                    }
                    else
                    {
                        cy.log('Hola estoy en Mobile = ' + device)
                        webSitePo.getMenuIconForMobile().should('be.visible')
                        webSitePo.getMenuStore().should('not.exist')
                    }
                })
            })
        })// End of Describe Visit the MX page for mobile and desktop
        })
    })
})