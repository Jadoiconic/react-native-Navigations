import * as React from "react";
import "react-native-gesture-handler";
import { SafeAreaView } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./Components/Screens/ProfileScreen";
import HomeScreen from "./Components/Screens/HomeScreen";
import FavoritesScreen from "./Components/Screens/FavoritesScreen";
import SettingScreen from "./Components/Screens/SettingScreen";
import SearchScreen from "./Components/Screens/SearchScreen";
import SignoutScreen from "./Components/Screens/SignoutScreen";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Drawer = createDrawerNavigator();
const Tab = createMaterialBottomTabNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: "teal" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Navigations",
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "Search",
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="heart" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function SideBar() {
  const [mode, setMode] = React.useState("");
  return (
    <Drawer.Navigator useLegacyImplementation={true}>
      <Drawer.Screen
        name="MyTabs"
        component={MyTabs}
        options={{
          title: "Navigations",
          drawerLabel: "Home",
          headerStyle: {
            backgroundColor: "teal",
          },
        }}
      />
      <Drawer.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: "Settings",
          headerStyle: {
            backgroundColor:"teal",
          },
        }}
      />
      <Drawer.Screen
        name="Signout"
        component={SignoutScreen}
        options={{
          title: "Sign Out",
          headerStyle: {
            backgroundColor:"teal",
          },
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <SideBar />
    </NavigationContainer>
  );
}
