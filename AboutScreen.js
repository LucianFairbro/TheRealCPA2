import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image,  Component,Button,UseState,TextInput,TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import App from './App';
function AboutScreen({ navigation }) {
      return(
      <View style={{flex:3,backgroundColor:'lightblue'}}>
      <View style={{alignItems:"center",flex:1,backgroundColor:'lightblue'}}>
           <Text style={{textAlignVertical:"center",fontSize:40,alignItems:'center',color:'black', }}></Text>
           <Text style={{textAlignVertical:"center",fontSize:40,alignItems:'center',color:'black', }}>About</Text>
      </View>
      <View style={{flex:1,backgroundColor:'lightblue'}}>
         <Text style={{fontSize:12,alignItems:'center',color:'black', }}> This app can be used to test if you have a concussion  </Text>
         <Text style={{fontSize:12,alignItems:'center',color:'black', }}> Often times concussions can be tricky to discover   </Text>
         <Text style={{fontSize:12,alignItems:'center',color:'black', }}> This test may help you realize that you do in fact have a concussion  </Text>
         <Text style={{fontSize:12,alignItems:'center',color:'black', }}> Thank you and if you would like to take the test please return home</Text>

      </View>
      <View style={{flex:1,backgroundColor:'lightblue'}}>
      <Button
        title="Home screen"
        color="black"
        height='stretch'
        onPress={()=>{
          navigation.navigate('Home')
            }}
      />
      </View>
      
      </View>

    );};
    export default AboutScreen;