import React from 'react';
import App from '../../src/App';

describe('App', () => {
    it('display app', () => {
      cy.mount(<App />)
      cy.findByText(/learn react/i).should('exist')
      cy.screenshot()
    })
  })