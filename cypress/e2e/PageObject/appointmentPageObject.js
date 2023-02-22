class appointmentElements
{
    getAppointmentModal(){
        return cy.get('.modal-main', {timeout:20000})
    }
    getAppointmentButton(){
        return cy.get('.Button')
    }
    getCenterSatelite(){
        return cy.get(':nth-child(3) > .Branches_State__1Stdm > .Branches_CenterContainer__1rkor')
    }
    getCenterHour(){
        return cy.get('.ChooseDates_ContainerDesktop__3xdoS > :nth-child(2) > :nth-child(2)', {timeout:10000})
    }
    getPagarCita(){
        return cy.get('.Accept_SubmitButton__3c3yB', {timeout:2000})
    }
    //
    // -- MEXICO PROD
    //
    getCenterCoyoacan(){
        return cy.get(':nth-child(3) > .Branches_State__1Stdm > .Branches_First__HDjpy')
    }

    //
    // -- COLOMBIA
    //
    getCenterOdontologiaPena(){
        return cy.get(':nth-child(3) > .Branches_State__1Stdm > .Branches_First__HDjpy', {timeout:20000})
    }
}
export default appointmentElements