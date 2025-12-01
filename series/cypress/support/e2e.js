import '@testing-library/cypress/add-commands';

Cypress.Commands.add('mockSeriesApi', ({ seriesFixture = 'series' } = {}) => {
  cy.fixture(seriesFixture).then((series) => {
    cy.intercept('GET', 'http://localhost:5000/series', {
      statusCode: 200,
      body: series,
    }).as('getSeries');
  });
});
