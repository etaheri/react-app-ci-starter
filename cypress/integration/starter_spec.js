describe('App E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('App Renders Correctly', () => {
    cy.screenshot();
  });
});
