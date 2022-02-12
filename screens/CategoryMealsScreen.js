import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import MealItem from "../components/MealItem";

import { MEALS } from "../data/dummy-data";

const CategoryMealsScreen = (props) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectMeal={() => {
          props.navigation.navigate("Meal Details", {
            mealId: itemData.item.id,
            mealTitle: itemData.item.title,
          });
        }}
      />
    );
  };

  const { categoryId } = props.route.params;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        key={(item, idx) => {
          item.id;
        }}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
});

export default CategoryMealsScreen;
