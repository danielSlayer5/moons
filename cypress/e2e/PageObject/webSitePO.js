class webSiteElements
{
    getMainModal(){
        return cy.get('.modalPromo_wrap__1zjBa', {timeout:15000})
    }
    getMainModalButtonSkip()
    {
        return cy.contains('Omitir por ahora', {timeout:5000})
    }
    getLiverpoolLogo(){
        return cy.get('#liverpool-btn')
    }
    getMenuIconForMobile(){
        return cy.get('#menuIcon:visible')
    }
    getMenuStore(){
        return cy.get('.Header_cart__DSAnw')
    }
}
export default webSiteElements