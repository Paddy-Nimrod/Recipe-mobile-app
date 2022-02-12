import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";

import { Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CustomHeaderButton from "../components/HeaderButton";

import Colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primaryColor,
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "Meals Categories",
        }}
      />
      <Stack.Screen name="Category Meals" component={CategoryMealsScreen} />
      <Stack.Screen
        name="Meal Details"
        component={MealDetailsScreen}
        options={({ route }) => ({
          headerTitle: route.params.mealTitle,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="favourite"
                iconName="ios-star"
                onPress={() => {
                  alert("Favorite Icon pressed");
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

function MealsFavTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ tabBarActiveTintColor: Colors.accentColor }}
    >
      <Tab.Screen
        name="Hotel Meals"
        component={MealsNavigator}
        options={{
          headerShown: false,
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-restaurant-outline"
                size={24}
                color={tabInfo.color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoritesScreen}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="ios-star-outline"
                size={24}
                color={tabInfo.color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default MealsFavTabNavigator;
