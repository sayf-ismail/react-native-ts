import { createContext, useReducer } from "react";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    description: "A book",
    amount: 19.49,
    date: new Date("2023-05-18"),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2023-05-15"),
  },
  {
    id: "e3",
    description: "A pair of trousers",
    amount: 89.49,
    date: new Date("2023-05-12"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2023-05-13"),
  },
  {
    id: "e5",
    description: "Another book",
    amount: 5.99,
    date: new Date("2022-02-27"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-02-09"),
  },
  {
    id: "e7",
    description: "A pair of trousers",
    amount: 89.49,
    date: new Date("2021-02-20"),
  },
  {
    id: "e8",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-12-20"),
  },
  {
    id: "e9",
    description: "Another book",
    amount: 5.99,
    date: new Date("2022-02-27"),
  },
  {
    id: "e10",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-02-09"),
  },
  {
    id: "e11",
    description: "A pair of trousers",
    amount: 89.49,
    date: new Date("2021-02-20"),
  },
  {
    id: "e12",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-12-20"),
  },
  {
    id: "e13",
    description: "Another book",
    amount: 5.99,
    date: new Date("2022-02-27"),
  },
];

type ExpenseContextType = {
  expenses: Expense[];
  addExpense: (expenseData: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, expenseData: Expense) => void;
};

export const ExpensesContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: ({ description, amount, date }: Expense | any) => {},
  deleteExpense: (id: string) => {},
  updateExpense: (
    id: string,
    { description, amount, date }: Expense | any
  ) => {},
});

function expensesReducer(
  state: Expense[],
  action: { type: string; payload: any }
) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
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
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData: Expense) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id: string) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id: string, expenseData: Partial<Expense>) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
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
