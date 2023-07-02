import { View, Text, StyleSheet,Image } from 'react-native'
import React,{useState} from 'react'
import {Divider} from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const OrderDetails = ({navigation}) => {

  
  return (
    // <>
    // {details?.map((product) => (
    <View style={styles.wrapper}>
        <View style={styles.out_box}>
                <View style={styles.in_box}>
                    <View>
                        <Text style={styles.text}>Name: Ananya Doshi</Text>
                        <Text style={styles.text}>Phone Number: 7875643342</Text>
                        <Text style={styles.text}>Food Item: Chole</Text>
                        <Text style={styles.text}>Quantity: 0.5kg</Text>
                    </View>
                    <View style={{justifyContent:'space-between'}}>
                         <Image style={{width:50,height:50}} source={{uri: 'https://cdn-icons-png.flaticon.com/512/6329/6329732.png'}}/>
                    </View>    
                </View>    
        </View>
        <Text></Text>
        <Divider width={0.7} orientation='horizontal'/>

    </View>
    //  ))}
    // </>
  )
}

const styles=StyleSheet.create({

    wrapper:{
        marginTop:-5,
        
    },
    out_box: {
        backgroundColor:'#E9E9E9',
        marginTop:20,
        width:'92%',
        alignSelf:'center',
        height:140
         },
    in_box:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        padding:3,
        fontSize:15,
        fontWeight:'500'
    }
    

    
   
})
export default OrderDetails