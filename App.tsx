import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import Loading from "@screens/Loading";
import { StatusBar, View } from "react-native";
import { Routes } from "src/routes";
import { useEffect, useState } from "react";
import Buddy from "@screens/Buddy";
import { CormorantGaramond_400Regular_Italic, useFonts } from "@expo-google-fonts/cormorant-garamond";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    CormorantGaramond_400Regular_Italic
  })
  const [showBuddy, setShowBuddy] = useState(true)

  useEffect(() => {
    if (fontsLoaded) {
      const timer = setTimeout(() => {
        setShowBuddy(false)
      }, 9000)
      return () => clearTimeout(timer)
    }
  }, [fontsLoaded])

  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.PRIMARY_200 }}>
      <ThemeProvider theme={theme}>
        <StatusBar backgroundColor="transparent" translucent />
        {fontsLoaded ? (showBuddy ? <Buddy /> : <Routes />) : <Loading />}
      </ThemeProvider>
    </View>
  )
}
