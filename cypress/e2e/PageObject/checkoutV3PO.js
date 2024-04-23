class checkoutElements
{
    //
    //--MEXICO
    //
    getButtonOxxo(){
        return cy.get('.MethodsFlow_containerSlider__bw798 > :nth-child(2)')
    }
    getOxxoReference(){
        return cy.get('#Check_Flow_GetReferenceOxxo')
    }
    getFieldName(){
        return cy.get('#name')
    }
    getFieldCardNumber(){
        return cy.get('#card')
    }
    getFieldMonthYear(){
        return cy.get('#month')
    }
    getFieldCvc(){
        return cy.get('#cvc')
    }
    getButtonPagar(){
        return cy.get('#Check_Flow_Card', {timeout:15000})
    }
    //
    // -- ADD CUPON --
    getCuponfield(){
        return cy.get('#couponInput', { timeout : 5000})
    }
    getCuponCode(){
        return cy.get('#referralInput' , { timeout : 5000})
    }
    getAplicateButton(){
        return cy.contains('Aplicar', { timeout : 5000})
    }
    //
    getMainModalCoupon(){
        return cy.get('.AlertModal_modal__MjaSG', { timeout : 30000})
    }
    getMainModalCouponButton(){
        return cy.get('#AlertModal_PrimaryButton' , {timeout : 10000})
    }
    //
    //  -- DIRECTION CO
    //
    getButtonAddDirection(){
        return cy.get('#Check_AddressSelector_SelectAddress', {timeout:10000})
    }
    getAddressModal(){
        return cy.get('.AddressModal_form__2QM8N')
    }
    getStreet(){
        return cy.get('#Street')
    }
    getNumber(){
        return cy.get('#Address_Number')
    }
    getZipcode(){
        return cy.get('#Zip_Code')
    }
    getReferences(){
        return cy.get('#References')
    }
    getState(){
        return cy.get('#State')
    }
    getNeighborhood(){
        return cy.get('#Neighborhood')
    }
    getDepartment(){
        return cy.get('#Department')
    }
    getButtonSaveAddress(){
        return cy.get('#Check_NewAddress_CreateAddress')
    }
    //
    //---PSE
    getFieldBank(){
        return cy.get(':nth-child(1) > .DDMainContainer > .DDContainer > .DDHeaderContainer')
    }
    getFieldClientType(){
        return cy.get(':nth-child(2) > .DDMainContainer > .DDContainer > .DDHeaderContainer')
    }
    getFieldClientOption(){
        return cy.get('.DDList > :nth-child(2) > button')
    }
    getIdType(){
        return cy.get(':nth-child(3) > .DDMainContainer > .DDContainer > .DDHeaderContainer')
    }
    getIdOption(){
        return cy.get('.DDList > :nth-child(2) > button')
    }
    getFieldDocumentNumber(){
        return cy.get('.CreditCard_inputMargin__q9ttN > .InputContainer > .InnerContainer > .Input')
    }
    getErrorPse1(){
        return cy.get(':nth-child(1) > .ErrorContainer > .ErrorMessage')
    }
    getErrorPse2(){
        return cy.get(':nth-child(2) > .ErrorContainer > .ErrorMessage')
    }
    getErrorPse3(){
        return cy.get(':nth-child(3) > .ErrorContainer > .ErrorMessage')
    }
    getErrorPse4(){
        return cy.get('.CreditCard_inputMargin__q9ttN > .ErrorContainer > .ErrorMessage')
    }
    //
    //--TDC
    getErrorTdc1(){
        return cy.get(':nth-child(3) > .ErrorContainer > .ErrorMessage')
    }
    getErrorTdc2(){
        return cy.get(':nth-child(4) > .ErrorContainer > .ErrorMessage')
    }
    getErrorTdc3(){
        return cy.get(':nth-child(6) > .ErrorMessage')
    }
    getErrorTdc4(){
        return cy.get(':nth-child(7) > .ErrorMessage')
    }
    getErrorTdc5(){
        return cy.get(':nth-child(8) > .ErrorMessage')
    }
    //
    //
    //-- Colombia
    //
    getButtonPayEfecty(){
        return cy.get('#Check_Flow_GetReferenceOxxo', {timeout:10000})
    }
    getSelectorBank(){
        return cy.get('.DDHeaderContainer')
    }
    getFieldType(){
        return cy.get('.DDList > :nth-child(2) > button')
    }
    getFieldNumber(){
        return cy.get('#form-checkout__identificationNumber')
    }
    getButtonCreditCard(){
        return cy.get('.MethodsFlow_activeMethod__yTbOy', {timeout:25000})
    }
    getButtonPse(){
        return cy.get('.MethodsFlow_containerSlider__bw798 > :nth-child(2)', {timeout:10000})
    }
    getButtonEfectivo(){
        return cy.get('.MethodsFlow_containerSlider__bw798 > :nth-child(3)', {timeout:10000})
    }
    getButtonPSEContinuar(){
        return cy.get('#Check_Flow_PSE')
    }
    getGoToPse(){
        return cy.get('#Check_Flow_GoToPSE')
    }
    getAddressContainerError(){
        return cy.get('.Address_container__eX2zQ > .ErrorContainer > .ErrorMessage')
    }


}
export default checkoutElements