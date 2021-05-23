import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import {SignUp} from '../screens'


const SignIn = ({navigation}) => {

   

  

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#009387' barStyle="light-content"/>
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={[styles.footer, {
                backgroundColor: "white"
            }]}
        >
            <Text style={[styles.text_footer, {
                color: "black"
            }]}>Username</Text>
            <View style={styles.action}>
                {/* <FontAwesome 
                    name="user-o"
                    color="black"
                    size={20}
                /> */}
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black"
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                   
                />
                
                <Animatable.View
                    animation="bounceIn"
                >
                    {/* <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    /> */}
                </Animatable.View>
              
            </View>
           
            <Animatable.View animation="fadeInLeft" duration={500}>
            </Animatable.View>
            
            

            <Text style={[styles.text_footer, {
                color: "black",
                marginTop: 35
            }]}>Password</Text>
            <View style={styles.action}>
                {/* <Feather 
                    name="lock"
                    color="black"
                    size={20}
                /> */}
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    style={[styles.textInput, {
                        color: "black",
                    }]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity>

                </TouchableOpacity>
            </View>

            <Animatable.View animation="fadeInLeft" duration={500}>
            </Animatable.View>
        
            

            <TouchableOpacity>
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUp')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });