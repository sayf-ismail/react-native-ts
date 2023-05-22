type Expense = {
  id: string;
  description: string;
  amount: number;
  date: Date;
};

type ExpensesOutputProps = {
  expenses?: Expense[] | undefined;
  expensesPeriod?: string;
  periodName?: string;
  fallbackText?: string;
};
