import React from 'react'
import { createYield } from 'typescript'
import {Add} from '../../../src/pages/Add'
describe('Add', () => {
    it('display name field', () => {
        cy.mount(<Add />)
        cy.findByLabelText('Name').should('exist')
    })

    it('send name', () => {
        const onUpdateSpy = cy.spy().as('onUpdateSpy')
        cy.mount(<Add onUpdate={onUpdateSpy} />)

        cy.findByLabelText('Name').type('anyText').screenshot({overwrite: true})

        cy.get('@onUpdateSpy').should('have.been.calledWith', 'anyText')
    })
})