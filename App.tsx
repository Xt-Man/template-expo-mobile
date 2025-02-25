import { StatusBar, View } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto"

import { Routes } from '@routes/index';
import { Loading } from '@components/Loading';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider mode="light">
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        {fontsLoaded ? <Routes /> : <Loading />}
    </GluestackUIProvider>
  );
}

