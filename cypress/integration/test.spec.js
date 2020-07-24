describe("Testing basics", () => {
    it("Renders page", () => {
        cy.visit("http://localhost:3000/")
    })
    it("Renders form", () => {
        cy.visit("http://localhost:3000/form")
    })
    it("Can input text in name", () => {
        cy.get(".name-input")
        .click()
        .type("Harrison")
        .should("have.value", "Harrison")
    })
    it("Can select pineapple", () => {
        cy.get(".pineapple")
        .click()
    })
    it("Can select salami", () => {
        cy.get(".salami")
        .click()
    })
    it("Can select anchovies", () => {
        cy.get(".anchovies")
        .click()
    })
    it("Can select cheese", () => {
        cy.get(".cheese")
        .click()
    })
    it("Can select pineapple", () => {
        cy.get(".pineapple")
        .click()
    })
    it("Can select size", () => {
        cy.get(".size")
        .select("m")
    })
    it("Can submit order", () => {
        cy.get(".submit")
        .click()
    })
})