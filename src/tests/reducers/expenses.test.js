import moment from 'moment'
import { expensesReducer } from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        expense: {
            id: 4,
            description: 'Phone',
            note: 'Text Mom',
            amount: 100000,
            createdAt: moment()
        }
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('should edit an expense', () => {
    const note = 'chiclet'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].note).toBe(note)
})

test('should not edit expense if expense not found', () => {
    const note = 'invalid'
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            note
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})