
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import persistStore from 'redux-persist/es/persistStore';

import HomeScreen from './src/Screens/HomeScreen';
import AddTodo from './src/Screens/AddTodo';
import store from './src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';



let persistor = persistStore(store)

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
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  )
}



export default App;
