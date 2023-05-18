import { Modal, View, Text, StyleSheet, Button } from "react-native"

type Props = {
  visible: boolean;
  onClose: () => void;
}

function ExpenseInput(props: Props) {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={props.visible}
    >
      <View style={styles.container}>
        <Text>ExpenseInput</Text>
        <Button title='Close' onPress={props.onClose} />
      </View>
    </Modal>
  )
}
export default ExpenseInput

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  }
})