
describe('Gets status from the APIs of Cart configrator', () =>{
    it('get status 200 from API GET all Carts ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET',  this.data.urlDev + this.data.apiGetAllCarts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Products ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllProducts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Inventory ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllInventory).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Customers ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllCustomers).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Payments ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllPayments).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Discounts ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllDiscounts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Orders ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET',this.data.urlDev +  this.data.apiGetAllOrders).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET checkout Health ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.devCheckout + this.data.apiCheckoutHealth).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it.skip('get status from ', () => {
        cy.request('GET', 'https://dev.moons.rocks/db/patients/correo.8264885@mymoons.mx').then((response) => {
            expect(response.status).to.eq(401)
        })
    })
}) // End of describe