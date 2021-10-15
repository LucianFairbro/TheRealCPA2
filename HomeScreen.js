import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image,  Component,Button,UseState,TextInput,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import App from './App';
function HomeScreen  ({navigation}) {
  
  return (
    
    <View style={styles.container}>

      <View style={{flex:4}}>
        
        <View style={{flex:1, backgroundColor:'black'}}>
          <Text style={{textAlignVertical:'bottom',fontSize:40,alignItems:'center',color:'white', }}> </Text>
          <Text style={{textAlignVertical:'bottom',fontSize:40,alignItems:'center',color:'white', }}> Concussion Test</Text>
        </View>
        <View style={{flex:2, backgroundColor:'white'}}>
         
      <Image
        style={styles.stretch}
        source={{
          uri: 'https://www.nata.org/sites/default/files/500x500_practice-patient-care_health-issues_concussion.jpg',
        }}
      />
   
        </View>
        <View style={{flex:2, backgroundColor:'gray'}}>
        <View style={{flex:1, backgroundColor:'black'}}>
        <Button
        title="Take test"
        color="white"
        height=''
        onPress={()=>{
            navigation.navigate('Test')
            }}
      />  
      </View> 
      <View style={{flex:1, backgroundColor:'gray'}}>
      <Button
        title="About this App"
        color="white"
        height='stretch'
        onPress={()=>{
            navigation.navigate('About')
            }}
      />
       </View> 
        </View>
        
      </View>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderWidth:3,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'bottom',
    flexDirection:'row',
  },
  stretch: {

    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  
  input: {
    height: '10%',
    alignItems:"left",
    backgroundColor:'yellow'
  },
  
});
export default HomeScreen;