
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabNavigator() {
  const tabs = [
    { name: "index", title: "Home", icon: "home-outline" },
    { name: "add", title: "Add Movie", icon: "add-circle-outline" },
    { name: "saved", title: "Saved", icon: "bookmark-outline" },
    { name: "profile", title: "Profile", icon: "person-outline" },
  ] as const;

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#5836db",
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          height: 65,
          paddingBottom: 7,
        },
        headerTitleStyle: {
          fontWeight: "700",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name={tab.icon}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
