import { PATHS, SELECTORS, VAR_NAMES } from './config/page.config'
import { controllers } from './tests/controllers'

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
        expect($controllers.length).to.be.eq(3)

        cy.wrap($controllers).each($controller => {
          cy.wrap($controller).should('be.visible')
        })
      })
    })

    it('has a working timer', function() {
      cy.get(SELECTORS.timer).then($timer => {
        const time = $timer.text().replace(/^\D+|\D+$/g, '')

        const diffrence = 2 //s

        cy.wait(diffrence * 1000) //ms

        cy.get(SELECTORS.timer).then($newTimer => {
          const newTime = $timer.text().replace(/^\D+|\D+$/g, '')
          expect(newTime).to.be.at.most(time - diffrence)
        })
      })
    })

    controllers()
  })
})
