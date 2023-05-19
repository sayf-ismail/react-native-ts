import { useContext, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";

function RecentExpenses() {
  const expenseCtx = useContext(ExpensesContext);

  const recentExpenses: Expense[] = expenseCtx.expenses.filter(
    (expense: Expense | undefined) => {
      const today = new Date();
      const dateSevenDaysAgo = getDateMinusDays(today, 7);
      return expense!.date > dateSevenDaysAgo;
    }
  );
  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days"
    />
  );
}

export default RecentExpenses;
