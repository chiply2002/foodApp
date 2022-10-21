import React from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { CartQuantity, Header, IconButton, IconLabel, LineDivider, TextButton } from '../../components';
import { COLORS, dummyData, FONTS, icons, images, SIZES } from '../../constants';

const FoodDetail = () => {

    const [foodItem, setFoodItem] = React.useState(dummyData.vegBiryani)
    const [selectedSize, setSelectedSize] = React.useState("")

    function renderHeader() {
        return (
            <Header 
                title="DETAILS"
                containerStyle={{
                    height: 50,
                    marginHorizontal: SIZES.padding,
                    marginTop: 40
                }}
                leftComponent={
                    <IconButton
                        icon={icons.back}
                        containerStyle={{
                            width: 40,
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderWidth: 1,
                            borderRadius: SIZES.radius,
                            borderColor: COLORS.gray2
                        }}
                        iconStyle={{
                            width: 20,
                            height: 20,
                            tintColor: COLORS.gray2
                        }}
                        onPress={() => console.log("details")}
                    />
                }
                rightComponent={
                    <CartQuantity
                        quantity={3}
                    />
                }
            />
        )
    }

    function renderDetails() {
        return (
            <View style={{
                marginTop: SIZES.radius,
                marginBottom: SIZES.padding,
                paddingHorizontal: SIZES.padding
            }}>
                <View style={{
                    height: 190,
                    borderRadius: 15,
                    backgroundColor: COLORS.lightGray2
                }}>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: SIZES.base,
                        paddingHorizontal: SIZES.radius
                    }}>
                        {/* Calories */}
                        <View style={{
                            flexDirection: 'row'
                        }}>
                            <Image source={icons.calories} style={{width: 30, height: 30}} />

                            <Text style={{
                                color: COLORS.darkGray2,
                                ...FONTS.body4
                            }}>
                                {foodItem?.calories} calories
                            </Text>
                        </View>

                        {/* Favourite */}
                        <Image source={icons.love} style={{
                            width: 20, 
                            height: 20, 
                            tintColor: foodItem?.isFavourite ? COLORS.primary : COLORS.gray
                        }} />
                    </View>

                    {/* Food Image */}
                    <Image
                        source={foodItem?.image}
                        resizeMode="contain"
                        style={{ height: 170, width: '100%' }}
                    />
                </View>

                {/* Food info */}
                <View style={{ marginTop: SIZES.padding }}>
                    {/* Name & desc */}
                    <Text style={{ ...FONTS.h1 }}>
                        {foodItem?.name}
                    </Text>
                    <Text style={{
                        marginTop: SIZES.base,
                        color: COLORS.darkGray,
                        textAlign: 'justify',
                        ...FONTS.body3
                    }}>
                        {foodItem?.description}
                    </Text>

                    {/* Rating, Duration, Shipping */}
                    <View style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding
                    }}>
                        <IconLabel
                            containerStyle={{ backgroundColor: COLORS.primary }}
                            icon={icons.star}
                            label="4.5"
                            labelStyle={{ color: COLORS.white }}
                        />

                        <IconLabel
                            containerStyle={{ marginLeft: SIZES.radius, paddingHorizontal: 0 }}
                            icon={icons.clock}
                            label="30 Mins"
                        />

                        <IconLabel
                            containerStyle={{ marginLeft: SIZES.radius, paddingHorizontal: 0 }}
                            icon={icons.dollar}
                            label="Free Shipping"
                        />
                    </View>

                    {/* Sizes */}
                    <View style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        alignItems: 'center'
                    }}>
                        <Text style={{ ...FONTS.h3 }}> Sizes: </Text>
                        <View style={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            marginLeft: SIZES.padding
                        }}>
                            {dummyData.sizes.map((item, index) => {
                                return (
                                    <TextButton
                                        key={'Sizes-$(index)'}
                                        buttonContainerStyle={{
                                            width: 55,
                                            height: 55,
                                            margin: SIZES.base,
                                            borderWidth: 1,
                                            borderRadius: SIZES.radius,
                                            borderColor: selectedSize == item.id ? COLORS.primary : COLORS.gray2,
                                            backgroundColor: selectedSize == item.id ? COLORS.primary : null
                                        }}
                                        label={item.label}
                                        labelStyle={{
                                            color: selectedSize == item.id ? COLORS.white : COLORS.gray2,
                                            ...FONTS.body2
                                        }}
                                        onPress={() => setSelectedSize(item.id)}
                                    />
                                )
                            })}
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderRestaurant() {
        return (
            <View style={{
                flexDirection: 'row',
                marginVertical: SIZES.padding,
                paddingHorizontal: SIZES.padding,
                alignItems: 'center'
            }}>
                <Image source={images.profile} style={{
                    width: 50,
                    height: 50,
                    borderRadius: SIZES.radius
                }} />

                {/* info */}
                <View style={{
                    flex: 1,
                    marginLeft: SIZES.radius,
                    justifyContent: 'center'
                }}>
                    <Text style={{ ...FONTS.h3 }}>By Programmer</Text>
                    <Text style={{
                        color: COLORS.gray,
                        ...FONTS.body4
                    }}>1.2km away from you</Text>
                </View>

                {/* Rating */}
                <View>
                    
                </View>
            </View>
        )
    }

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: 'white'
            }}
        >
            {/* Header */}
            {renderHeader()}

            {/* Body */}
            <ScrollView>
                {/* Food Detail */}
                {renderDetails()}

                <LineDivider />

                {/* Restaurant */}
                {renderRestaurant()}
            </ScrollView>

            {/* Footer */}
        </View>
    )
}

export default FoodDetail;