class quizElements
{
    //
    //--
    getButtonModalDuplicated(){
        return cy.get('.modal_button__GRC0s')
    }
    //
    //-- Liverpool
    getCampoCorreoLiverpool(){
        return cy.get('#mailPatient-input')
    }
    getCheckboxWaLiverpool(){
        return cy.get('.Question7_checkWp__2N_md')
    }
    getFinalizarQuizLiverpoolButton(){
        return cy.get('#submit-button')
    }
    //
    getNocandidateSecondContainer(){
        return cy.get('.Shell_Container__WlrSo', {timeout:15000})
    }
    getNocandidateSecondContainerCl(){
        return cy.get('.NoCandidate_subTitle__2FIqZ', {timeout:15000})
    }
    getFinalizarQuizButton(){
        return cy.get('#submitQuiz', {timeout:10000})
    }
    getContenedorDeError(){
        return cy.get('.contact_detailsErrors__9tX6v')
    }
    getContenedorDeErrorPe(){
        return cy.get('.contact_detailsErrors__9tX6v')
    }
    getSeleccionaEdad(){
        return cy.get('#age-select', {timeout:45000})
    }
    //
    //-- Field NOMBRE
    //
    getCampoNombre(){
        return cy.get('#Question3Name')
    }
    getErrorCampoNombre(){
        return cy.get('.Input_Error__1kKhG')
    }
    getErrorCampoNombrePe(){
        return cy.get('.Input_Error__1kKhG')
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
        return cy.get('.whatsapp-input_Error__cBhZL')
    }
    //
    //--MEXICO
    getContainerUserRegistrated(){
        return cy.get('.ReactModal__Content', {timeout:30000})
    }
    getButtonIniciarSesion(){
        return cy.get('.modal_button__GRC0s:visible')
    }
    //
    //--PERU
    getConainerErrorWaPe(){
        return cy.get('.whatsapp-input_Error__cBhZL')
    }
    getCampoWhatsAppCl(){
        return cy.get('.whatsapp-input_inputClass__Npf69')
    }
    getCampoWhatsAppMx(){
        return cy.get('.whatsapp-input_inputClass__XE5t5')
    }
    getCampoWhatsAppPe(){
        return cy.get('.whatsapp-input_inputClass__XE5t5', {timeout:5000})
    }
    getContainerDisclaimerMx(){
        return cy.get('.contact_checkWp__etHz8', { timeout : 45000})
    }
    getContainerDisclaimerWaPe(){
        return cy.get('.contact_wpOptIn__NGBtu')
    }
    getCheckboxWaMx(){
        return cy.get('.contact_checkWp__etHz8', {timeout:50000})
    }
    //
    //-- PERU
    getCheckboxWaPe(){
        return cy.get('.contact_checkWp__etHz8', {timeout:5000})
    }
    //
    // -- COLOMBIA
    //
    getCampoWhatsAppCo(){
        return cy.get('.whatsapp-input_inputClass__XE5t5')
    }
    getContenedorDeErrorCo(){
        return cy.get('.Question7_detailsErrors__Cv2jt')
    }
    getCheckboxWaCo(){
        return cy.get('.Question7_checkWp__YooVd', {timeout:25000})
    }
    getContainerDisclamerWaCo(){
        return cy.get('.Question7_wpOptInText__G-DWV')
    }
    //
    // -- CHILE
    getCheckboxWaCl(){
        return cy.get('.contact_checkWp__3bM8A')
    }
    getAppointmentModal(){
        return cy.get('.modal-main', {timeout : 65000})
    }

}
export default quizElements