/// <reference types="Cypress"/>

import appRetail from "../../PageObject/appRetailpageObject"

describe('VISIT CL APP  Retail', () =>{
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
    it('002 - Search for a CL4 user to print the medical history', () => {
        const appRetailPo= new appRetail
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCL)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            appRetailPo.getMainImageAppRetail().should('be.visible')

            appRetailPo.getMoonsCenterSelector().click()
            appRetailPo.getInsertCenterSelection().type(this.data.centerCL)
            cy.contains(this.data.centerCL).click()
            cy.wait(2500)
            appRetailPo.getSearchButton().should('be.visible').click({force:true})
            appRetailPo.getPatientsButton().click({force:true})
            appRetailPo.getSearchPatientBox().type(this.data.prodUserCL)
            appRetailPo.getContainerPatientName().should('contain.text', this.data.prodUserNameCL)            
            appRetailPo.getViewInfo().click()
            //ERROR
            appRetailPo.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            appRetailPo.getContainerName().should('contain.text', this.data.prodUserCL)
            appRetailPo.getContainerMail().should('contain.text', this.data.prodUserNameCL)
            appRetailPo.getButtonMedicalHistory().click()
            cy.wait(2500)
            appRetailPo.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe

describe('VISIT CO APP  Retail', () =>{
    it('001 - The CO url should redirect to the new app', () => {
        const appRetailPo= new appRetail
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCO)
            cy.wait(1500)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            appRetailPo.getMainImageAppRetail().should('be.visible')
            
        })
    })// END of
    it('002 - Search for a CO user to print the medical history', () => {
        const appRetailPo= new appRetail
        cy.fixture('appRetail').then(function(data){
            this.data=data
            cy.visit(this.data.retailCO)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            appRetailPo.getMainImageAppRetail().should('be.visible')

            appRetailPo.getMoonsCenterSelector().click()
            appRetailPo.getInsertCenterSelection().type(this.data.centerCO)
            cy.contains(this.data.centerCO).click()
            cy.wait(2500)
            appRetailPo.getSearchButton().should('be.visible').click({force:true})
            appRetailPo.getPatientsButton().click({force:true})
            appRetailPo.getSearchPatientBox().type(this.data.prodUserCO)
            appRetailPo.getContainerPatientName().should('contain.text', this.data.prodUserNameCO)            
            appRetailPo.getViewInfo().click()
            //ERROR
            appRetailPo.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            appRetailPo.getContainerName().should('contain.text', this.data.prodUserCO)
            appRetailPo.getContainerMail().should('contain.text', this.data.prodUserNameCO)
            appRetailPo.getButtonMedicalHistory().click()
            cy.wait(2500)
            appRetailPo.getButtonPrint().should('be.visible').and('have.text', this.data.titleImprimir).click()
            cy.wait(5000)
            appRetailPo.getContainerPrint().should('be.visible')
            appRetailPo.getButtonBack().should('be.visible').and('have.text', this.data.titleRegresar).click()
        })
    })// END of
}) // End of describe

describe('VISIT MX APP  Retail', () =>{
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
            const appRetailPo =new appRetail
            this.data=data
            cy.visit(this.data.retailMX)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            appRetailPo.getMainImageAppRetail().should('be.visible')
            appRetailPo.getMoonsCenterSelector().click()
            appRetailPo.getInsertCenterSelection().type(this.data.centerMX)
            cy.contains(this.data.centerMX).click()
            cy.wait(2500)
            appRetailPo.getSearchButton().should('be.visible').click({force:true})
            appRetailPo.getPatientsButton().click({force:true})
            appRetailPo.getSearchPatientBox().type(this.data.prodUserMX)
            appRetailPo.getContainerPatientName().should('contain.text', this.data.prodUserNameMX)            
            appRetailPo.getViewInfo().click()
            //ERROR
            appRetailPo.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            appRetailPo.getContainerName().should('contain.text', this.data.prodUserMX)
            appRetailPo.getContainerMail().should('contain.text', this.data.prodUserNameMX)
            appRetailPo.getButtonMedicalHistory().click()
            cy.wait(2500)
            appRetailPo.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe

describe('VISIT PE APP  Retail', () =>{
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
            const appRetailPo =new appRetail
            this.data=data
            cy.visit(this.data.retailMX)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            appRetailPo.getMainImageAppRetail().should('be.visible')
            appRetailPo.getMoonsCenterSelector().click()
            appRetailPo.getInsertCenterSelection().type(this.data.centerPE)
            cy.contains(this.data.centerPE).click()
            cy.wait(2500)
            appRetailPo.getSearchButton().should('be.visible').click({force:true})
            appRetailPo.getPatientsButton().click({force:true})
            appRetailPo.getSearchPatientBox().type(this.data.prodUserPE)
            appRetailPo.getContainerPatientName().should('contain.text', this.data.prodUserNamePE)            
            appRetailPo.getViewInfo().click()
            //ERROR
            appRetailPo.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            appRetailPo.getContainerName().should('contain.text', this.data.prodUserPE)
            appRetailPo.getContainerMail().should('contain.text', this.data.prodUserNamePE)
            appRetailPo.getButtonMedicalHistory().click()
            cy.wait(2500)
            appRetailPo.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe

describe('VISIT PE 1 APP  Retail', () =>{
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
            const appRetailPo =new appRetail
            this.data=data
            cy.visit(this.data.retailMX)
            cy.url().should('contain', this.data.globalRetail)
            cy.loginGlobalRetail()
            appRetailPo.getMainImageAppRetail().should('be.visible')
            appRetailPo.getMoonsCenterSelector().click()
            appRetailPo.getInsertCenterSelection().type(this.data.centerPE)
            cy.contains(this.data.centerPE).click()
            cy.wait(2500)
            appRetailPo.getSearchButton().should('be.visible').click({force:true})
            appRetailPo.getPatientsButton().click({force:true})
            appRetailPo.getSearchPatientBox().type(this.data.prodUserPE)
            appRetailPo.getContainerPatientName().should('contain.text', this.data.prodUserNamePE)            
            appRetailPo.getViewInfo().click()
            //ERROR
            appRetailPo.getContainerMedicalHistory().should('be.visible').and('have.text', this.data.title001)
            appRetailPo.getContainerName().should('contain.text', this.data.prodUserPE)
            appRetailPo.getContainerMail().should('contain.text', this.data.prodUserNamePE)
            appRetailPo.getButtonMedicalHistory().click()
            cy.wait(2500)
            appRetailPo.getButtonPrint().should('not.exist')
        })
    })// END of
}) // End of describe
