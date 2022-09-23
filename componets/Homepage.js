// import React, { useEffect, useState } from "react";
// import { View,Text, StyleSheet,TextInput, TouchableOpacity, Keyboard, ActivityIndicator,FlatList, SafeAreaView,Image } from "react-native";

// import { getDatabase, ref, onValue,child,get } from "firebase/database";
// import { db,auth } from "../firebase";


// const Homepage=({navigation})=>{
//     const db = getDatabase();
//         const [ojbHandler, setObjHandler] = useState([]);
//         const arrObj = [];
      
//         useEffect(() => {
          
//               // read
//           const dbRef = ref(getDatabase());
//           get(child(dbRef, `restaurants`)).then((snapshot) => {
//          if (snapshot.exists()) {
//           console.log(snapshot.val());
//           let keys = Object.keys(snapshot.val())
//           const Key = snapshot.key;
//           const Data = snapshot.val();
    
//           let arr = []
//           for (var x = 0; x < keys.length; x++){
//             arr.push(Data[keys[x]])
//           }
//           console.log(arr)
//           setObjHandler(arr);
    
//         //   snapshot.forEach((Data) => {
//         //   const childDatas = Data.val();
//         //   let results =  childDatas;
//         //   let arr = [];
//         //   const obj  = results;
//         //   arrObj.push(arr)
//         //   console.log(arrObj);
    
//         //   console.log(arr);
    
//         //   // Data.forEach((childDatas) =>{
//         //   //   const Datas = childDatas.key;
//         //   //   const Keys = childDatas.val();
         
           
//         //   // })
    
          
    
//         // })
         
//       } else {
//         console.log("No data available");
//       }
//     }).catch((error) => {
//       console.error(error);
//     });
            
            
//           },[]);
//     const [recipes, setRecipes]=useState();
//     const [searchQuery, setSearchQuery]=useState('');
//     const [numberOfRecipes, setNumberOfRecipes]=useState('100');
//     const [loading, setLoading]=useState(false);
//     const apiId = 'bb8681be'
//     const apiKey = `68604c75c32e9d741e1e6a880e3d0866`;
//     const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;
//     // const [apiId,setApi]=useState('')
//     // const apiUrl = `https://console.firebase.google.com/project/restaurant-app-6e04f/firestore/data/~2Frestaurant-list~2FMH8Vth8jZjHNHYrQ6wWH`;


//     async function callApi(){
//         setLoading(true);
//         let response= await fetch(apiUrl)
//         let responseJson = await response.json();
//         setRecipes(responseJson.hits);
//         setLoading(false)
//         Keyboard.dismiss()
//         setSearchQuery('')
        
    

        
// // const restaurant = collection(this.db, "cities");

// // await setDoc(doc(citiesRef, "SF"), {
// //     name: "San Francisco", state: "CA", country: "USA",
// //     capital: false, population: 860000,
// //     regions: ["west_coast", "norcal"] });
// // await setDoc(doc(citiesRef, "LA"), {
// //     name: "Los Angeles", state: "CA", country: "USA",
// //     capital: false, population: 3900000,
// //     regions: ["west_coast", "socal"] });
// // await setDoc(doc(citiesRef, "DC"), {
// //     name: "Washington, D.C.", state: null, country: "USA",
// //     capital: true, population: 680000,
// //     regions: ["east_coast"] });
// // await setDoc(doc(citiesRef, "TOK"), {
// //     name: "Tokyo", state: null, country: "Japan",
// //     capital: true, population: 9000000,
// //     regions: ["kanto", "honshu"] });
// // await setDoc(doc(restaurant, "id"), {
//     // name: "Beijing", state: null, country: "China",
//     // capital: true, population: 21500000,
//     // regions: ["jingjinji", "hebei"] 
// //     name:"kfc"
// // });
//     }
//     useEffect(()=>{
//         setLoading(false)
//         callApi()
//     },[])
//     return(
//       <View style={styles.container}>
//         <Image style={styles.image}
//          source={require('../assets/picture.png')}>
//         </Image>
      
//         <View style={styles.seconsView}>
//             <TextInput placeholder='Search...'
//             style={[styles.inputField]}
//             onChangeText={text=>setSearchQuery(text)}
//             />
//             <TouchableOpacity
//         style={styles.button}
//         onPress={callApi} 
//         title='submit'>
//              <Icon
//                name="ios-search"
//                color="white"
//                size={47}
//             />
//         </TouchableOpacity>
//         </View>
//         <View style={styles.safe}>
//             {loading ? <ActivityIndicator style={styles.active}/>:
//             <FlatList style={styles.list}
//             data={recipes}
//             renderItem={({item})=>(
//                 <View style={styles.recipe}>
//                     <Image style={styles.image}
//                     source={{uri:`${item.recipe.image}`}}/>
//                     <View style={styles.view4}>
//                         <Text style={styles.lable}>{`${item.recipe.lable}`}</Text>
//                         <TouchableOpacity onPress={()=>{navigation.navigate('Details',{recipe:item.recipe})}}>
//                             <Text style={styles.detailss}>
//                                 View
//                             </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View> 
//              )}
//             keyExtractor={(item,index)=>index.toString()}
//             numColumns={2}/>}
//             </View>
//         <View style={styles.seconsVieww}>
//             <TouchableOpacity onPress={()=>{navigation.navigate('Home')}}>
//             <Icon
//                name="ios-home"
//                color="#F2AD71"
//                size={40}
               
