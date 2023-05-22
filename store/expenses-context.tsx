import { createContext, useReducer } from "react";

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expenseData: Expense) => void;
  setExpenses: (expenses: Expense[]) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: Expense) => void;
};

export const ExpensesContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: ({ id, description, amount, date }: Expense | any) => {},
  setExpenses: (expenses: Expense[]) => {},
  deleteExpense: (id: string) => {},
  updateExpense: ({
    id,
    description,
    amount,
    date,
  }: Expense | any | undefined) => {},
});

function expensesReducer(
  state: Expense[],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "ADD":
      return [action.payload, ...state];
    case "SET":
      const inverted = action.payload.reverse();
      return inverted;
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense?.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense?.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }: { children: any }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData: Expense) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function setExpenses(expenses: Expense[]) {
    dispatch({ type: "SET", payload: expenses });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, expenseData: Partial<Expense>) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    setExpenses: setExpenses,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
