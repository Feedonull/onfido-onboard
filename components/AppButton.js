import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Colors from '../assets/colors/Colors';

const AppButton = ({ onPress, title }) => (
        
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={onPress}
                style={styles.appButtonContainer} >
                <Text style={styles.appButtonText}>{title}</Text>
            </TouchableOpacity>
      );

const styles = StyleSheet.create({
    appButtonContainer:{
        backgroundColor: Colors.PrimaryBlue,
        justifyContent: 'center',
        alignContent: 'center',
        width: 160,
        height: 48,
        borderRadius: 10,
        marginRight: 20
    },
    appButtonText: {
        color: Colors.White,
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        alignSelf: 'center'


    }
});

export default AppButton;