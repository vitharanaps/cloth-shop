import { Stack } from "expo-router"
import "../global.css";

const Layout = () => {
  return (
  <Stack screenOptions={{
    headerShown:false
  }}>
    <Stack.Screen name="(root)" />
    <Stack.Screen name="(auth)" />
  </Stack>
  )
}

export default Layout