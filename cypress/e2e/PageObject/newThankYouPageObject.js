class newThankYouPage
{
    getMainContainer(){
        return cy.get('.Payment_thankYouContainer__Zdr6F')
    }
    getNButtonIraMiCuenta(){
        return cy.get('#Check_Payment_BackButton', {timeout:15000})
    }
    // OXXO
    
}
export default newThankYouPage