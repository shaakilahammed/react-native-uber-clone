import { useAuth } from "@clerk/clerk-expo";
import { Redirect } from "expo-router";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const Index = () => {
  const { isSignedIn, isLoaded } = useAuth();
  console.log("isSignedIn:", isSignedIn, "isLoaded:", isLoaded);

  // Wait for Clerk to finish loading before making redirect decision
  if (!isLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0286FF" />
      </View>
    );
  }

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />;
  }
  return <Redirect href="/welcome" />;
};

export default Index;
