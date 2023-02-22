class quizElements
{
    getFinalizarQuizButton(){
        return cy.get('#submitQuiz')
    }
    getContenedorDeError(){
        return cy.get('.contact_detailsErrors__2AlVu')
    }
    getContenedorDeErrorCo(){
        return cy.get('.Question7_detailsErrors__25GxN')
    }
    getSeleccionaEdad(){
        return cy.get('#age-select', {timeout:10000})
    }
    //
    //-- Field NOMBRE
    //
    getCampoNombre(){
        return cy.get('#Question3Name')
    }
    getErrorCampoNombre(){
        return cy.get('.Input_Error__3Di3J')
    }
    //
    //--Field APELLIDO
    //
    getCampoApellido(){
        return cy.get('#Question3LastName')
    }
    //
    //-- Field CORREO ELECTRONICO
    //
    getCampoCorreo(){
        return cy.get('#Question3Email')
    }
    //
    //-- Field Whats App
    //
    getContainerErrorWa(){
        return cy.get('.whatsapp-input_Error__Eswev')
    }
    getCampoWhatsApp(){
        return cy.get('.whatsapp-input_inputClass__Npf69', {timeout:5000})
    }
    getCampoWhatsAppPe(){
        return cy.get('.whatsapp-input_inputClass__XE5t5', {timeout:5000})
    }
    getContainerDisclaimerWa(){
        return cy.get('.contact_wpOptInText__3M-WM')
    }
    getCheckboxWa(){
        return cy.get('.contact_checkWp__3bM8A', {timeout:5000})
    }
    //
    //-- PERU
    getCheckboxWaPe(){
        return cy.get('.contact_checkWp__etHz8', {timeout:5000})
    }
    //
    // -- COLOMBIA
    //
    getCheckboxWaCo(){
        return cy.get('.Question7_checkWp__2N_md', {timeout:5000})
    }
    getContainerDisclamerWaCo(){
        return cy.get('.Question7_wpOptInText__1ua-O')
    }
}
export default quizElements