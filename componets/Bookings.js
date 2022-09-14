import { View, Text,StyleSheet,TouchableOpacity,TextInput } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const Bookings = () => {
    const navigation = useNavigation();
    // const {recipe} = route.params;
  return (
    <View style={styles.container}>
        {/* <View styel={styles.image}>
                <Image style={styles.image}
                source={{uri:`${recipe.image}`}}/>
        </View> */}
        <View>
            <TextInput placeholder='date'/>
            <TextInput placeholder='time'/>
            <TextInput placeholder='guest'/>
        </View>
    <View style={styles.container1}>
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
    </View>
  )
}

export default Bookings;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#242422',
          
    },
    // container1:{
    //     justifyContent:'space-between',
    //     alignSelf:"baseline",
    //     bottom:0
    // },
    seconsVieww:{
        flexDirection:'row',
        backgroundColor:'#242422',
        justifyContent:'space-between',
        width:"100%",
        bottom:0,
        alignSelf:'baseline'
    },
    underIcon:{
        color:'white',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginBottom:6
    },

})
   