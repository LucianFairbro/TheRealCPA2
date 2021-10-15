import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Image,  Component,Button,TextInput,TouchableOpacity,Number} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import React2, { useState } from 'react';
import App from './App';
const TestScreen=({ navigation })=> {
  
  const [textInputValue, setTextInputValue] = useState('');
  const [getValue1, setGetValue1] = useState('');

  
  const saveValueFunction = () => {
   
    if (textInputValue) {
    
      AsyncStorage.setItem('any_key_here', textInputValue);
      
      setage(textInputValue)
      setTextInputValue('')
      

    
    }
    else {
      alert('Please fill data');
      
    }
  };
  
    
    
  const[age,setage]=useState(0); 
  const[shouldShow,setshouldShow]=useState(null); 
  const[shouldShow1,setshouldShow1]=useState(null); 
  const[color,setcolor1]=useState("white"); 
 
  const getValueFunction1 = () => {
    
    AsyncStorage.getItem('any_key_here').then(
      (value1) =>
        
        setGetValue1(value1)
        
      
    );
    if (age<25){
         
       setshouldShow(!shouldShow1)
       
    }
    else{
      setshouldShow1(!shouldShow1)
      setshouldShow(!shouldShow1)
      setcolor1("black")
      

       
      
    }
  };
 

  return (
    <View style={{flex:3, backgroundColor:'black'}}>
    <View style={{flex:1, backgroundColor:'black'}}>
    <Text style={{textAlign:'center',fontSize:40,color:"white"}}>Getting started</Text>
    </View>
    <View style={{flex:3, backgroundColor:'black'}}>
    <Text style={{textAlign:'center',fontSize:15,color:"white"}}>First we need some information about yourself:</Text>
    <Text ></Text>
    
    <TextInput value={textInputValue} 
          onChangeText={(data) => setTextInputValue(data) }
          
          style={{name:"data",textAlign:'center',keyboardType: 'numeric',fontSize:25,color:"black",backgroundColor:"white",height:"10%"}}></TextInput>
    <Text style={{textAlign:'center',fontSize:15,color:"white",height:"20%"}}>What is your Age?</Text>
        <View>
    
        <TouchableOpacity
    
        title="data"
        alignItems='center'
        height="10"
        backgroundColor="white"
        onPress={
        saveValueFunction
        }>
        <Text style={{color:'green'}}>Save Age</Text>
        </TouchableOpacity>
      </View>
      <View>
    <TouchableOpacity  
        title="Get Info"
        backgroundColor="white"
        height="10"
        onPress={
        getValueFunction1
        
        }>
        <Text style={{color:'green'}}>Get Info</Text></TouchableOpacity>
        </View>
      <Text style={{textAlign:'center',fontSize:15,color:"white",height:"8%"}}></Text>
         <Text style={{textAlign:'center',fontSize:15,color:"white",height:"8%"}}> You are {getValue1},</Text>
 
        {shouldShow ? (
         <Text style={{textAlign:'center',fontSize:15,color:color,height:"8%"}}> Which means your brain is still developing if you do have a concussion this could be very dangerous</Text>
            ):true}
           
            {shouldShow1 ? (
  <Text style={{textAlign:'center',fontSize:15,color:"white",height:"8%"}}> Which means your brain is not still developing but if you do have a concussion it is still important to check</Text>
         ):false}
  
    </View>

    </View>
  );
};
export default TestScreen;