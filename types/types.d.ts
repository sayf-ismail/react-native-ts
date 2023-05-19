type Expense =
  | {
      id?: string;
      description: string;
      amount: number;
      date: Date;
    }
  | undefined
  | null;

type ExpensesOutputProps = {
  expenses?: Expense[] | undefined;
  expensesPeriod?: string;
  periodName?: string;
  fallbackText?: string;
};
