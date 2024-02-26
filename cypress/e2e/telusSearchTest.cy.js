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

    // Array of selectors for the different sections (articals, forums, related info, blogs)
    const sections = [
      ":nth-child(2) > .styles__ResultInnerContainer-sc-1aohvhp-4 > .styles__ListContainer-sc-1aohvhp-6 > li",
      ":nth-child(3) > .styles__ResultInnerContainer-sc-1aohvhp-4 > .styles__ListContainer-sc-1aohvhp-6 >li",
      ":nth-child(6) > .styles__ResultInnerContainer-sc-1aohvhp-4 > .styles__ListContainer-sc-1aohvhp-6 >li",
      ":nth-child(8) > .styles__ResultInnerContainer-sc-1aohvhp-4 > .styles__ListContainer-sc-1aohvhp-6 >li",
    ];

    // Iterate over each section
    sections.forEach((section) => {
      // Check at least there are 6 items with clickable links in the section
      cy.get(section)
        .should("have.length.at.least", 6)
        .each(($li) => {
          // Check that each li contains an anchor tag with an href attribute
          cy.wrap($li).find("a").should("have.attr", "href");
        });
    });
  });
});
