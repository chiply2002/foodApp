import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import AuthLayout from './AuthLayout';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import FormInput from '../../components/FormInput';
import { utils } from "../../utils";
import { CustomSwitch, TextButton1, TextIconButton1 } from '../../components';

import { authentication } from '../firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [username, setUsername] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [emailError, setEmailError] = React.useState("")
    const [usernameError, setUsernameError] = React.useState("")
    const [passwordError, setPasswordError] = React.useState("")

    function isEnableSignUp() {
        return email != "" && username != "" && password != "" && emailError == "" && passwordError == "" && usernameError == ""
    }

    return (
        <AuthLayout 
            title="Getting Started"
            subtitle="Create an account to continue"
            titleContainerStyle={{ marginTop: 0 }}
        >
            <View style={{
                flex: 1,
                marginTop: SIZES.radius
            }}>
                <FormInput
                    label="Email"
                    keyboardType="email-address"
                    autoCompleteType='email'
                    onChange={(value) => {
                        utils.validateEmail(value, setEmailError)
                        setEmail(value)
                    }}
                    errorMsg={emailError}
                    appendComponent={
                        <View style={{justifyContent: 'center'}}>
                            <Image 
                                source={email == "" || (email != "" && emailError == "") ? icons.correct : icons.cancel} 
                                style={{
                                    height: 20, 
                                    width: 20, 
                                    tintColor: email == "" ? COLORS.gray : (email != "" && emailError == "") ? COLORS.green : COLORS.red
                                }} />
                        </View>
                    }
                />

                <FormInput
                    label="Username"
                    containerStyle={{ marginTop: SIZES.radius}}
                    onChange={(value) => {
                        setUsername(value)
                    }}
                    errorMsg={usernameError}
                    appendComponent={
                        <View style={{justifyContent: 'center'}}>
                            <Image source={username == "" || (username != "" && usernameError == "") ? icons.correct : icons.cancel}
                            style={{height: 20, width: 20, 
                                tintColor: username == "" ? COLORS.gray : (username != "" && usernameError == "") ? COLORS.green : COLORS.red}} />
                        </View>
                    }
                />  

                <FormInput 
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{ marginTop: SIZES.radius}}
                    onChange={(value) => {
                        utils.validatePassword(value, setPasswordError)
                        setPassword(value)
                    }}
                    errorMsg={passwordError}
                    appendComponent={
                        <TouchableOpacity style={{
                            width: 40,
                            alignItems: 'flex-end',
                            justifyContent: 'center'
                        }} onPress={() => setShowPass(!showPass)}>
                            <Image source={showPass ? icons.eye_close : icons.eye} 
                            style={{
                                height: 20,
                                width: 20,
                                tintColor: COLORS.gray
                            }} />
                        </TouchableOpacity>
                    }
                />

                <TextButton1
                    label="Sign Up"
                    disable={isEnableSignUp() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignUp() ? COLORS.primary : COLORS.transparentPrimary
                    }}
                    onPress={() => navigation.navigate("Otp")}
                    // onPress={handleSignUp}
                />

                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'center'
                }}>
                    <Text style={{color: COLORS.darkGray,...FONTS.body3}}>Already have an account?</Text>

                    <TextButton1 
                        label="Sign In"
                        buttonContainerStyle={{ backgroundColor: null}}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.goBack()}
                    />
                </View>

                <View>
                    {/* Facebook */}
                    <TextIconButton1
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.blue
                        }}
                        icon={icons.fb}
                        iconPosition="LEFT"
                        iconStyle={{tintColor: COLORS.white}}
                        label="Continue With Facebook"
                        labelStyle={{
                            marginLeft: SIZES.radius,
                            color: COLORS.white
                        }}
                        onPress={() => console.log("FB")}
                    />
                    {/* Google */}
                    <TextIconButton1
                        containerStyle={{
                            height: 50,
                            alignItems: 'center',
                            marginTop: SIZES.radius,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray2
                        }}
                        icon={icons.google}
                        iconPosition="LEFT"
                        iconStyle={{tintColor: null}}
                        label="Continue With Google"
                        labelStyle={{
                            marginLeft: SIZES.radius
                        }}
                        onPress={() => console.log("GG")}
                    />
                </View>
            </View>
            
        </AuthLayout>
    )
}

export default SignUp;