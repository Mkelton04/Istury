import { NavigationContainer } from "@react-navigation/native";
import {StackRoutes} from './src/routes/StackRoutes'
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#004973" barStyle="light-content"/>
      <StackRoutes/>
      
    </NavigationContainer>
  
  );
}

