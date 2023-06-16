
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/Screens/HomeScreen';
import AddTodo from './src/Screens/AddTodo';
import store from './src/redux/store';





const  App = () => {

  const Stack = createStackNavigator();

  const StackNavigator = () => (
    <Stack.Navigator >
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <Stack.Screen name="AddTodo" component={AddTodo} options={{title: "Add some task", headerStyle:{backgroundColor:"#fefde5"},headerTitleAlign:"center"}} />
    </Stack.Navigator>
  )

  

  

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  )
}



export default App;
