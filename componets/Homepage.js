import React, { useEffect, useState } from "react";
import { View,Text, StyleSheet,TextInput, TouchableOpacity, Keyboard, ActivityIndicator,FlatList, SafeAreaView,Image } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const Homepage=({navigation})=>{
    const [recipes, setRecipes]=useState();
    const [searchQuery, setSearchQuery]=useState('');
    const [numberOfRecipes, setNumberOfRecipes]=useState('100');
    const [loading, setLoading]=useState(false);
    const apiId = 'bb8681be'
    const apiKey = `68604c75c32e9d741e1e6a880e3d0866`;
    const apiUrl = `https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}&to=${numberOfRecipes}&calories=591-722&health=alcohol-free`;

    async function callApi(){
        setLoading(true);
        let response = await fetch(apiUrl);
        let responseJson = await response.json();
        setRecipes(responseJson.hits);
        setLoading(false)
        Keyboard.dismiss()
        setSearchQuery('')
    }
    useEffect(()=>{
        setLoading(false)
        callApi()
    },[])
    return(
      <View style={styles.container}>
        <Image style={styles.image}
         source={require('../assets/picture.png')}>
        </Image>
        <View style={styles.seconsView}>
            <TextInput placeholder='Search...'
            style={[styles.inputField]}
            onChangeText={text=>setSearchQuery(text)}
            />
            <TouchableOpacity
        style={styles.button}
        onPress={callApi} 
        title='submit'
        >
             <Icon
               name="ios-search"
               color="white"
               size={47}
            />
       
        </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.safe}>
            {loading ? <ActivityIndicator style={styles.active}/>:
            <FlatList
            data={recipes}
            renderItem={({item})=>(
                <View style={styles.recipe}>
                    <Image style={styles.image}
                    source={{uri:`${item.recipe.image}`}}/>
                    <View style={styles.view4}>
                        <Text style={styles.lable}>{`${item.recipe.label}`}</Text>
                        <TouchableOpacity onPress={()=>{navigation.navigate('Details',{recipe:item.recipe})}}>
                            <Text style={styles.detailss}>
                                View
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
            keyExtractor={(item,index)=>index.toString()}/>}
        </SafeAreaView>
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
export default Homepage;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#242422'
          
    },
    whatToCook:{
        fontSize:23,
        fontWeight:'800', 
        width:'90%' ,
        color:'#40e0d0'
    },
    active:{
        size:'large',
         color:'#40e0d0'
    },
    safe:{
        flex:1,
        flexDirection:'row',
    },
    detailss:{
        marginLeft:50,
        fontSize:20,
        color:'#black'
    },
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
        fontFamily: 'Comfortaa',
        fontStyle: 'normal'
    },
    // inputField1:{
    //      fontSize:18,
    //     color:'#40e0d0',
    //     fontWeight:'bold',
    //     backgroundColor:'white',
    //     borderRadius:20,
    // },
    buttons:{
        flexDirection:'row'
    },
    button:{
        backgroundColor:'#4a97cb',
        alignItems:'center',
        borderRadius:50,
        height:'100%',
        width:'14%',
        marginLeft:'2%',
        justifyContent:'center',
      
    },
    buttonText:{
        color:'white',
        fontSize:20,
        fontFamily:'comfortaa',
        fontWeight:'bold'
    },
    image:{
        width:'100%',
        height:200,
    },
    lable:{
        fontSize:15,
        fontFamily:'comfortaa',
        width:'60%',
        color:'black',
        fontWeight:'700',
    },
    recipe:{
        shadowColor:'black',
        shadowOpacity:0.26,
        shadowRadius:8,
        elevation:5,
        backgroundColor:'white',
        margin:10,
        marginTop:40,
    },
    seconsVieww:{
        flexDirection:'row',
        width:'100%',
        justifyContent:'space-between'
    },
    underIcon:{
        color:'white',
        alignItems:'center',
        fontFamily:'comfortaa',
        justifyContent:'center',
        marginLeft:6,
        marginBottom:6
    }

})