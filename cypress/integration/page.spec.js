import { PATHS, SELECTORS, VAR_NAMES } from './config/page.config'

describe('Test The Project', function() {
  before(() => {
    cy.server()
    cy.route('GET', PATHS.API).as(VAR_NAMES.waitApi)
    cy.visit('/')
    cy.wait(`@${VAR_NAMES.waitApi}`)
  })

  describe('Page loads all components', function() {

    it('has visble header and graph', function() {
      cy.get(SELECTORS.header).should('be.visible')
      cy.get(SELECTORS.graphWrapper).should('be.visible')
    })

    it('has 3 visible controllers', function() {
      cy.get(SELECTORS.controller).then($controllers => {

        expect($controllers.lenght).to.be.eq(3)

        cy.wrap($controllers).each($controller => {
          cy.wrap($controller).should('be.visible')
        })
      })
    })

  })

})