//             />
//             <Text style={styles.underIcon}>home</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>{navigation.navigate('Profilepage')}}>
//             <Icon
//                name="ios-add"
//                color="#F2AD71"
//                size={40}
//             />
//              <Text style={styles.underIcon} >profile</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={()=>{navigation.navigate('Bookings')}}>
//             <Icon
//                name="ios-add"
//                color="#F2AD71"
//                size={40}
//             />
//              <Text style={styles.underIcon}>bookings</Text>
//             </TouchableOpacity>
//         </View>
//       </View>
//     )
// }
// export default Homepage;

import { View, Text , FlatList , StyleSheet , Pressable,Image,TextInput,TouchableOpacity} from 'react-native'
import React,{useState, useEffect} from 'react';
import {firebase} from '../firebase';
import Icon from "react-native-vector-icons/Ionicons";


const Homepage = ({navigation}) => {
    const [users , setUsers]= useState([]);
    const [loading, setLoading]=useState(false);
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
                        place,
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
  return (
    <View style={styles.container}>
         <Image style={styles.image}
         source={require('../assets/picture.png')}>
         </Image>
        <View style={styles.seconsView}>
          <TextInput placeholder='Search...'
            style={[styles.inputField]}
            onChangeText={text=>setSearchQuery(text)}/>
    <TouchableOpacity
         style={styles.button}
         title='submit'>
              <Icon
                name="ios-search"
                color="white"
               size={47}
            />
    </TouchableOpacity>
        </View>
        <View style={styles.safe}>
      <FlatList
      style={styles.list}
      data={users}
      numColumns={2}
      renderItem={({item})=>(
        // <Pressable style={styles.safe}>
            <View style={styles.recipe}>
                 <Image style={styles.image}
                 source ={item.image}/>
                    <View style={styles.view4}>
                    <Text style={styles.lable}>{item.name}</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Details',{recipe:item.recipe})}}>
                            <Text style={styles.detailss}>
                                View
                            </Text>
                        </TouchableOpacity>
             
                <Text style={styles.itemHeading}>{item.place}</Text>
            </View>
            </View>
      )}
      />
      </View>
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

export default Homepage
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#242422',
        // padding:15,
        // margin:5,
        // borderRadius:15,
        // marginHorizontal:10
    },
    innerContainer:{
        alignItems:'center',
        flexDirection:'column',
    },
    itemHeading:{
        fontWeight:'bold'
    },
    itemText:{
        fontWeight:'300'
    },
//     whatToCook:{
//         fontSize:23,
//         fontWeight:'800', 
//         width:'90%' ,
//         color:'#40e0d0'
//     },
    list:{
        width:'100%'
    },
//     active:{
//         size:'large',
//          color:'#40e0d0'
//     },
    safe:{
        flex:1,
        width:'100%',
        padding:6
    },
//     detailss:{
//         marginLeft:5,
//         fontSize:20,
//         color:'black'
//     },
    view4:{
        padding:20,
        flexDirection:'row'
    },
    seconsView:{
        marginTop:10,
        marginBottom:10,
        flexDirection:'row',
        width:"100%",
        height:'6.5%',
        justifyContent:'center',
        alignItems:'center'
    },
    inputField:{
        color:'#d9d9d9',
        height:'100%',
        width:'80%',
        backgroundColor:'white',
        borderRadius:20,
        paddingLeft:15,
        fontSize:20,
        // fontFamily: 'Comfortaa',
        fontStyle: 'normal'
    },
//     // inputField1:{
//     //      fontSize:18,
//     //     color:'#40e0d0',
//     //     fontWeight:'bold',
//     //     backgroundColor:'white',
//     //     borderRadius:20,
//     // },
//     buttons:{
//         flexDirection:'row'
//     },
    button:{
        backgroundColor:'#4a97cb',
        alignItems:'center',
        borderRadius:50,
        height:'100%',
        width:'14%',
        marginLeft:'2%',
        justifyContent:'center',
      
    },
//     buttonText:{
//         color:'white',
//         fontSize:20,
//         // fontFamily:'comfortaa',
//         fontWeight:'bold'
//     },
    image:{
        width:'100%',
        height:150,
    },
    lable:{
        fontSize:15,
        // fontFamily:'comfortaa',
        width:'60%',
        color:'black',
        fontWeight:'700',
    },
    recipe:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowRadius:8,
        width:'50%',
        margin:6,
        backgroundColor:'white',
    },
    seconsVieww:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    underIcon:{
        color:'white',
        alignItems:'center',
        // fontFamily:'comfortaa',
        justifyContent:'center',
        marginLeft:6,
        marginBottom:6
    }
})