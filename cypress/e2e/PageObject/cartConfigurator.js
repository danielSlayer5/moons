class cartConfigurator
{
    getEmail(){
        return cy.get('#email', {timeout:10000})
    }
    getPassword(){
        return cy.get('#password')
    }
    getLogin(){
        return cy.get('.MuiButton-root')
    }
    //
    // -- home
    //
    getMainContainer(){
        return cy.get('.MuiTypography-root')
    }
    getGloblalSearch(){
        return cy.get('#globalSearch')
    }
    getSearchButton(){
        return cy.get('#searchButton')
    }
    getSecondTitle(){
        return cy.get('.jss21 > :nth-child(2) > .MuiTypography-root')
    }
    //
    //  Search Resutl
    //
    getResult(){
        return cy.get(':nth-child(3) > .MuiPaper-root')
    }
    getButtonResult(){
        return cy.get('#showInfoButton')
    }
    //
    //  Inside the user
    //
    getMainContainerNoCarts(){
        return cy.get('.MuiTabPanel-root', {timeout:10000})
    }
    getSectionUserName(){
        return cy.get('.MuiToolbar-root > :nth-child(1)',{timeout:5000})
    }
    getMainUserContainer(){
        return cy.get('.jss103',{timeout:5000})
    }
    getButtonCreateCart(){
        return cy.get('.MuiBox-root > .MuiButtonBase-root',{timeout:15000})
    }
    getListOfProducts(){
        return cy.get('.MuiList-root',{timeout:300000})
    }
    getSectionPagados(){
        return cy.contains('Pagados',{timeout:5000})
    }
    //
    //--PAID CARTS
    //
    getPaidCartCard(){
        //return cy.contains('Total en carrito',{timeout:5000})
        return cy.get('.MuiBox-root',{timeout:5000})
    }
    getButtonViewDetails(){
        return cy.contains('Ver detalles',{timeout:5000})
    }
    getDetailsCart(){
        return cy.contains('Detalles del carrito',{timeout:5000})
    }
    getPricePaid(){
        return cy.get('.MuiTypography-root')
    }
    //
    //  -- Cart
    //
    getMainSectionCart(){
        return cy.get('.jss202 > :nth-child(4)')
    }
    getProductSection(){
        return cy.get('#productos')
    }
    getCitaButton(){
        return cy.get('#mas-vendidos-1', {timeout:45000})
        //cy.get('#mas-vendidos-1 > .MuiAvatar-root > [data-testid="AddIcon"]')
    }
    getProductsSection(){
        return cy.contains('Productos')
    }
    getAlineadoresButton(){
        return cy.get('#mas-vendidos-0 > .MuiAvatar-root')
    }
    getChoosePayment(){
        return cy.contains('¿Qué vas a pagar?')
    }
    //
    //-- ALINEADORES SECTION
    //
    getApartadoButton(){
        return cy.get('#actionSelected > :nth-child(1)')
    }
    getPagoComplementarioButton(){
        return cy.get('#actionSelected > :nth-child(2)')
    }
    getLiquidacionButton(){
        return cy.get('#actionSelected > :nth-child(3)')
    }
    getAmountButton1(){
        return cy.contains('2,000')
    }
    getAmountButton3(){
        return cy.contains('5,000')
    }
    //
    //--CREATION OF THE CART
    //
    getAddToCart(){
        return cy.get('#addToCartModalButton')
    }
    //
    //--
    //
    getPastaDentalButton(){
        return cy.get('#productos-0 > .MuiAvatar-root > [data-testid="AddIcon"]')
        //cy.get('#mas-vendidos-1 > .MuiAvatar-root > [data-testid="AddIcon"]')
    }
    getEnjuagueBucal(){
        return cy.get('#productos-1 > .MuiAvatar-root > [data-testid="AddIcon"]')
        //cy.get('#mas-vendidos-1 > .MuiAvatar-root > [data-testid="AddIcon"]')
    }
    getViewCart(){
        return cy.get('#showCartItemsButton')
    }
    getContainerCartDetail(){
        return cy.get('.jss308')
    }
    getButtonConfirmCart(){
        return cy.get('#confirmCartButton', {timeout:5000})
    }
    //
    //-- ACTIONS FOR THE CART
    //
    getButtonRealizarPago(){
        return cy.contains('Realizar pago')
    }
    getButtonEliminar(){
        return cy.contains('Eliminar')
    }
    getButtonEditar(){
        return cy.contains('Editar')
    }
    //
    //
    //
    //
    //-- Section with a CART
    //
    getMainSectionCart(){
        return cy.get('.MuiTabPanel-root')
    }
    getFirstSection(){
        return cy.get('.MuiGrid-grid-xs-4 > .MuiPaper-root')
    }
    getButtonForDeleteCart(){
        return cy.contains('Confirmar')
    }
    //
    // PAYMENT METHODS
    //
    getButtonLinkPago(){
        return cy.contains('Generar link de pago')
    }
    getButtonEfectivo(){
        return cy.contains('Efectivo',{timeout:6000})
    }
    //
    //-- Elements for the modal COMPARTIR LINK DE PAGO
    //
    getModalMainContainer(){
        return cy.contains('Compartir link de pago')
    }
    getCloseButtonModalContainer(){
        return cy.get('.MuiSvgIcon-root')
    }
    getButtonVolverAlInicio(){
        return cy.contains('Volver al inicio', {timeout:10000})
    }
    //
    //-- Elements for the modal CONFIRMAR PAGO EN EFECTIVO
    //
    getModalMainContainerEfectivo(){
        return cy.contains('Confirmar pago en efectivo')
    }
    getButtonConfirmPayment(){
        return cy.contains('Confirmar Pago')
    }
    getPriceCartDetail(){
        return cy.get('.MuiTypography-root')
    }
    getAmountToDeliver(){
        return cy.get('#demo-simple-select', {timeout:30000})
    }
    getSelectOneToDeliver(){
        return cy.get('[data-value="1"]', {timeout:5000})
    }
    getConfirmButton(){
        return cy.contains('Confirmar')
    }
}
export default cartConfigurator