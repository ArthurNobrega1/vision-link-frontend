import { ThemeProvider } from "styled-components/native";
import theme from "./src/theme";
import { useFonts, DMSans_400Regular } from "@expo-google-fonts/dm-sans";
import Loading from "@screens/Loading";
import { StatusBar, View } from "react-native";
import { Routes } from "src/routes";
import { useEffect, useState } from "react";
import Buddy from "@screens/Buddy";

export default function App() {
  const [fontLoaded] = useFonts({ DMSans_400Regular })
  const [showBuddy, setShowBuddy] = useState(true)

  useEffect(() => {
    if (fontLoaded) {
      const timer = setTimeout(() => {
        setShowBuddy(false)
      }, 9000)

      return () => clearTimeout(timer)
    }
  }, [fontLoaded])
  return (
    <View style={{ flex: 1, backgroundColor: theme.COLORS.PRIMARY_200 }}>
      <ThemeProvider theme={theme}>
        <StatusBar
          backgroundColor={'transparent'}
          translucent
        />
        {false ? (showBuddy ? <Buddy /> : <Routes />) : <Login />}
      </ThemeProvider>
    </View>
  )
}
