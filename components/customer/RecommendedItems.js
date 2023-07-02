import { View, Text,TextInput, Button, StyleSheet, TouchableOpacity,Alert,Image } from 'react-native'
import React,{useState} from 'react'
import {Divider,SearchBar} from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

const RecommendedItems = () => {
  return (
    <View style={styles.wrapper} >
        <Divider width={1} orientation="horizontal"/>
        <View style={{padding:5}}>
                <Text style={{fontWeight:'600', marginHorizontal:10}}>VIEW RECOMMENDATIONS</Text>
        </View>
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={true}
            style={{padding:10, flexDirection:'row'}}
            
        >
            <View style={[styles.box,styles.shadowProp]}>
                <Image style={styles.icons} source={require('../../assets/rice.jpg')}/>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:7}}>
                    <Text style={{color:'black', fontWeight:'500'}}>Jeera Rice</Text>
                    <TouchableOpacity >
                                <View style={styles.middleicon}>
                                <Text style={{
                                    fontWeight:'500',
                                    color:'black',
                                    textAlign:'center',
                                    fontSize:18, marginTop:-3
                                }}>+</Text>
                                </View>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:12, fontWeight:'500', textAlign:'center'}}>Rs. 75</Text>
                
            </View>
            
            <Text>  </Text>
            <View style={styles.box}>
            <Image style={styles.icons} source={require('../../assets/pulao.jpg')}/>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:7}}>
                    <Text style={{color:'black', fontWeight:'500'}}>Pulao</Text>
                    <TouchableOpacity >
                                <View style={styles.middleicon}>
                                <Text style={{
                                    fontWeight:'500',
                                    color:'black',
                                    textAlign:'center',
                                    fontSize:18, marginTop:-3
                                }}>+</Text>
                                </View>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:12, fontWeight:'500', textAlign:'center'}}>Rs. 115</Text>

            </View>
            <Text>  </Text>
            <View style={styles.box}>
            <Image style={styles.icons} source={require('../../assets/friedrice.jpg')}/>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:7}}>
                    <Text style={{color:'black', fontWeight:'500'}}>Fried Rice</Text>
                    <TouchableOpacity >
                                <View style={styles.middleicon}>
                                <Text style={{
                                    fontWeight:'500',
                                    color:'black',
                                    textAlign:'center',
                                    fontSize:18, marginTop:-3
                                }}>+</Text>
                                </View>
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize:12, fontWeight:'500', textAlign:'center'}}>Rs. 130</Text>

            </View>
            
        </ScrollView>
        <Divider width={1} orientation="horizontal"/> 
    </View>
  )
}
const styles=StyleSheet.create({
    wrapper:{
        marginTop:'80%'
    },
    box:{
            backgroundColor:'#F0F0F0',
            height:150,
            width:140,
            borderRadius:20,
            borderWidth:0.3,
            borderColor:'gray'
   
    },   
    shadowProp: {  
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,     
      }, 
    icons:{
        height:90, width:140,
        borderTopLeftRadius:20,
        borderTopRightRadius:20 
    },
    middleicon:
    {
        height:25, width:25,
       marginRight:10,
        backgroundColor:'#D1F952',
        borderRadius:50

    },
})
export default RecommendedItems