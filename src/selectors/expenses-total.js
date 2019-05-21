// Select expenses total

const selectExpensesTotal = (expenses) => (
    expenses
        .map((expense) => expense.amount)
        .reduce((sum, value) => sum + value, 0)
)

export default selectExpensesTotal