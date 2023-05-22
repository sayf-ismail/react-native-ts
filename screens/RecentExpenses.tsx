import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const expensesCtx = useContext(ExpensesContext);
  // const [fetchedExpenses, setFetchedExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    async function getExpenses() {
      setIsFetching(true);
      const expenses = await fetchExpenses();
      setTimeout(() => {
        setIsFetching(false);
      }, 1500);
      expensesCtx.setExpenses(expenses);
      // setFetchedExpenses(expenses);
    }
    getExpenses();
  }, []);

  if (isFetching) {
    return <LoadingOverlay />;
  }

  // const recentExpenses: Expense[] = fetchedExpenses.filter(
  const recentExpenses: Expense[] = expensesCtx.expenses.filter(
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
