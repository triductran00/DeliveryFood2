import React, {useState, useContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

import {
  View,
  Text,
  Linking,
  Pressable,
  Alert,
  Switch,
  StyleSheet,
  TouchableOpacity
 
} from 'react-native';


import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,

  } from '@react-navigation/drawer';

  import {
    Avatar,
    Button,
    Icon
     } from 'react-native-elements'

import {colors} from '../global/styles'
import { SignInContext } from '../contexts/authContext';

export default function DrawerContent(props){

    const {dispatchSignedIn} = useContext(SignInContext)
    const [darkMode, setDarkMode] = useState(false);

    async function signOut() {
        
        try {
            auth()
            .signOut()
            .then(
                ()=>{console.log("Đăng xuất thành công!!!")
                Alert.alert("Đăng xuất thành công!!!")
                dispatchSignedIn({type:"UPDATE_SIGN_IN",payload: {userToken:null}})
            })

        } catch(error){
            Alert.alert(error.code)
        }
    }

         return(
             <View style = {styles.container}>
                 <DrawerContentScrollView {...props}>
                 <View style = {{backgroundColor:colors.buttons,}}>
                <View style = {{flexDirection:'row', alignItems:'center',
                                    paddingLeft:20,paddingVertical:10}}>
                    <Avatar 
                        rounded
                        avatarStyle ={styles.avatar}
                        size = {75}
                        source = {{uri:"https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg"}}
                    />

                    <View style ={{marginLeft:10}}>
                        <Text style = {{fontWeight:'bold', color:colors.cardbackground, fontSize:18 }}>name</Text>
                        <Text style = {{color:colors.cardbackground, fontSize:14}}>tductri3@gmail.com</Text>
                    </View>

                </View>

                <View style ={{flexDirection:'row',justifyContent:"space-evenly",paddingBottom:5}}>

                    <View style ={{flexDirection:'row', marginTop:0,}}>
                        <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}  >
                            <Text  style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>1</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}}>Yêu thích</Text>
                        </View>
                    </View>

                    <View style ={{flexDirection:'row', marginTop:0}}>
                         <View style = {{marginLeft:10,alignItems:"center", justifyContent:"center" }}  >
                            <Text  style ={{fontWeight:'bold',color:colors.cardbackground,fontSize:18 }}>0</Text>
                            <Text style ={{color:colors.cardbackground,fontSize:14}}>Giỏ hàng</Text>
                        </View>    
                    </View>

                </View>
            </View>


                
                <DrawerItemList {...props} />

                <DrawerItem 
                    label = "Thanh toán"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "credit-card-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />


                <DrawerItem 
                    label = "Khuyến mãi"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "tag-heart"
                            color ={color}
                            size ={size}
                        />
                    )}
                />



            <DrawerItem 
                    label = "Cài đặt"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "cog-outline"
                            color ={color}
                            size ={size}
                        />
                    )}
                />



        <DrawerItem 
                    label = "Trợ giúp"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "lifebuoy"
                            color ={color}
                            size ={size}
                        />
                    )}
                />

       <View style ={{borderTopWidth:1, borderTopColor:colors.grey5}}>
            <Text style ={styles.preferences}>Hiển thị</Text>

            <View style ={styles.switchText}>
                <Text style ={styles.darkthemeText}>Chế độ tối</Text>
                <View style ={{ paddingRight:10}}>
                        <Switch 
                            trackColor = {{false: "#767577",true : "#81b0ff"}}
                            thumbColor = "#f4f3f4"
                            value = {darkMode} 
                            onValueChange = {(value) => setDarkMode(value)} 
                        />
                </View>
            </View>

       </View>         

                </DrawerContentScrollView>  

                
                <DrawerItem 
                    label = "Đăng xuất"
                    icon = {({color,size})=>(
                        <Icon 
                            type ="material-community"
                            name = "logout-variant"
                            color ={color}
                            size ={size}
                            onPress ={()=>{signOut()}} 
                        />
                    )}
                />
              
             </View>
         )
     }
     
     const styles = StyleSheet.create({
        container:{
            flex:1
        },

        avatar:{
            borderWidth:4,
            borderColor:colors.pagebackground
            
        },

        preferences:{
            fontSize: 16,
            color:colors.grey2,
             paddingTop:10,
             paddingLeft:20,
        },

        switchText:{
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between",
            paddingLeft:20,
            paddingVertical:5,
            paddingRight:10
        },
        darkthemeText:{
            fontSize: 16,
            color:colors.grey2,
             paddingTop:10,
             paddingLeft:0,
             fontWeight:"bold"
        }
        
    })