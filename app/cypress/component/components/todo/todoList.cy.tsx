import React from 'react'
import {TodoList} from '../../../../src/components/todo/todoList'

describe('TodoList', () => {
    it('display items when load', () => {
        cy.mount(<TodoList items={[{
            id: 0,
            caption: 'anyCaption'
        }]} />)

        cy.findByText('anyCaption').should('exist')
    })
})