class newThankYouPage
{
    getMainContainer(){
        return cy.get('.Payment_thankYouContainer__Zdr6F')
    }
    getNButtonIrAMiCuenta(){
        return cy.get('#Check_Payment_BackButton', {timeout:35000})
    }
    // OXXO
    
}
export default newThankYouPage