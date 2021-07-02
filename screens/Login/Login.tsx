import React from 'react';
import {Text,View,Image, TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';
import { images, theme } from '../../constants';

const { login } = images;

const { COLORS, FONTS, SIZES } = theme;

const Login = ({navigation} : any) =>{

        return(
            <View style={{backgroundColor:"#FFF",height:"100%"}}>
                <Image resizeMode="contain" source ={login}
                    style={{
                        width: '100%',
                        height: '50%',
                      }}
                />
                <Text
                 style={{
                    ...FONTS.h1,
                     alignSelf:"center",
                 }}
                >Login Page</Text>

                <Text
                style={{
                    ...FONTS.h4,
                    marginHorizontal:55,
                    textAlign:'center',
                    marginTop:5,
                    opacity:0.6
                }}
                >
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                </Text>

                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor: COLORS.purple,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="mail" color={COLORS.purple} size={24}/>
                    <TextInput
                    placeholder="Email"
                    placeholderTextColor={COLORS.black} 
                        style={{paddingHorizontal:10, fontSize: 16}}
                    />

                    

                </View>
                <View style={{
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:COLORS.purple,
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="lock" color={COLORS.purple} size={24}/>
                    <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor={COLORS.black}
                        style={{paddingHorizontal:10, fontSize: 16}}
                    />

                    

                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:COLORS.purple,
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Text style={{
                        color:COLORS.white,
                        ...FONTS.h4
                    }}>Login</Text>
                </View>

                <View style={{
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,
                    
                    paddingVertical:10,
                }}>
                    <Text
                    onPress={()=>navigation.navigate('Register')}
                     style={{
                        color:COLORS.purple,
                       ...FONTS.body3
                    }}>Not account ? Register here</Text>
                </View>
                <Text 
                
                onPress={()=>navigation.navigate('Home')}
                
                style={{
                    alignSelf:"center",
                    color:COLORS.purple,
                    ...FONTS.body4,
                    paddingVertical:30,
                    textDecorationLine: "underline",
                }}>Back Home</Text>
            </View>
        )
}

export default Login;
