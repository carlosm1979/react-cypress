import React from 'react'
import {TodoList} from '../../../../src/components/todo/todoList'

describe('TodoList', () => {
    it('display items when load', () => {
        const anyCaption = 'anyCaption'
        const otherCaption = 'otherCaption'
        const items = [{
            id: 0,
            caption: anyCaption
        }, {
            id: 0,
            caption: otherCaption
        }]
        cy.mount(<TodoList items={items} />)

        cy.findByText(anyCaption).should('exist')
        cy.findByText(otherCaption).should('exist')
    })
})