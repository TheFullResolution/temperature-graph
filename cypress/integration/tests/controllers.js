import { SELECTORS } from '../config/page.config'

const REGEX = /[+-]?\d+/ //match all the numbers including negative

export const controllers = () => {
  it('all controllers have working button +', function() {
    cy.get(SELECTORS.controller).each($controller => {
      cy.wrap($controller).within(() => {
        cy.get('p').then($p => {
          const value = $p.text().match(REGEX)

          cy
            .get('button')
            .contains('+')
            .click()

          cy.get('p').then($newP => {
            const newValue = $newP.text().match(REGEX)

            expect(newValue - value).to.be.eq(1)
          })
        })
      })
    })
  })

  it('all controllers have working button -', function() {
    cy.reload()
    cy.get(SELECTORS.controller).each($controller => {
      cy.wrap($controller).within(() => {
        cy.get('p').then($p => {
          const value = $p.text().match(REGEX)
          const MINUS = String.fromCharCode(8722)
          cy
            .get('button')
            .contains(MINUS)
            .click()

          cy.get('p').then($newP => {
            const newValue = $newP.text().match(REGEX)

            expect(value - newValue).to.be.eq(1)
          })
        })
      })
    })
  })

  it('all controllers when long press on + button will keep adding values', function() {
    cy.reload()
    cy.get(SELECTORS.controller).each($controller => {
      cy.wrap($controller).within(() => {
        cy.get('p').then($p => {
          const value = $p.text().match(REGEX)
          cy
            .get('button')
            .contains('+')
            .trigger('mousedown')
            .wait(2500)
            .trigger('mouseup')

          cy.get('p').then($newP => {
            const newValue = $newP.text().match(REGEX)

            expect(newValue - value).to.be.at.least(14)
          })
        })
      })
    })
  })

  it('all controllers when long press on - button will keep substructing values', function() {
    cy.reload()

    cy.get(SELECTORS.controller).each($controller => {
      cy.wrap($controller).within(() => {
        cy.get('p').then($p => {
          const value = $p.text().match(REGEX)
          const MINUS = String.fromCharCode(8722)
          cy
            .get('button')
            .contains(MINUS)
            .trigger('mousedown')
            .wait(2500)
            .trigger('mouseup')

          cy.get('p').then($newP => {
            const newValue = $newP.text().match(REGEX)

            expect(value - newValue).to.be.at.most(14)
          })
        })
      })
    })
  })
}
