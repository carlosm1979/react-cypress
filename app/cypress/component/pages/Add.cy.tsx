import React from 'react'
import {Add} from '../../../src/pages/Add'
describe('Add', () => {
    it('display name field', () => {
        cy.mount(<Add />)
        cy.findByLabelText('Name').should('exist')

    })
})