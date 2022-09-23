import React,{useState,useEffect} from "react";
import { ScrollView, Text, StyleSheet,View ,Image,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';
import {firebase} from '../firebase';
// import { FlatList } from "react-native-web";


// const Reviewpage=({route})=>{
    // const {item} = route.params;
    const Reviewpage=({route})=>{
    // const {item} = route.params;
    const navigation = useNavigation();
    const [users , setUsers]= useState([]);
    const restaurantRef = firebase.firestore().collection('restaurants');
   async function getData(){
        restaurantRef
        .onSnapshot(
            querySnapshot=>{
                const users = []
                querySnapshot.forEach((doc)=>{
                    const{ name,place, website,image} = doc.data()
                    users.push({
                        id:doc.id,
                        name,
                        // place,
                        website,
                        image,
                    })
                })
                setUsers(users)
            }
        )
    }
    useEffect(()=>{
        getData();
    },[])

    return(
      
        <View style={styles.details}>
            {/* {renderItem=({item})=>(
                <Text >
                    {item.name}
                </Text>
                )} */}
                <Text>{item.name}</Text>
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
export default Reviewpage;
const styles=StyleSheet.create({
    details:{
        backgroundColor:'#242422',
    },
    image:{
        width:'100%',
        height:300,
    },
    sizes:{
        fontSize:22,
        // fontFamily:'comfortaa',
         color:'white',
         fontWeight:'800'
    },
    size:{
        fontSize:25,
        // fontFamily:'comfortaa',
        color:'white',
        fontWeight:'800'
    },
    ingredients:{
        fontSize:22,
        color:'grey',

    },
    item:{
        shadowColor:'black',
        margin:5,
        padding:10,
        flexDirection:'row',
        flexWrap:'wrap'
    },
    seconsVieww:{
        flexDirection:'row',
        backgroundColor:'#242422',
        justifyContent:'space-between',
        width:"100%",
        // position:'fixed',
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
    downText:{
        color:'white',
        width:'100%',
    },
    button:{
        backgroundColor:'#F2AD71',
        marginTop:8,
        width:'100%',
        textAlign:'center',
        paddingTop:15,
        // fontStyle:'comfortaa',
        fontWeight:4,
        height:50,
        borderRadius:20
    }

})