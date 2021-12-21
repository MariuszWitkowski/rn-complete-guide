import React, { FC, useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

export interface IGoalInputProps {
  visible: boolean;
  onAddGoals: (goalTitle: string) => void;
  onCancel: () => void;
}

export const GoalInput: FC<IGoalInputProps> = ({
  visible,
  onAddGoals,
  onCancel,
}) => {
  const [enteredGoal, setEnteredGoal] = useState<string>('');

  const goalInputHandler = (enteredText: string) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    onAddGoals(enteredGoal);
    setEnteredGoal('');
  };

  const cancelHandler = () => {
    onCancel();
    setEnteredGoal('');
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={cancelHandler} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});
