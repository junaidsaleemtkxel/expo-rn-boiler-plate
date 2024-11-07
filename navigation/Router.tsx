import { NavigationContainer } from "@react-navigation/native";
import React, { PropsWithChildren, useState } from "react";
import { HomeStack } from "./stacks/HomeStack";
import { AuthStack } from "./stacks/AuthStack";

interface RouterProps {}

export const Router: React.FC<PropsWithChildren<RouterProps>> = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  return isUserAuthenticated ? <HomeStack /> : <AuthStack />;
};
