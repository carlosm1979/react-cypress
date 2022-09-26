import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

describe('App', () => {
    it('display app', () => {
      cy.mount(<BrowserRouter><App /></BrowserRouter> )
      cy.findByText('React cypress project').should('exist')
      cy.screenshot({overwrite: true})
    })

    describe('Navigate', () => {
      it('navigate to add', () => {
        cy.mount(<BrowserRouter><App /></BrowserRouter> )
  
        cy.findByText('go add').click()
  
        cy.findByLabelText('Name').should('exist')
        cy.screenshot({overwrite: true})
      })
  
      it('navigate home', () => {
        cy.mount(<BrowserRouter><App /></BrowserRouter> )
  
        cy.findByText('go home').click()
  
        cy.findByRole('heading', {name: 'home'}).should('exist')
        cy.screenshot({overwrite: true})
      })
    })


  })