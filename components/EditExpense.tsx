import { Modal, View, Text, StyleSheet, Button } from "react-native"

type Props = {
  title?: string;
  visible: boolean;
  onClose: () => void;
}

function EditExpense(props: Props) {
  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={props.visible}
    >
      <View style={styles.container}>
        <Text>{props?.title}</Text>
        <Button title='Close' onPress={props.onClose} />
      </View>
    </Modal>
  )
}
export default EditExpense

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc'
  }
})