import { NavigationContainer, DefaultTheme } from "@react-navigation/native"; 
import colors from "tailwindcss/colors";
import { Box } from "@/components/ui/box";

import { AuthRoutes } from "./auth.routes";
import { AppRoutes } from "./app.routes";

export function Routes() {
  const theme = DefaultTheme
  theme.colors.background = colors.gray[700];

  return (
    <Box className="flex-1 bg-gray-700">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}