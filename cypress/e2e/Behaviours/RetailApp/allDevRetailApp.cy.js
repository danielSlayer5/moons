/// <reference types="Cypress"/>

import appRetail from "../../PageObject/appRetailPO"

describe.skip('VISIT CL APP  Retail', () =>{
    it('001 - The CL url should redirect to the new app', () => {
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCL)
            cy.wait(1500)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            cy.get('[data-testid="styledImage"]', {timeout:6000})
        })
    })// END of
    it('002 - Search for a CL user to print the medical history', () => {
        const poAppRetail= new appRetail
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCL)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            poAppRetail.getMainImageAppRetail().should('be.visible')

            poAppRetail.getMoonsCenterSelector().click()
            poAppRetail.getInsertCenterSelection().type(this.data.centerCL)
            cy.contains(this.data.centerCL).click()
            cy.wait(2500)
            poAppRetail.getSearchButton().should('be.visible').click({force:true})
            poAppRetail.getPatientsButton().click({force:true})
            poAppRetail.getSearchPatientBox().type(this.data.prodUserCL)
            poAppRetail.getContainerPatientName().should('contain.text', this.data.prodUserNameCL)            
            poAppRetail.getViewInfo().click()
            //ERROR
            poAppRetail.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            poAppRetail.getContainerName().should('contain.text', this.data.prodUserCL)
            poAppRetail.getContainerMail().should('contain.text', this.data.prodUserNameCL)
            poAppRetail.getButtonMedicalHistory().click()
            cy.wait(2500)
            poAppRetail.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe

describe.skip('VISIT CO APP  Retail', () =>{
    it('001 - The CO url should redirect to the new app', () => {
        const poAppRetail= new appRetail
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCO)
            cy.wait(1500)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            poAppRetail.getMainImageAppRetail().should('be.visible')
            
        })
    })// END of
    it('002 - Search for a CO user to print the medical history', () => {
        const poAppRetail= new appRetail
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCO)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            poAppRetail.getMainImageAppRetail().should('be.visible')

            poAppRetail.getMoonsCenterSelector().click()
            poAppRetail.getInsertCenterSelection().type(this.data.centerCO)
            cy.contains(this.data.centerCO).click()
            cy.wait(2500)
            poAppRetail.getSearchButton().should('be.visible').click({force:true})
            poAppRetail.getPatientsButton().click({force:true})
            poAppRetail.getSearchPatientBox().type(this.data.prodUserCO)
            poAppRetail.getContainerPatientName().should('contain.text', this.data.prodUserNameCO)            
            poAppRetail.getViewInfo().click()
            //ERROR
            poAppRetail.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            poAppRetail.getContainerName().should('contain.text', this.data.prodUserCO)
            poAppRetail.getContainerMail().should('contain.text', this.data.prodUserNameCO)
            poAppRetail.getButtonMedicalHistory().click()
            cy.wait(2500)
            poAppRetail.getButtonPrint().should('be.visible').and('have.text', this.data.titleImprimir).click()
            cy.wait(5000)
            poAppRetail.getContainerPrint().should('be.visible')
            poAppRetail.getButtonBack().should('be.visible').and('have.text', this.data.titleRegresar).click()
        })
    })// END of
}) // End of describe

describe.skip('VISIT MX APP  Retail', () =>{
    it('001 - The MX url should redirect to the new app', () => {
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailMX)
            cy.wait(1500)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            cy.get('[data-testid="styledImage"]', {timeout:15000})
        })
    })// END of
    it('002 - Search for a MX user for not to print the medical history', () => {
        cy.fixture('appRetail').then(function(data){
            const poAppRetail= new appRetail
            this.data=data
            cy.visit(this.data.retailMX)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            poAppRetail.getMainImageAppRetail().should('be.visible')
            poAppRetail.getMoonsCenterSelector().click()
            poAppRetail.getInsertCenterSelection().type(this.data.centerMX)
            cy.contains(this.data.centerMX).click()
            cy.wait(2500)
            poAppRetail.getSearchButton().should('be.visible').click({force:true})
            poAppRetail.getPatientsButton().click({force:true})
            poAppRetail.getSearchPatientBox().type(this.data.prodUserMX)
            poAppRetail.getContainerPatientName().should('contain.text', this.data.prodUserNameMX)            
            poAppRetail.getViewInfo().click()
            //ERROR
            poAppRetail.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            poAppRetail.getContainerName().should('contain.text', this.data.prodUserMX)
            poAppRetail.getContainerMail().should('contain.text', this.data.prodUserNameMX)
            poAppRetail.getButtonMedicalHistory().click()
            cy.wait(2500)
            poAppRetail.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe

describe.skip('VISIT PE APP  Retail', () =>{
    it('001 - The PE url should redirect to the new app', () => {
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailPE)
            cy.wait(1500)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            cy.get('[data-testid="styledImage"]', {timeout:6000})
        })
    })// END of

    it('002 - Search for a PE user for not to print the medical history', () => {
        cy.fixture('appRetail').then(function(data){
            const poAppRetail= new appRetail
            this.data=data
            cy.visit(this.data.retailMX)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            poAppRetail.getMainImageAppRetail().should('be.visible')
            poAppRetail.getMoonsCenterSelector().click()
            poAppRetail.getInsertCenterSelection().type(this.data.centerPE)
            cy.contains(this.data.centerPE).click()
            cy.wait(2500)
            poAppRetail.getSearchButton().should('be.visible').click({force:true})
            poAppRetail.getPatientsButton().click({force:true})
            poAppRetail.getSearchPatientBox().type(this.data.prodUserPE)
            poAppRetail.getContainerPatientName().should('contain.text', this.data.prodUserNamePE)            
            poAppRetail.getViewInfo().click()
            //ERROR
            poAppRetail.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            poAppRetail.getContainerName().should('contain.text', this.data.prodUserPE)
            poAppRetail.getContainerMail().should('contain.text', this.data.prodUserNamePE)
            poAppRetail.getButtonMedicalHistory().click()
            cy.wait(2500)
            poAppRetail.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe

describe.skip('VISIT PE 1 APP  Retail', () =>{
    it('001 - The PE url1 should redirect to the new app', () => {
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailPE1)
            cy.wait(1500)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            cy.get('[data-testid="styledImage"]', {timeout:6000})
        })
    })// END of
    it('002 - Search for a PE user for not to print the medical history', () => {
        cy.fixture('appRetail').then(function(data){
            const poAppRetail= new appRetail
            this.data=data
            cy.visit(this.data.retailMX)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            poAppRetail.getMainImageAppRetail().should('be.visible')
            poAppRetail.getMoonsCenterSelector().click()
            poAppRetail.getInsertCenterSelection().type(this.data.centerPE)
            cy.contains(this.data.centerPE).click()
            cy.wait(2500)
            poAppRetail.getSearchButton().should('be.visible').click({force:true})
            poAppRetail.getPatientsButton().click({force:true})
            poAppRetail.getSearchPatientBox().type(this.data.prodUserPE)
            poAppRetail.getContainerPatientName().should('contain.text', this.data.prodUserNamePE)            
            poAppRetail.getViewInfo().click()
            //ERROR
            poAppRetail.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            poAppRetail.getContainerName().should('contain.text', this.data.prodUserPE)
            poAppRetail.getContainerMail().should('contain.text', this.data.prodUserNamePE)
            poAppRetail.getButtonMedicalHistory().click()
            cy.wait(2500)
            poAppRetail.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe
