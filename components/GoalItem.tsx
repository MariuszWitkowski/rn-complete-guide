import React, { FC } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export interface IGoalItemProps {
  id: string;
  title: string;
  onRemoveGoal: (goalId: string) => void;
}

export const GoalItem: FC<IGoalItemProps> = ({ id, title, onRemoveGoal }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => onRemoveGoal(id)}>
      <View style={styles.listItem}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
