import { Redirect, router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Page() {
//  router.push("/(root)")
  return (
  <Redirect href={"(root)"}  />
  );
}
