describe('Series management flow', () => {
  beforeEach(() => {
    cy.mockSeriesApi();
  });

  it('lists existing series and allows editing through the dialog', () => {
    cy.intercept('PUT', 'http://localhost:5000/series', (req) => {
      expect(req.body.title).to.contain('Atualizada');
      req.reply({
        statusCode: 200,
        body: {
          ...req.body,
        },
      });
    }).as('updateSeries');

    cy.visit('/series-list');
    cy.wait('@getSeries');

    cy.contains('Lista de séries');
    cy.get('[data-cy="series-table-row"]').should('have.length', 2);
    cy.get('[data-cy="series-table-row"]').first().should('contain', 'Dark');

    cy.get('[data-cy="edit-series-button"]').first().click();

    cy.findByLabelText(/Título/i).clear().type('Dark - Atualizada');
    cy.findByRole('button', { name: /Salvar alterações/i }).click();

    cy.wait('@updateSeries');
    cy.get('[data-cy="series-table-row"]').first().should('contain', 'Dark - Atualizada');
  });

  it('navigates from home to register and creates a new series', () => {
    const newSerie = {
      id: 3,
      title: 'Severance',
      numberSeasons: 1,
      seasonReleaseDate: '2022-02-18',
      director: 'Ben Stiller',
      producer: 'Red Hour Productions',
      genre: 'Drama',
      viewingDate: '2022-03-01',
    };

    cy.intercept('POST', 'http://localhost:5000/series', (req) => {
      expect(req.body.title).to.eq(newSerie.title);
      req.reply({
        statusCode: 201,
        body: newSerie,
      });
    }).as('createSeries');

    cy.visit('/');
    cy.wait('@getSeries');

    cy.findByRole('link', { name: /Registrar série/i }).click();
    cy.url().should('include', '/register');

    cy.findByLabelText(/Título/i).type(newSerie.title);
    cy.findByLabelText(/Número de Temporadas/i).clear().type(String(newSerie.numberSeasons));
    cy.findByLabelText(/Data de Lançamento da Temporada/i).type(newSerie.seasonReleaseDate);
    cy.findByLabelText(/Diretor/i).type(newSerie.director);
    cy.findByLabelText(/Produtor/i).type(newSerie.producer);
    cy.findByLabelText(/Gênero/i).type(newSerie.genre);
    cy.findByLabelText(/Data de Visualização/i).type(newSerie.viewingDate);

    cy.findByRole('button', { name: /^Adicionar Série$/i }).click();
    cy.wait('@createSeries');

    cy.url().should('include', '/series-list');
    cy.get('[data-cy="series-table-row"]').should('have.length', 3);
    cy.contains('[data-cy="series-table-row"]', newSerie.title).should('exist');
  });

  it('removes a series from the list', () => {
    cy.intercept('DELETE', 'http://localhost:5000/series/*', {
      statusCode: 200,
    }).as('deleteSeries');

    cy.visit('/series-list');
    cy.wait('@getSeries');
    cy.get('[data-cy="series-table-row"]').should('have.length', 2);

    cy.on('window:confirm', () => true);
    cy.get('[data-cy="delete-series-button"]').first().click();

    cy.wait('@deleteSeries');
    cy.get('[data-cy="series-table-row"]').should('have.length', 1);
  });

  it('navigates between pages using the nav bar', () => {
    cy.visit('/series-list');
    cy.wait('@getSeries');

    cy.contains('a', 'Sobre').click();
    cy.url().should('include', '/about');
    cy.findByText(/Sobre o projeto/i).should('exist');

    cy.contains('a', 'Página Inicial').click();
    cy.url().should('match', /\/$/);
    cy.contains(/Sua central de séries/i).should('exist');
  });
});

describe('Series list empty states', () => {
  beforeEach(() => {
    cy.mockSeriesApi({ seriesFixture: 'series-empty' });
  });

  it('shows the empty state when no series are returned', () => {
    cy.visit('/series-list');
    cy.wait('@getSeries');

    cy.contains('Nenhuma série cadastrada').should('be.visible');
    cy.contains('Adicione novas séries para acompanhá-las aqui.').should('be.visible');
  });
});
