import { View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import React from 'react'

const Bookings = () => {
    // const {recipe} = route.params;
  return (
    <View>
        {/* <View styel={styles.image}>
                <Image style={styles.image}
                source={{uri:`${recipe.image}`}}/>
            
        <View>
            <Text style={styles.sizes}>{`${recipe.label}`}</Text>
        </View>
        </View> */}
    <View style={styles.container}>
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
        backgroundColor:'#242422'
          
    },
    seconsVieww:{
        flexDirection:'row',
        backgroundColor:'#242422',
        justifyContent:'space-between',
        width:"100%",
        position:'fixed',
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
   