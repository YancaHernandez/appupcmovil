import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Button } from "react-native-paper";
import { FontAwesome5 } from "@expo/vector-icons";

import TallerConstruyendoPais from "../screens/TallerConstruyendoPais";
import LogoBar from "../components/LogoBar";
import DepartmentMunicipalityBar from "../components/DepartmentMunicipalityBar";
import CaracteristicasDepartamento from "../screens/reports/CaracteristicasDepartamento";

const Stack = createStackNavigator();

const TallerConstruyendoPaisStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="tallerConstruyendoPais"
        component={TallerConstruyendoPais}
        options={() => ({
          headerTitle: () => <LogoBar />,
          headerLeft: () => (
            <Button
              onPress={() => navigation.openDrawer()}
              style={{ marginHorizontal: -8 }}
            >
              <FontAwesome5 name="bars" size={24} color="#666" />
            </Button>
          ),
        })}
      />

      <Stack.Screen
        name="caracteristicasDepartamento"
        component={CaracteristicasDepartamento}
        options={({ navigation, route }) => ({
          headerTitle: (props) => (
            <DepartmentMunicipalityBar
              {...props}
              navigation={navigation}
              route={route}
            />
          ),
          headerTitleAlign: "center",
        })}
      />
    </Stack.Navigator>
  );
};

export default TallerConstruyendoPaisStack;
