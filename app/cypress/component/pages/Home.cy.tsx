import React from 'react';
import {Home} from '../../../src/pages/Home'
describe('Home', () => {
    it('display home header', () => {
        cy.mount(<Home />)
        cy.findByRole('heading', {name: 'home'}).should('exist')
    })
})