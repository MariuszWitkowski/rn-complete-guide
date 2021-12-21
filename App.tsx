import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, SafeAreaView, FlatList, Button } from 'react-native';

import { GoalItem } from './components/GoalItem';
import { GoalInput } from './components/GoalInput';
import { ICourseGoal } from './domain/Goals';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<ICourseGoal[]>([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const closeAddMode = () => {
    setIsAddMode(false);
  };
  const addGoalHandler = (goalTitle: string) => {
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    closeAddMode();
  };
  const removeGoalHandler = (goalId: string) => {
    setCourseGoals((currentGoals) =>
      currentGoals.filter((goal) => goal.id !== goalId)
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.screen}>
        <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
        <GoalInput
          visible={isAddMode}
          onAddGoals={addGoalHandler}
          onCancel={closeAddMode}
        />
        <FlatList<ICourseGoal>
          data={courseGoals}
          renderItem={({ item }) => (
            <GoalItem
              title={item.value}
              id={item.id}
              onRemoveGoal={removeGoalHandler}
            />
          )}
          keyExtractor={(item: ICourseGoal) => item.id}
        />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
