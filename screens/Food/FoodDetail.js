import React from 'react';
import {
    View,
    Text
} from 'react-native';
import { Header } from '../../components';

const FoodDetail = () => {

    function renderHeader() {
        return (
            <Header />
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

            {/* Footer */}
        </View>
    )
}

export default FoodDetail;