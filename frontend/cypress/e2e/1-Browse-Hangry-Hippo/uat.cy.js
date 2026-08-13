// ============================================================================
// ORIGINAL LESSON FILE (COMMENTED OUT + ANNOTATED WITH WHAT WAS WRONG)
// ============================================================================

/*
describe('Shows Appeteasers', () => {
  it('Connect to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
    // ✔ Correct — lesson requires visiting the dev server.
  });

  it('selects Handhelds', () => {
    // ❌ MISTAKE: No test written.
    // ❌ MISTAKE: Should click "Handhelds" and check items.
    // ❌ MISTAKE: This test cannot run alone because it never visits the page.
  });

  it('selects Appeteasers', () => {
    // ❌ MISTAKE: No test written.
    // ❌ MISTAKE: Should click "Appeteasers" and check items.
    // ❌ MISTAKE: This test cannot run alone because it never visits the page.
  });
});
*/


// ============================================================================
// CLEAN FIXED VERSION (ACTIVE) — MINIMAL, EXACTLY WHAT THE LESSON REQUIRES
// ============================================================================

describe('Shows Appeteasers', () => {

  it('Connects to Dev Server', () => {
    cy.visit('https://hangryhippo.quantic.host/');
  });

  it('selects Handhelds', () => {
    // ✔ Each test must visit the page so it can run independently
    cy.visit('https://hangryhippo.quantic.host/');

    cy.contains('Handhelds').click();

    // ✔ Lesson requirement: verify items under Handhelds
    cy.contains('Cheese Burger').should('be.visible');
    cy.contains('Fajita Tacos').should('be.visible');
  });

  it('selects Appeteasers', () => {
    // ✔ Each test must visit the page so it can run independently
    cy.visit('https://hangryhippo.quantic.host/');

    cy.contains('Appeteasers').click();

    // ✔ Lesson requirement: verify items under Appeteasers
    cy.contains('Tator Tots').should('be.visible');
    cy.contains('Buffalo Wings').should('be.visible');

    // ✔ Optional but correct: Handheld items should disappear
    cy.contains('Cheese Burger').should('not.exist');
    cy.contains('Fajita Tacos').should('not.exist');
  });

});
