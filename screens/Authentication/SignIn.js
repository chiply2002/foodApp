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

const SignIn = ({ navigation }) => {

    const [email, setEmail] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [emailError, setEmailError] = React.useState("")

    const [showPass, setShowPass] = React.useState(false)
    const [saveMe, setSaveMe] = React.useState(false)

    function isEnableSignIn() {
        return email != "" && password != "" && emailError == ""
    }

    return (
        <AuthLayout 
            title="Let's Sign You In"
            subtitle="Welcome back. you've been missed"
        >
            <View style={{
                flex: 1,
                marginTop: SIZES.padding
            }}>
                {/* Form Input */}
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
                    label="Password"
                    secureTextEntry={!showPass}
                    autoCompleteType="password"
                    containerStyle={{ marginTop: SIZES.radius}}
                    onChange={(value) => setPassword(value)}
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

                {/* Save / Forgot pass */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'space-between'
                }}>
                    <CustomSwitch
                        value={saveMe}
                        onChange={(value) => setSaveMe(value)}
                    />

                    <TextButton1
                        label="Forgot Password?"
                        buttonContainerStyle={{ backgroundColor : null }}
                        labelStyle={{
                            color: COLORS.gray,
                            ...FONTS.body4
                        }}
                        onPress={() => navigation.navigate("ForgotPassword")}
                    />
                </View>

                {/* Sign In */}
                <TextButton1
                    label="Sign In"
                    disabled={isEnableSignIn() ? false : true}
                    buttonContainerStyle={{
                        height: 55,
                        alignItems: 'center',
                        marginTop: SIZES.padding,
                        borderRadius: SIZES.radius,
                        backgroundColor: isEnableSignIn() ? COLORS.primary : COLORS.transparentPrimary
                    }} 
                    onPress={() => navigation.navigate("Home1")}
                />

                {/* Sign Up */}
                <View style={{
                    flexDirection: 'row',
                    marginTop: SIZES.radius,
                    justifyContent: 'center'
                }}>
                    <Text style={{
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}>
                        Don't have an account?
                    </Text>

                    <TextButton1
                        label="Sign Up"
                        buttonContainerStyle={{ 
                            marginLeft: 3,
                            backgroundColor: null 
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => navigation.navigate("SignUp")}
                    />
                </View>

                {/* Footer */}
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

export default SignIn;