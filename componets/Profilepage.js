import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

const Profilepage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Profilepage</Text>


      <View style={styles.seconsVieww}>
            <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
            <Icon
               name="ios-home"
               color="#F2AD71"
               size={40}
               
            />
            <Text style={styles.underIcon}>home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Profilepage')}}>
            <Icon
               name="ios-add"
               color="#F2AD71"
               size={40}
            />
             <Text style={styles.underIcon} >profile</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{navigation.navigate('Bookings')}}>
            <Icon
               name="ios-add"
               color="#F2AD71"
               size={40}
            />
             <Text style={styles.underIcon}>bookings</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default Profilepage;
const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#242422',
      
},
seconsVieww:{
  flexDirection:'row',
  width:'100%',
  justifyContent:'space-between'
},
underIcon:{
  color:'white',
  alignItems:'center',
  justifyContent:'center',
  marginLeft:10,
  marginBottom:6
},
})