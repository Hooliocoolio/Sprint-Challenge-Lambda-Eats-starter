// describe("input text", ()=> {
//     before(() => {
//         cy.visit("http://localhost:3000/OrderPizza")
//     })
//     it("should write text", () => {
//     cy.get('input[name="name"]').type('Hello world').should("have.value", "Hello world")
//     })
// })


// describe("select options", () => {
//     before(() => {
//         cy.visit("http://localhost:3000/OrderPizza")
//     })
//     it("select a topping option", ()=> {
//         cy.get('input[name="mushrooms"]')
//   .checkbox(['mushrooms'])
//   .should('have.value', 'mushrooms')
//     })
// })
describe("Testing form inputs.", () =>{
    beforeEach(() => {
        cy.visit("http://localhost:3000/OrderPizza");
    });

    it("tests inputs", () => {

    
        cy.get(`[id="name"]`).type("Hoolio Osuna").should("have.value", "Hoolio Osuna");
        cy.get(`[id="comments"]`).type("Hoolio Osuna").should("have.value", "Hoolio Osuna");
        


        cy.get('[type=checkbox]')
        .check()
        .should("be.checked")

        cy.get(`[id="submitBtn"]`).click()

    })
})
