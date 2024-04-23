
describe('Gets status from the APIs of Cart configrator', () =>{
    it('get status 200 from API GET all Carts ', { retries: 2 },() => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET',  this.data.urlDev + this.data.apiGetAllCarts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Products ', () => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllProducts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Customers ', () => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllCustomers).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Payments ', () => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllPayments).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Discounts ', () => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET', this.data.urlDev + this.data.apiGetAllDiscounts).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET all Orders ', () => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET',this.data.urlDev +  this.data.apiGetAllOrders).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
    it('get status 200 from API GET checkout Health ', () => {
        cy.fixture('omsData').then(function(data){
            this.data=data
            cy.request('GET', this.data.devCheckout + this.data.apiCheckoutHealth).then((response) => {
                expect(response.status).to.eq(200)
            })
        })
    })// END of
}) // End of describe