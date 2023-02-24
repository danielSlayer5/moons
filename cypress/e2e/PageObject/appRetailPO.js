class appRetail
{
    getMainImageAppRetail(){
        return cy.get('[data-testid="styledImage"]', {timeout:10000})
    }
    getMoonsCenterSelector(){
        return cy.get('[data-testid="selectbutton.btn.main"]')
    }
    getInsertCenterSelection(){
        return cy.get('input[type="text"]')
    }
    getSearchButton(){
        return cy.get('.sc-kSyTsM', {timeout:4000})
    }
    getPatientsButton(){
        return cy.contains('Pacientes')
    }
    getSearchPatientBox(){
        return cy.get('input[type="text"]')
    }
    getContainerPatientName(){
        return cy.get('[data-testid="container-wrapper-geco3lhzp9"] > :nth-child(1) > .sc-icqCLr', {timeout:6000})
    }
    getViewInfo(){
        return cy.get('#ij640e8fol')
    }
    getContainerMedicalHistory(){
        return cy.get('#nwudf3uv4r', {timeout:30000})
    }
    getContainerName(){
        return cy.get('[data-testid="container-wrapper-ibcuztg3mr"] > :nth-child(1) > [style="font-family: Inter; height: 100%;"] > .sc-eVVqjN > .sc-iVRmmj > span', {timeout:1000})
    }
    getContainerMail(){
        return cy.get('#lhru0c6kpy', {timeout:1000})
    }
    getButtonMedicalHistory(){
        return cy.get('#q3il6fowjd')
    }
    getButtonPrint(){
        return cy.get('#zzc6y8jf2u', {timeout:15000})
    }
    getContainerPrint(){
        return cy.get('#iframe')
    }
    getButtonBack(){
        return cy.get('#kib00v08wz', {timeout:15000})
    }
}
export default appRetail