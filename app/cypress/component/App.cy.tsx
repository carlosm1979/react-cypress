import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../../src/App';

const BrowserWrapper = (ui) => (<BrowserRouter>{ui}</BrowserRouter>)


describe('App', () => {
    it('display app', () => {
      cy.mount(BrowserWrapper(<App/>))
      cy.findByText('React cypress project').should('exist')
      cy.screenshot()
    })

    describe('Navigate', () => {
      it('navigate to add', () => {
        cy.mount(BrowserWrapper(<App/>))
  
        cy.findByText('go add').click()
  
        cy.findByLabelText('Name').should('exist')
        cy.screenshot()
      })
  
      it('navigate home', () => {
        cy.mount(BrowserWrapper(<App/>))
  
        cy.findByText('go home').click()
  
        cy.findByRole('heading', {name: 'home'}).should('exist')
        cy.screenshot()
      })
    })


  })