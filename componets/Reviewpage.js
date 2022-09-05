import React from "react";
import { ScrollView, Text, StyleSheet,View ,Image,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from '@react-navigation/native';


const Reviewpage=({route})=>{
    const {recipe} = route.params;
    const navigation = useNavigation();

    return(
      
        <View style={styles.details}>
        <View styel={styles.image}>
                <Image style={styles.image}
                source={{uri:`${recipe.image}`}}/>
            
        <View>
            <Text style={styles.sizes}>{`${recipe.label}`}</Text>
        </View>
        </View>
        <View style={styles.item}>
           <Text style={styles.size}>
              Cusine:  Seafood, Steakhouse, Greekfood
           </Text>
        </View>
        <ScrollView>
        <View style={styles.item}>
        <Icon
               name="ios-world"
               color="#F2AD71"
               size={20}
            />
           <Text style={styles.size}>
            website:
            {/* <Text style={styles.ingredients}>{`${recipe.uri}`}</Text> */}
           </Text>
        </View>
        <View style={styles.item}>
        <Icon
               name="ios-call"
               color="#F2AD71"
               size={20}
            />
           <Text style={styles.size}>
             Phone number:
           </Text>
        </View>
        <View style={styles.item}>
        <Icon
               name="ios-mail"
               color="#F2AD71"
               size={20}
            />
           <Text style={styles.size}>
             email:
           </Text>
        </View>
        <View style={styles.item}>
        <Icon
               name="ios-location"
               color="#F2AD71"
               size={20}
            />
           <Text style={styles.size}>
             Location:
           </Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.downText}>
            Lorem
Ipsum is that it has 
normal distribution 
of letters, as opposed 
to using 'Content here,
content here', making it 
look like readable English.
            </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('Bookings')}}
              title="Book table"
              style={styles.button}>
                <Text>Book table</Text>
            </TouchableOpacity>
        </View>
        <View>
        </View>
        </ScrollView>
        {/* <View style={styles.item}>
            <Text style={styles.sizes}>
                Ingredients:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.ingredients.map((item)=>item['food'])}`}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.sizes}>
                Food category:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.ingredients.map((item)=>item['foodCategory'])}`}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.sizes}>
                Calories:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.calories}`}</Text>
        </View>

        
        <View style={styles.item}>
            <Text style={styles.sizes}>
                Meal Type:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.mealType}`}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.sizes}>
                Description:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.ingredientLines}`}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.sizes}>
               Diet Lable:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.dietLabels}`}</Text>
        </View>

        <View style={styles.item}>
            <Text style={styles.sizes}>
                Cuisine Type:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.cuisineType}`}</Text>
        </View>
        <View style={styles.item}>
            <Text style={styles.sizes}>
                Dish Type:
            </Text>
            <Text style={styles.ingredients}>{`${recipe.dishType}`}</Text>
        </View> */}
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