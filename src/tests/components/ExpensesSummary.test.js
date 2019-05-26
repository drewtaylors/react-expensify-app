import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should correctly render ExpensesSummary with 0 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={0} expensesTotal={0} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={23} expensesTotal={232344325} />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpensesSummary with 1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot()
})