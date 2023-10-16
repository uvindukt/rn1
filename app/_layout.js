import { Stack, Slot } from "expo-router";
import { store, persistor } from '../store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

const Layout = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Slot />} persistor={persistor}>
        <Stack>
          <Stack.Screen
            name="entry"
            options={{
              title: "Budget Entry",
            }}
          />
          <Stack.Screen
            name="list"
            options={{
              title: "Budget Entry List",
            }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  )
};

export default Layout;