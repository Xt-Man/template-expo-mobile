import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import colors from "tailwindcss/colors"

import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";

import HomeSvg from '@assets/home.svg'
import ProfileSvg from '@assets/profile.svg'
import { Platform } from "react-native";

type AppRoutes = {
  home: undefined;
  profile: undefined;
}

export type AppNavigatorRoutesProps = BottomTabNavigationProp<AppRoutes>

const {Navigator, Screen} = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

  

  return (
    <Navigator screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.green[500],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.gray[600],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? "auto" : 96,
          paddingBottom: 10,
          paddingTop: 6,
        }
    }}>
      <Screen 
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <HomeSvg fill={color} className="w-6 h-6" />
          )
        }}
      />

      <Screen 
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({color}) => (
            <ProfileSvg fill={color} className="w-6 h-6" />
          )
        }}
      />
    </Navigator>
  )
}