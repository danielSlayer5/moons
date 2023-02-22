describe('Cart configrator Apis', () =>{
    it('get status from API GET all Carts ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET',  this.data.urlProd + this.data.apiGetAllCarts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET all Products ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlProd + this.data.apiGetAllProducts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET all Inventory ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlProd + this.data.apiGetAllInventory).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET all Customers ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlProd + this.data.apiGetAllCustomers).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET all Payments ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlProd + this.data.apiGetAllPayments).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET all Discounts ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlProd + this.data.apiGetAllDiscounts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET all Orders ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET',this.data.urlProd +  this.data.apiGetAllOrders).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status from API GET checkout Health ', () => {
        cy.fixture('cartConfiguratorData').then(function(data){
            this.data=data
            cy.request('GET', this.data.prodCheckout + this.data.apiCheckoutHealth).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it.skip('get status from ', () => {
        cy.request('GET', 'https://dev.moons.rocks/db/patients/correo.8264885@mymoons.mx').then((response) => {
            expect(response.status).to.eq(401)
        })
    })

})