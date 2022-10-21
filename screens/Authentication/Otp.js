import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import AuthLayout from './AuthLayout';
import { FONTS, SIZES, COLORS, icons } from '../../constants';
import { TextButton } from '../../components';
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ navigation }) => {

    const [timer, setTimer] = React.useState(60)

    React.useEffect(() => {
        let interval = setInterval(() => {
            setTimer(prevTime => {
                if (prevTime > 0) {
                    return prevTime - 1
                } else {
                    return prevTime
                }
            }, 1000)

            return () => clearInterval(interval)
        })
    }, [])
    
    return (
        <AuthLayout
            title="OTP Authentication"
            subtitle="An authentication code has been sent to test@gmail.com"
            titleContainerStyle={{ marginTop: SIZES.padding * 2 }}
        >
            <View style={{
                flex: 1,
                marginTop: SIZES.padding * 2
            }}>
                <OTPInputView
                    pinCount={4}
                    style={{
                        width: '100%',
                        height: 50
                    }}
                    codeInputFieldStyle={{
                        width: 65,
                        height: 65,
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.lightGray2,
                        color: COLORS.black,
                        ...FONTS.h3
                    }}
                    onCodeFilled={(code) => {
                        console.log(code)
                    }}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    marginTop: SIZES.padding
                }}>
                    <Text style={{
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}>
                        Didn't receive code?
                    </Text>

                    <TextButton1
                        label={`Resend (${timer}s)`}
                        disable={timer == 0 ? false : true}
                        buttonContainerStyle={{
                            marginLeft: SIZES.base,
                            backgroundColor: null
                        }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.h3
                        }}
                        onPress={() => setTimer(60)}
                    />
                </View>
            </View>

            <View>
                <TextButton
                    label="Continue"
                    buttonContainerStyle={{
                        height: 50,
                        alignItems: 'center',
                        borderRadius: SIZES.radius,
                        backgroundColor: COLORS.primary
                    }}
                    onPress={() => navigation.navigate("SignIn")}
                />

                <View style={{
                    marginTop: SIZES.padding,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: COLORS.darkGray,
                        ...FONTS.body3
                    }}>
                        By signing up, you agree to our.
                    </Text>
                    <TextButton1
                        label="Terms and Conditions"
                        buttonContainerStyle={{ backgroundColor: null }}
                        labelStyle={{
                            color: COLORS.primary,
                            ...FONTS.body3
                        }}
                        onPress={() => console.log("TnC")}
                    />
                </View>
            </View>
        </AuthLayout>
    )
}

export default Otp;