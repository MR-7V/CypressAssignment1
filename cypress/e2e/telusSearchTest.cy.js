describe("Test search functionality", () => {
  it("passes", () => {
    // set view port.
    cy.viewport(1800, 1200);
    // website to visit.
    cy.visit("https://www.telus.com");
    // click on the search icon.
    cy.get("#search-button").click();
    // type internet in the search input.
    cy.get('[data-test="search-input"]').type("internet").wait(500);
    // assert that the 3rd search option in dropdown contains the word 'internet'.
    cy.get(".sc-lizKOf > :nth-child(3) > .sc-ggpjZQ")
      .invoke("text")
      .then((text) => {
        expect(text.toLowerCase()).to.include("internet");
      });
    // click on the third option.
    cy.get(".sc-lizKOf > :nth-child(3) > .sc-ggpjZQ").click();

    // check the page heading has text present in search.
    cy.get(".css-11aywtz.r-6taxm2")
      .eq(1)
      .invoke("val")
      .then((inputSearchVal) => {
        cy.get(".css-1rynq56")
          .invoke("text")
          .then((headingText) => {
            expect(headingText.toLowerCase()).to.include(
              inputSearchVal.toLowerCase()
            );
          });
      });
  });
});