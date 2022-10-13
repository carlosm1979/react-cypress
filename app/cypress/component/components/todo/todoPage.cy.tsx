import React from 'react'
import {TodoPage} from '../../../../src/components/todo/todoPage'


describe('TodoPage', () => {
    beforeEach(() => {
        cy.viewport(1024, 768)
    })

    it('get todos when load', () => {
        const anyCaption = 'anyCaption'
         cy.intercept('GET', 'http://www.miapi.com/todos', [{
            id: 0,
            caption: anyCaption
        }])

        cy.mount(<TodoPage />)

        cy.findByText(anyCaption)
        cy.screenshot({overwrite: true})
    })
})