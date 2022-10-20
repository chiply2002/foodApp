import React from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image   
} from 'react-native';
import { FONTS, SIZES, COLORS, icons, dummyData } from '../constants';

const VerticalFoodCard = ({ containerStyle, item, onPress}) => {
    return (
        <TouchableOpacity style={{
            width: 200,
            paddingVertical: SIZES.radius,
            alignItems: 'center',
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
            ...containerStyle
        }}>
            {/* Calories and Fav */}
            <View style={{ flexDirection: 'row'}}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <Image source={icons.calories} style={{width: 30, height: 30}} />
                    <Text style={{color: COLORS.darkGray2, ...FONTS.body5}}>{item.calories} Calories</Text>
                </View>

                <Image source={icons.love} style={{marginRight: SIZES.base, width: 20, height: 20, tintColor: item.isFavourite ? COLORS.primary : COLORS.gray}} />
            </View>

            {/* Image */}
            <View style={{
                height: 120,
                width: 120,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Image source={item.image} style={{height: '100%', width: '100%'}} />
            </View>

            {/* Info */}
            <View style={{
                alignItems: 'center',
                marginTop: -20,
            }}>
                <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
                <Text style={{color: COLORS.darkGray2, textAlign: 'center', ...FONTS.body5}}>{item.description}</Text>
                <Text style={{marginTop: SIZES.radius, ...FONTS.h2}}>${item.price}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default VerticalFoodCard;