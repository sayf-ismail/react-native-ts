import { View, StyleSheet } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES: Expense[] = [
  {
    id: "e1",
    description: "A book",
    amount: 19.49,
    date: new Date("2021-02-28"),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 59.99,
    date: new Date("2021-02-09"),
  },
  {
    id: "e3",
    description: "A pair of trousers",
    amount: 89.49,
    date: new Date("2021-02-20"),
  },
  {
    id: "e4",
    description: "Some bananas",
    amount: 5.99,
    date: new Date("2022-12-20"),
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

function ExpensesOutput({ expenses, expensesPeriod }: ExpensesOutputProps) {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: GlobalStyles.colors.primary700,
  },
});
