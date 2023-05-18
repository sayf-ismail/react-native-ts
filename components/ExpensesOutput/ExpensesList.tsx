import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderExpenseItem(itemData: { item: Expense }): React.ReactElement {
  return <ExpenseItem {...itemData.item} />;
}

function ExpensesList({ expenses }: ExpensesOutputProps) {
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item!.id}
    />
  );
}
export default ExpensesList;
