import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Home({ navigation }) {
  return (
      <View style={styles.container}>
        <Text>Wel Come</Text>
        <Button title="Back Home" onPress={()=> navigation.push('Splash') } />
      </View>
        
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
