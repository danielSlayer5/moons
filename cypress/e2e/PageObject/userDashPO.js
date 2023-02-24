class userDashboard
{
    getModalUserDash(){
        return cy.get('.card')
    }
    getContainerName(){
        return cy.get('.avatar-container > .subtitle2')
    }
    getFirstButton(){
        return cy.get('#btn_digital_tour_step1')
    }
    getSecondButton(){

    }
    getButtonSkipPass(){
        return cy.get('#btn_digital_tour_do_later > .ButtonContent > .ButtonText > span')
    }
    getThirdButton(){
        return cy.get('#btn_digital_tour_step3')
    }
    getFourthButton(){
        return cy.get('#btn_digital_tour_begin')
    }
    getUDTitle(){
        return cy.get('h3')
    }
}
export default userDashboard