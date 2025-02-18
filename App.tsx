import { StatusBar, View } from 'react-native';
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Text } from "@/components/ui/text"
import { useFonts, Roboto_700Bold, Roboto_400Regular } from "@expo-google-fonts/roboto"
import { Loading } from '@components/Loading';
import { SignIn } from '@screens/Signin';

export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular })

  return (
    <GluestackUIProvider mode="light">
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        
        {fontsLoaded ? <SignIn /> : <Loading />}
    </GluestackUIProvider>
  );
}

