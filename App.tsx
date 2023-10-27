import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeNavigator from './HomeNavigator';
import { NavigationContainer } from '@react-navigation/native';
import {QueryClientProvider, QueryClient} from 'react-query'

const queryClient = new QueryClient() ;
export default function App() {
  return (
    <QueryClientProvider client={queryClient} >
      <NavigationContainer>
        <HomeNavigator />
        <StatusBar style="auto" />
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
