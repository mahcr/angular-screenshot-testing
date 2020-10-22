describe('Home screenshot', () => {
  it('debe tomar screenshot de toda la pagina', () => {
    cy.visit('/');
    cy.matchImageSnapshot('home',
      // { blackout: ['.pokemon'] }
    );
  });
});
